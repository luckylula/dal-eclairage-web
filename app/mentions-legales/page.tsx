import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import { legalEntity, legalHosting, legalLastUpdated } from "@/lib/legal";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Mentions légales",
  description: `Mentions légales et informations sur l'éditeur du site ${siteName}.`,
};

export default function MentionsLegalesPage() {
  return (
    <LegalDocument
      eyebrow="Informations légales"
      title="Mentions légales"
      lead="Conformément à la loi fédérale contre la concurrence déloyale (LCD) et aux exigences de transparence applicables en Suisse."
      updatedAt={legalLastUpdated}
      sections={[
        {
          id: "editeur",
          title: "Éditeur du site",
          content: (
            <>
              <p>
                Le présent site internet est édité par <strong>{legalEntity.legalName}</strong>,{" "}
                {legalEntity.legalForm}, exerçant sous le nom commercial <strong>{legalEntity.tradeName}</strong>.
              </p>
              <ul className="mt-4 list-none space-y-1">
                <li>
                  <strong>Adresse&nbsp;:</strong> {legalEntity.address}
                </li>
                <li>
                  <strong>E-mail&nbsp;:</strong>{" "}
                  <a href={`mailto:${legalEntity.email}`} className="text-dal hover:underline">
                    {legalEntity.email}
                  </a>
                </li>
                <li>
                  <strong>Téléphone&nbsp;:</strong> {legalEntity.phone}
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "representant",
          title: "Représentant légal",
          content: (
            <p>
              <strong>{legalEntity.representative}</strong>, habilité à représenter la société.
            </p>
          ),
        },
        {
          id: "registre",
          title: "Registre du commerce et numéro IDE",
          content: (
            <>
              <p>
                <strong>Numéro IDE (UID)&nbsp;:</strong> {legalEntity.uid}
              </p>
              <p className="mt-3">
                <strong>Numéro d&apos;inscription au registre du commerce&nbsp;:</strong>{" "}
                {legalEntity.commercialRegisterNumber}
              </p>
              <p className="mt-3">
                <strong>Registre du commerce&nbsp;:</strong> {legalEntity.commercialRegister}
              </p>
              <p className="mt-3">
                <strong>Office du registre&nbsp;:</strong> {legalEntity.commercialRegisterOffice}
              </p>
            </>
          ),
        },
        {
          id: "hebergement",
          title: "Hébergement",
          content: (
            <p>
              Le site est hébergé sur <strong>{legalHosting.provider}</strong>.
            </p>
          ),
        },
        {
          id: "propriete-intellectuelle",
          title: "Propriété intellectuelle",
          content: (
            <>
              <p>
                L&apos;ensemble des éléments du site (textes, images, graphismes, logo, vidéos, structure,
                etc.) est protégé par le droit d&apos;auteur et le droit des marques. Toute reproduction,
                représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite
                préalable de {legalEntity.legalName} est interdite.
              </p>
              <p className="mt-3">
                Les marques et logos de fabricants présentés sur le site restent la propriété de leurs
                titulaires respectifs.
              </p>
            </>
          ),
        },
        {
          id: "responsabilite",
          title: "Limitation de responsabilité",
          content: (
            <>
              <p>
                {legalEntity.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations
                publiées sur ce site. Toutefois, elle ne peut garantir l&apos;exhaustivité, l&apos;actualité
                ni l&apos;absence d&apos;erreur de ces contenus.
              </p>
              <p className="mt-3">
                L&apos;utilisation du site se fait sous la responsabilité de l&apos;utilisateur.{" "}
                {legalEntity.legalName} décline toute responsabilité pour les dommages directs ou indirects
                résultant de l&apos;accès au site, de son utilisation ou de l&apos;impossibilité d&apos;y
                accéder, y compris en cas de lien vers un site tiers.
              </p>
            </>
          ),
        },
        {
          id: "donnees",
          title: "Protection des données",
          content: (
            <p>
              Le traitement des données personnelles collectées via ce site est décrit dans notre{" "}
              <Link href="/politique-confidentialite" className="text-dal hover:underline">
                politique de confidentialité
              </Link>
              , conformément à la loi fédérale sur la protection des données (LPD, révision 2023).
            </p>
          ),
        },
        {
          id: "droit",
          title: "Droit applicable et for",
          content: (
            <p>
              Le présent site est soumis au droit suisse. Tout litige relatif à son utilisation relève de
              la compétence des tribunaux du canton de Genève, sous réserve d&apos;un for impératif prévu
              par la loi.
            </p>
          ),
        },
      ]}
    />
  );
}
