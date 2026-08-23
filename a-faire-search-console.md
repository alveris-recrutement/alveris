# À faire manuellement dans Google Search Console

Aucun accès API authentifié à Google Search Console n'existe dans cet
environnement (pas de jeton OAuth, pas de compte de service). La soumission
et la demande d'indexation doivent donc se faire à la main, comme prévu.

## Pages à soumettre à l'inspection d'URL

Coller chaque URL ci-dessous dans l'outil d'inspection d'URL de la Search
Console (propriété alveris.fr), attendre le résultat, puis cliquer sur
« Demander une indexation ».

- [ ] https://alveris.fr/cabinet-recrutement-automobile-rhone-alpes.html *(mise en ligne le 2026-08-23)*
- [ ] https://alveris.fr/cabinet-recrutement-nucleaire-energie.html *(session suivante)*
- [ ] https://alveris.fr/cabinet-recrutement-pharma-cdmo.html *(session suivante)*
- [ ] https://alveris.fr/cabinet-recrutement-aeronautique-mro.html *(session suivante)*

## Sitemap à (re)soumettre

Menu de gauche → Sitemaps → saisir `sitemap.xml` et envoyer. Si déjà déclaré,
le supprimer puis le renvoyer force une relecture par Google.

- URL du sitemap : https://alveris.fr/sitemap.xml

## Suivi

À vérifier environ une semaine après chaque soumission : la page doit
apparaître « Indexée » dans le rapport de couverture. Si elle reste en
« Détectée, actuellement non indexée », c'est souvent un signal de contenu
jugé trop proche d'une autre page — à surveiller notamment pour les 4 pages
sectorielles, qui partagent beaucoup de structure entre elles.
