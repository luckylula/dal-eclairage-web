"use client";

import { useState, type FormEvent } from "react";

const typesEspace = [
  "Restaurant",
  "Bureau",
  "Résidence",
  "Commerce",
  "Hôtel",
  "Extérieur",
  "Autre",
] as const;

const budgets = [
  "< 5 000 CHF",
  "5 000–15 000 CHF",
  "15 000–50 000 CHF",
  "> 50 000 CHF",
  "À définir",
] as const;

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
      typeEspace: String(fd.get("typeEspace") ?? "").trim() || null,
      surface: String(fd.get("surface") ?? "").trim() || null,
      ambiance: String(fd.get("ambiance") ?? "").trim() || null,
      budget: String(fd.get("budget") ?? "").trim() || null,
      description: String(fd.get("description") ?? "").trim() || null,
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
        setMessage(typeof data.error === "string" ? data.error : "[Erreur — placeholder]");
        return;
      }
      setStatus("ok");
      setMessage("[Merci — placeholder. Nous vous recontactons sous peu.]");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
      setMessage("[Erreur réseau — placeholder]");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="prenom">
          Prénom <span className="text-dal">*</span>
        </label>
        <input id="prenom" name="prenom" required className={inputClass} autoComplete="given-name" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="nom">
          Nom <span className="text-dal">*</span>
        </label>
        <input id="nom" name="nom" required className={inputClass} autoComplete="family-name" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="email">
          Email <span className="text-dal">*</span>
        </label>
        <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="telephone">
          Téléphone
        </label>
        <input id="telephone" name="telephone" type="tel" className={inputClass} autoComplete="tel" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="typeEspace">
          Type d&apos;espace
        </label>
        <select id="typeEspace" name="typeEspace" className={inputClass} defaultValue="">
          <option value="">—</option>
          {typesEspace.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="surface">
          Surface approximative (m²)
        </label>
        <input id="surface" name="surface" className={inputClass} inputMode="numeric" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="ambiance">
          Ambiance souhaitée
        </label>
        <textarea id="ambiance" name="ambiance" rows={4} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="budget">
          Budget indicatif
        </label>
        <select id="budget" name="budget" className={inputClass} defaultValue="">
          <option value="">—</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="description">
          Description du projet
        </label>
        <textarea id="description" name="description" rows={5} className={inputClass} />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center bg-ink px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal disabled:opacity-60"
        >
          {status === "loading" ? "[Envoi…]" : "Envoyer le brief"}
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
