"use client";

import { useState, type FormEvent } from "react";

const labelClass = "block font-sans text-sm text-ink";
const fieldClass =
  "projet-form-field mt-2 w-full border-0 border-b-2 border-black bg-transparent px-0 py-2.5 font-sans text-sm text-ink shadow-none outline-none ring-0 transition placeholder:text-muted/60 focus:border-black focus:outline-none focus:ring-0";

export function ProjetBriefForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const prenom = String(fd.get("prenom") ?? "").trim();
    const nom = String(fd.get("nom") ?? "").trim();
    const payload = {
      nom: `${prenom} ${nom}`.trim(),
      email: String(fd.get("email") ?? "").trim(),
      telephone: String(fd.get("telephone") ?? "").trim() || null,
      entreprise: String(fd.get("entreprise") ?? "").trim() || null,
      description: String(fd.get("message") ?? "").trim() || null,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "brief" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("err");
        setMessage(typeof data.error === "string" ? data.error : "Une erreur est survenue. Réessayez.");
        return;
      }
      setStatus("ok");
      setMessage("Merci. Nous vous recontactons sous peu.");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
      setMessage("Erreur réseau. Vérifiez votre connexion.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div>
        <label className={labelClass} htmlFor="prenom">
          Prénom <span className="text-dal">*</span>
        </label>
        <input
          id="prenom"
          name="prenom"
          required
          className={fieldClass}
          autoComplete="given-name"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="nom">
          Nom <span className="text-dal">*</span>
        </label>
        <input id="nom" name="nom" required className={fieldClass} autoComplete="family-name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="entreprise">
          Entreprise
        </label>
        <input id="entreprise" name="entreprise" className={fieldClass} autoComplete="organization" />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Email <span className="text-dal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          autoComplete="email"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="telephone">
          Téléphone
        </label>
        <input id="telephone" name="telephone" type="tel" className={fieldClass} autoComplete="tel" />
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          Message <span className="text-dal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          className={`${fieldClass} min-h-[5.5rem] resize-none`}
        />
      </div>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center bg-ink px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "Envoyer"}
        </button>
        {message ? (
          <p className={`font-sans text-sm ${status === "ok" ? "text-muted" : "text-dal"}`}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
