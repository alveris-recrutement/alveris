# À faire manuellement dans Google Search Console

Aucun accès authentifié à la Search Console n'existe depuis l'environnement de
Claude : ces actions sont à faire à la main, une fois la branche `seo-mandats`
fusionnée sur `main` et le site republié par GitHub Pages.

## 1. Vérifier la mise en ligne

Ouvrir https://alveris.fr/actualites/recruter-directeur-site-industriel.html :
si la page s'affiche, la nouvelle version est en ligne.

## 2. Resoumettre le sitemap

Search Console > Sitemaps > saisir `sitemap.xml` > Envoyer
(https://alveris.fr/sitemap.xml, 50 URL).

## 3. Demander l'indexation

Inspection de l'URL > coller l'URL > Demander une indexation.
Google limite le nombre de demandes par jour : étaler sur deux ou trois jours.

### Jour 1 : nouvelles pages
- [ ] https://alveris.fr/actualites/recruter-directeur-site-industriel.html
- [ ] https://alveris.fr/actualites/choisir-cabinet-recrutement-industriel.html
- [ ] https://alveris.fr/actualites/recruter-directeur-qhse-industrie.html
- [ ] https://alveris.fr/actualites/recruter-directeur-usine-periode-crise.html

### Jour 1 ou 2 : pages prioritaires
- [ ] https://alveris.fr/recrutement-directeur-general-industrie.html
- [ ] https://alveris.fr/expertises-industrie.html
- [ ] https://alveris.fr/cabinet-recrutement-industrie-paca.html
- [ ] https://alveris.fr/recrutement-daf-industrie.html
- [ ] https://alveris.fr/chasseur-de-tete-industrie.html
- [ ] https://alveris.fr/cabinet-recrutement-agroalimentaire.html
- [ ] https://alveris.fr/en/hiring-executives-in-france.html

### Jour 2 ou 3 : autres pages réécrites
- [ ] https://alveris.fr/cabinet-recrutement-industrie-lyon.html
- [ ] https://alveris.fr/management-transition-industrie.html
- [ ] https://alveris.fr/recrutement-directeur-usine-industrie.html
- [ ] https://alveris.fr/recrutement-directeur-qualite-industrie.html
- [ ] https://alveris.fr/regions-industrie.html
- [ ] https://alveris.fr/filieres-industrie.html
- [ ] https://alveris.fr/cabinet-recrutement-industrie-grand-est.html
- [ ] https://alveris.fr/cabinet-recrutement-industrie-paris.html
- [ ] https://alveris.fr/pourquoi-alveris.html
- [ ] https://alveris.fr/postes-industrie.html
- [ ] https://alveris.fr/actualites/remunerations-cadres-industriels-2026.html
- [ ] https://alveris.fr/actualites/
- [ ] https://alveris.fr/

## 4. Suivi

- Relever dès maintenant les positions et clics actuels dans
  `docs/seo/suivi-requetes.md` (colonne « Relevé avant »), puis à 4 et 8 semaines.
- Une semaine après : vérifier que les nouvelles pages sont « Indexées »
  (rapport Pages).

## 5. Ménage GitHub

Après fusion, supprimer les branches `seo-mandats` et
`claude/new-session-6ax34l` (GitHub > Branches > icône corbeille).
