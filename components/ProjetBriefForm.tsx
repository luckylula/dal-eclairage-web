"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "mt-1 w-full border border-line bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition focus:border-dal";
const labelClass = "block font-sans text-xs font-semibold uppercase tracking-widest text-muted";

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
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="nom">
          Nom <span className="text-dal">*</span>
        </label>
        <input id="nom" name="nom" required className={inputClass} autoComplete="family-name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="prenom">
          Prénom <span className="text-dal">*</span>
        </label>
        <input id="prenom" name="prenom" required className={inputClass} autoComplete="given-name" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="entreprise">
          Entreprise
        </label>
        <input id="entreprise" name="entreprise" className={inputClass} autoComplete="organization" />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">
          Mail <span className="text-dal">*</span>
        </label>
        <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </div>
      <div>
        <label className={labelClass} htmlFor="telephone">
          Téléphone
        </label>
        <input id="telephone" name="telephone" type="tel" className={inputClass} autoComplete="tel" />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center bg-ink px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "Envoyer"}
        </button>
        {message ? (
          <p
            className={`font-sans text-sm ${
              status === "ok" ? "text-muted" : "text-dal"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
