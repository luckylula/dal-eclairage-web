import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

type JsonBody = {
  nom?: unknown;
  email?: unknown;
  telephone?: unknown;
  entreprise?: unknown;
  typeEspace?: unknown;
  surface?: unknown;
  ambiance?: unknown;
  budget?: unknown;
  description?: unknown;
  source?: unknown;
};

function str(v: unknown): string | null {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  return s.length ? s : null;
}

function escHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  let body: JsonBody;
  try {
    body = (await request.json()) as JsonBody;
  } catch {
    return NextResponse.json({ error: "[JSON invalide — placeholder]" }, { status: 400 });
  }

  const nom = str(body.nom);
  const email = str(body.email);
  if (!nom || !email) {
    return NextResponse.json({ error: "[Nom et email requis — placeholder]" }, { status: 400 });
  }

  const source = str(body.source) ?? "contact";

  let record;
  try {
    record = await prisma.contact.create({
      data: {
        nom,
        email,
        telephone: str(body.telephone),
        entreprise: str(body.entreprise),
        typeEspace: str(body.typeEspace),
        surface: str(body.surface),
        ambiance: str(body.ambiance),
        budget: str(body.budget),
        description: str(body.description),
      },
    });
  } catch (e) {
    console.error("[Prisma contact]", e);
    return NextResponse.json(
      { error: "[Enregistrement impossible — placeholder. Vérifiez DATABASE_URL.]" },
      { status: 500 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;

  if (apiKey && from && to) {
    try {
      const resend = new Resend(apiKey);
      const lines = [
        `<p><strong>Source</strong> : ${escHtml(source)}</p>`,
        `<p><strong>Nom</strong> : ${escHtml(nom)}</p>`,
        `<p><strong>Email</strong> : ${escHtml(email)}</p>`,
      ];
      const opt = (label: string, val: string | null) =>
        val ? `<p><strong>${escHtml(label)}</strong> : ${escHtml(val)}</p>` : "";

      lines.push(
        opt("Téléphone", record.telephone),
        opt("Entreprise", record.entreprise),
        opt("Type d'espace", record.typeEspace),
        opt("Surface", record.surface),
        opt("Ambiance", record.ambiance),
        opt("Budget", record.budget),
        opt("Description", record.description),
      );

      await resend.emails.send({
        from,
        to: [to],
        subject: `[DAL — placeholder] Nouveau message (${source})`,
        html: `<div style="font-family:system-ui,sans-serif;font-size:14px;color:#1a1a1a">${lines.join(
          "",
        )}</div>`,
      });
    } catch (e) {
      console.error("[Resend]", e);
      // Le contact est enregistré même si l'email échoue
    }
  }

  return NextResponse.json({ ok: true, id: record.id });
}
