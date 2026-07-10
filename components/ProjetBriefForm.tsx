"use client";

import { FormPrivacyNotice } from "@/components/FormPrivacyNotice";
import { useState, type FormEvent } from "react";

const labelClass =
  "block font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-muted";
const fieldClass =
  "projet-form-field mt-3 w-full border-0 bg-transparent px-0 py-2 font-sans text-base text-ink shadow-none outline-none ring-0 transition placeholder:text-muted/45 focus:outline-none focus:ring-0";
const sectionTitleClass =
  "font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-dal";

const TYPES_ESPACE = [
  "Restaurant",
  "Bureau",
  "Résidence",
  "Commerce",
  "Extérieur",
  "Autre",
] as const;

export function ProjetBriefForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const [autreType, setAutreType] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const prenom = String(fd.get("prenom") ?? "").trim();
    const nom = String(fd.get("nom") ?? "").trim();
    const types = fd.getAll("typeEspace").map((v) => String(v).trim()).filter(Boolean);
    const typeEspaceAutre = String(fd.get("typeEspaceAutre") ?? "").trim();
    if (typeEspaceAutre) types.push(typeEspaceAutre);

    let description = String(fd.get("description") ?? "").trim();
    const autre = String(fd.get("autre") ?? "").trim();
    if (autre) {
      description = description
        ? `${description}\n\nAutre précision : ${autre}`
        : `Autre précision : ${autre}`;
    }

    const payload = {
      nom: `${prenom} ${nom}`.trim(),
      email: String(fd.get("email") ?? "").trim(),
      telephone: String(fd.get("telephone") ?? "").trim() || null,
      entreprise: String(fd.get("entreprise") ?? "").trim() || null,
      typeEspace: types.length ? types.join(", ") : null,
      surface: String(fd.get("surface") ?? "").trim() || null,
      ambiance: String(fd.get("ambiance") ?? "").trim() || null,
      budget: String(fd.get("budget") ?? "").trim() || null,
      description: description || null,
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
      setAutreType(false);
    } catch {
      setStatus("err");
      setMessage("Erreur réseau. Vérifiez votre connexion.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-12">
      <div className="flex flex-col gap-10">
        <p className={sectionTitleClass}>Votre projet</p>

        <fieldset className="border-0 p-0">
          <legend className={labelClass}>Type d&apos;espace</legend>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {TYPES_ESPACE.map((type) => (
              <label
                key={type}
                className="group flex cursor-pointer items-center gap-2.5 font-sans text-sm text-ink/90 transition hover:text-dal"
              >
                <input
                  type="checkbox"
                  name="typeEspace"
                  value={type}
                  className="projet-form-checkbox h-3.5 w-3.5 shrink-0 rounded-none border border-white/30 bg-transparent accent-dal"
                  onChange={(ev) => {
                    if (type === "Autre") setAutreType(ev.target.checked);
                  }}
                />
                {type}
              </label>
            ))}
          </div>
          {autreType ? (
            <input
              id="typeEspaceAutre"
              name="typeEspaceAutre"
              className={`${fieldClass} mt-4`}
              placeholder="Précisez le type d'espace"
            />
          ) : null}
        </fieldset>

        <div>
          <label className={labelClass} htmlFor="surface">
            Surface approximative (m²)
          </label>
          <input
            id="surface"
            name="surface"
            type="text"
            inputMode="decimal"
            className={fieldClass}
            placeholder="Ex. 120"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="ambiance">
            Ambiance souhaitée
          </label>
          <input
            id="ambiance"
            name="ambiance"
            className={fieldClass}
            placeholder="Ex. chaleureuse, technique, mise en valeur…"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="budget">
            Budget indicatif
          </label>
          <input
            id="budget"
            name="budget"
            className={fieldClass}
            placeholder="Fourchette ou ordre de grandeur"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="description">
            Description libre du projet <span className="text-dal">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            className={`${fieldClass} min-h-[7rem] resize-y`}
            placeholder="Décrivez votre projet, vos contraintes et vos attentes…"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="autre">
            Autre précision
          </label>
          <input
            id="autre"
            name="autre"
            className={fieldClass}
            placeholder="Tout élément utile à nous communiquer"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <p className={sectionTitleClass}>Vos coordonnées</p>

        <div className="grid gap-10 sm:grid-cols-2">
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
        </div>

        <div>
          <label className={labelClass} htmlFor="entreprise">
            Entreprise
          </label>
          <input id="entreprise" name="entreprise" className={fieldClass} autoComplete="organization" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="email">
              E-mail <span className="text-dal">*</span>
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
        </div>
      </div>

      <FormPrivacyNotice />

      <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="projet-form-submit inline-flex justify-center border border-dal px-10 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-dal transition hover:bg-dal hover:text-black disabled:opacity-50"
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
