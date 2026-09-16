// ============================================================
// ALVERIS — Configuration centralisée des identifiants de mesure
// ============================================================
// Ce fichier centralise les identifiants GA4 et LinkedIn Insight Tag.
// IMPORTANT : tant qu'un identifiant est vide, le script de mesure
// correspondant n'est PAS chargé (voir assets/cookie-consent.js).
//
// Chargé sur chaque page, juste avant assets/cookie-consent.js.
// Pour activer LinkedIn : renseigner LINKEDIN_PARTNER_ID ci-dessous
// une fois le compte LinkedIn Campaign Manager validé (Ressources du
// compte > Insight Tag) — aucune autre modification n'est nécessaire,
// le tag se chargera automatiquement dès qu'un visiteur accepte la
// catégorie "LinkedIn" dans le bandeau de cookies.

window.ALVERIS_TRACKING = {
  // Google Analytics 4 — récupéré le 16/09/2026
  GA4_MEASUREMENT_ID: "G-L65XDNB8CD",

  // LinkedIn Insight Tag — Partner ID à fournir par Aurélie
  // (Campaign Manager > Ressources du compte > Insight Tag)
  // Compte LinkedIn "Alveris" (id 557925066) encore "En attente" au 16/09/2026.
  LINKEDIN_PARTNER_ID: ""
};
