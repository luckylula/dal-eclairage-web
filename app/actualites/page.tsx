import type { Post } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { siteFeatures } from "@/lib/site-features";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Actualités",
};

function excerpt(text: string, max = 180) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}…`;
}

export default async function ActualitesPage() {
  if (!siteFeatures.actualites) {
    redirect("/");
  }

  let posts: Post[] = [];
  let erreurDb = false;

  try {
    posts = await prisma.post.findMany({
      where: { publie: true },
      orderBy: { date: "desc" },
    });
  } catch {
    erreurDb = true;
  }

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">Blog</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-ink sm:text-5xl md:text-6xl">Actualités</h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-muted">
            [Introduction — placeholder. Nouveautés produits, inspirations et retours de chantier.]
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          {erreurDb ? (
            <p className="max-w-2xl font-sans text-sm text-muted">
              [Connexion base de données indisponible — placeholder. Vérifiez{" "}
              <code className="rounded bg-cream px-1 py-0.5 text-ink">DATABASE_URL</code> dans{" "}
              <code className="rounded bg-cream px-1 py-0.5 text-ink">.env</code>.]
            </p>
          ) : posts.length === 0 ? (
            <p className="max-w-2xl font-sans text-sm text-muted">
              [Aucun article publié pour le moment — placeholder. Créez des entrées via l’API sécurisée ou
              Prisma Studio.]
            </p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <article
                  key={p.id}
                  id={`post-${p.id}`}
                  className="flex flex-col border border-line bg-cream/30"
                >
                  <div className="relative aspect-[16/10] bg-line">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <Image
                        src={`https://picsum.photos/seed/dal-post-${p.id}/1200/750`}
                        alt="[Visuel article — placeholder]"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={p.date.toISOString()}
                      className="font-sans text-xs uppercase tracking-widest text-muted"
                    >
                      {p.date.toLocaleDateString("fr-CH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-3 font-serif text-2xl text-ink">{p.titre}</h2>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted">
                      {excerpt(p.contenu)}
                    </p>
                    <Link
                      href={`/actualites#post-${p.id}`}
                      className="mt-6 inline-flex font-sans text-sm text-ink underline-offset-4 hover:text-dal hover:underline"
                    >
                      [Lire la suite — placeholder]
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
