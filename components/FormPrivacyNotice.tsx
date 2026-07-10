import Link from "next/link";

export function FormPrivacyNotice() {
  return (
    <p className="font-sans text-xs leading-relaxed text-muted">
      Les données transmises via ce formulaire sont traitées conformément à notre{" "}
      <Link href="/politique-confidentialite" className="text-dal underline-offset-2 hover:underline">
        politique de confidentialité
      </Link>
      .
    </p>
  );
}
