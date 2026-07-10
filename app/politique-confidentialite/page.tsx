import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import {
  legalEntity,
  legalLastUpdated,
  legalProcessors,
} from "@/lib/legal";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Politique de confidentialité",
  description: `Politique de protection des données personnelles du site ${siteName}, conforme à la LPD suisse.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalDocument
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      lead="Cette politique décrit comment nous traitons les données personnelles conformément à la loi fédérale sur la protection des données (LPD, révision en vigueur depuis le 1er septembre 2023)."
      updatedAt={legalLastUpdated}
      sections={[
        {
          id: "responsable",
          title: "Responsable du traitement",
          content: (
            <>
              <p>Le responsable du traitement des données collectées via ce site est&nbsp;:</p>
              <ul className="mt-4 list-none space-y-1">
                <li>
                  <strong>{legalEntity.legalName}</strong>
                </li>
                <li>{legalEntity.address}</li>
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
              <p className="mt-4">
                Pour toute question relative à la protection des données, vous pouvez nous contacter à
                l&apos;adresse ci-dessus.
              </p>
            </>
          ),
        },
        {
          id: "donnees",
          title: "Données personnelles collectées",
          content: (
            <>
              <p>Selon votre utilisation du site, nous pouvons traiter les catégories de données suivantes&nbsp;:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong>Données d&apos;identification et de contact</strong> (nom, prénom, entreprise,
                  adresse e-mail, numéro de téléphone) lorsque vous remplissez un formulaire de contact ou
                  de brief projet.
                </li>
                <li>
                  <strong>Données relatives à votre projet</strong> (type d&apos;espace, surface, ambiance,
                  budget, description) transmises via le formulaire «&nbsp;Votre projet&nbsp;».
                </li>
                <li>
                  <strong>Données techniques</strong> (adresse IP, type de navigateur, horodatage, pages
                  consultées) générées automatiquement par l&apos;hébergeur à des fins de sécurité et de
                  fonctionnement du site.
                </li>
                <li>
                  <strong>Préférence d&apos;affichage</strong> (choix de typographie) stockée localement
                  dans votre navigateur via <code className="text-ink/90">localStorage</code>, sans
                  transmission à nos serveurs.
                </li>
              </ul>
              <p className="mt-4">
                Nous ne collectons pas sciemment de données sensibles au sens de la LPD via ce site.
              </p>
            </>
          ),
        },
        {
          id: "finalites",
          title: "Finalités et bases légales",
          content: (
            <>
              <p>Nous traitons vos données aux fins suivantes&nbsp;:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong>Répondre à vos demandes</strong> transmises par formulaire (contact, brief
                  projet)&nbsp;: exécution de mesures précontractuelles ou intérêt légitime à traiter votre
                  demande commerciale.
                </li>
                <li>
                  <strong>Assurer le fonctionnement et la sécurité du site</strong>&nbsp;: intérêt légitime
                  à protéger notre infrastructure et à prévenir les abus.
                </li>
                <li>
                  <strong>Respecter nos obligations légales</strong> (conservation de preuves, réponses aux
                  autorités le cas échéant).
                </li>
              </ul>
              <p className="mt-4">
                Lorsque le traitement repose sur votre consentement (par exemple si vous acceptez
                volontairement de nous transmettre des informations via un formulaire), vous pouvez le
                retirer à tout moment sans affecter la licéité du traitement antérieur.
              </p>
            </>
          ),
        },
        {
          id: "destinataires",
          title: "Destinataires et sous-traitants",
          content: (
            <>
              <p>
                Vos données peuvent être communiquées aux prestataires suivants, agissant en notre nom et
                uniquement pour les finalités décrites&nbsp;:
              </p>
              <ul className="mt-4 space-y-3">
                {legalProcessors.map((processor) => (
                  <li key={processor.name}>
                    <strong>{processor.name}</strong>
                    {" — "}
                    {processor.role}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Nous ne vendons pas vos données personnelles. Nous ne les transmettons pas à des tiers à
                des fins publicitaires.
              </p>
            </>
          ),
        },
        {
          id: "transferts",
          title: "Transferts de données à l'étranger",
          content: (
            <>
              <p>
                Certains de nos prestataires techniques sont établis en dehors de la Suisse, notamment aux
                États-Unis. Lorsque des données sont transférées vers des pays ne disposant pas d&apos;un
                niveau de protection reconnu par la Suisse, nous veillons à ce que des garanties appropriées
                soient en place (clauses contractuelles types, mesures techniques et organisationnelles,
                évaluation des risques conformément à la LPD).
              </p>
              <p className="mt-3">
                Sur demande, nous pouvons vous fournir des informations complémentaires sur les garanties
                applicables à un transfert donné.
              </p>
            </>
          ),
        },
        {
          id: "conservation",
          title: "Durée de conservation",
          content: (
            <>
              <p>Nous conservons vos données uniquement le temps nécessaire aux finalités poursuivies&nbsp;:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong>Messages de contact et briefs projet</strong>&nbsp;: jusqu&apos;à 24 mois après le
                  dernier échange, sauf relation commerciale en cours ou obligation légale de conservation
                  plus longue.
                </li>
                <li>
                  <strong>Journaux techniques de l&apos;hébergeur</strong>&nbsp;: généralement quelques
                  jours à quelques semaines, selon le prestataire.
                </li>
                <li>
                  <strong>Préférence de typographie (localStorage)</strong>&nbsp;: jusqu&apos;à suppression
                  par l&apos;utilisateur via les paramètres du navigateur.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "cookies",
          title: "Cookies et technologies similaires",
          content: (
            <>
              <p>
                Ce site n&apos;utilise pas de cookies de mesure d&apos;audience ou de publicité. Nous
                n&apos;installons pas de traceurs marketing tiers.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  <strong>Stockage local</strong>&nbsp;: une préférence de police de caractères peut être
                  enregistrée dans votre navigateur (<code className="text-ink/90">localStorage</code>).
                </li>
                <li>
                  <strong>Google Maps</strong>&nbsp;: la page Contact intègre une carte fournie par Google.
                  Lors de la consultation de cette page, Google peut collecter des données selon sa propre
                  politique de confidentialité. Nous vous invitons à la consulter sur{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dal hover:underline"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies et données
                locales. Certaines fonctionnalités du site pourraient alors être limitées.
              </p>
            </>
          ),
        },
        {
          id: "droits",
          title: "Vos droits",
          content: (
            <>
              <p>Conformément à la LPD, vous disposez notamment des droits suivants&nbsp;:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>droit d&apos;obtenir des informations sur le traitement de vos données&nbsp;;</li>
                <li>droit d&apos;accès à vos données personnelles&nbsp;;</li>
                <li>droit de rectification de données inexactes&nbsp;;</li>
                <li>droit de demander l&apos;effacement lorsque les conditions légales sont remplies&nbsp;;</li>
                <li>
                  droit de vous opposer à un traitement fondé sur l&apos;intérêt légitime, pour des motifs
                  tenant à votre situation particulière&nbsp;;
                </li>
                <li>droit de retirer votre consentement à tout moment, le cas échéant.</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous à{" "}
                <a href={`mailto:${legalEntity.email}`} className="text-dal hover:underline">
                  {legalEntity.email}
                </a>
                . Nous pourrons vous demander une preuve d&apos;identité si nécessaire.
              </p>
            </>
          ),
        },
        {
          id: "reclamation",
          title: "Réclamation auprès de l'autorité",
          content: (
            <>
              <p>
                Si vous estimez que le traitement de vos données personnelles n&apos;est pas conforme à la
                loi, vous pouvez introduire une réclamation auprès du Préposé fédéral à la protection des
                données et à la transparence (PFPDT)&nbsp;:
              </p>
              <p className="mt-3">
                <a
                  href="https://www.edoeb.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dal hover:underline"
                >
                  www.edoeb.admin.ch
                </a>
              </p>
            </>
          ),
        },
        {
          id: "securite",
          title: "Sécurité",
          content: (
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données contre la perte, l&apos;accès non autorisé, la divulgation ou l&apos;altération
              (connexion chiffrée HTTPS, accès restreint aux systèmes, choix de prestataires conformes).
            </p>
          ),
        },
        {
          id: "modifications",
          title: "Modifications de cette politique",
          content: (
            <>
              <p>
                Nous pouvons mettre à jour cette politique pour refléter l&apos;évolution de nos pratiques,
                de nos outils techniques ou de la réglementation. La date de dernière mise à jour figure en
                haut de cette page.
              </p>
              <p className="mt-3">
                Voir également nos{" "}
                <Link href="/mentions-legales" className="text-dal hover:underline">
                  mentions légales
                </Link>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
