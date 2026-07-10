"use client";

import { FormPrivacyNotice } from "@/components/FormPrivacyNotice";
import { useState, type FormEvent } from "react";

const inputClass =
  "mt-1 w-full border border-line bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition focus:border-dal";
const labelClass = "block font-sans text-xs font-semibold uppercase tracking-widest text-muted";

export function ContactForm() {
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
      typeEspace: null,
      surface: null,
      ambiance: null,
      budget: null,
      description: String(fd.get("message") ?? "").trim() || null,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "contact" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("err");
        setMessage(typeof data.error === "string" ? data.error : "[Erreur — placeholder]");
        return;
      }
      setStatus("ok");
      setMessage("[Message envoyé — placeholder. Merci.]");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
      setMessage("[Erreur réseau — placeholder]");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-prenom">
            Prénom <span className="text-dal">*</span>
          </label>
          <input id="c-prenom" name="prenom" required className={inputClass} autoComplete="given-name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-nom">
            Nom <span className="text-dal">*</span>
          </label>
          <input id="c-nom" name="nom" required className={inputClass} autoComplete="family-name" />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="c-email">
          Email <span className="text-dal">*</span>
        </label>
        <input id="c-email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </div>
      <div>
        <label className={labelClass} htmlFor="c-tel">
          Téléphone
        </label>
        <input id="c-tel" name="telephone" type="tel" className={inputClass} autoComplete="tel" />
      </div>
      <div>
        <label className={labelClass} htmlFor="c-msg">
          Message <span className="text-dal">*</span>
        </label>
        <textarea id="c-msg" name="message" required rows={6} className={inputClass} />
      </div>
      <FormPrivacyNotice />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center bg-dal px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal/90 disabled:opacity-60"
        >
          {status === "loading" ? "[Envoi…]" : "Envoyer"}
        </button>
        {message ? (
          <p className={`font-sans text-sm ${status === "ok" ? "text-muted" : "text-dal"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}
