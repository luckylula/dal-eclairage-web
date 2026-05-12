import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function getAdminKey(request: Request) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) return null;
  const auth = request.headers.get("authorization");
  const bearer = auth?.startsWith("Bearer ") ? auth.slice(7).trim() : null;
  const header = request.headers.get("x-admin-api-key");
  if (bearer === expected) return true;
  if (header === expected) return true;
  return false;
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { publie: true },
      orderBy: { date: "desc" },
      select: {
        id: true,
        titre: true,
        contenu: true,
        image: true,
        date: true,
      },
    });
    return NextResponse.json(posts);
  } catch (e) {
    console.error("[Prisma posts GET]", e);
    return NextResponse.json(
      { error: "[Base de données indisponible — placeholder]" },
      { status: 503 },
    );
  }
}

export async function POST(request: Request) {
  if (!process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "ADMIN_API_KEY manquant" }, { status: 500 });
  }
  if (!getAdminKey(request)) return unauthorized();

  let body: {
    titre?: unknown;
    contenu?: unknown;
    image?: unknown;
    publie?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "[JSON invalide — placeholder]" }, { status: 400 });
  }

  const titre = typeof body.titre === "string" ? body.titre.trim() : "";
  const contenu = typeof body.contenu === "string" ? body.contenu.trim() : "";
  if (!titre || !contenu) {
    return NextResponse.json({ error: "[titre et contenu requis — placeholder]" }, { status: 400 });
  }

  const image = typeof body.image === "string" && body.image.trim() ? body.image.trim() : null;
  const publie = Boolean(body.publie);

  try {
    const post = await prisma.post.create({
      data: { titre, contenu, image, publie },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (e) {
    console.error("[Prisma posts POST]", e);
    return NextResponse.json({ error: "[Création impossible — placeholder]" }, { status: 500 });
  }
}
