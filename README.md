# alveris.fr — site du cabinet de recrutement

Site statique, hébergé sur **GitHub Pages**, nom de domaine **alveris.fr**.

## Contenu

Site multi-pages (24 URL indexables) optimisé pour le SEO français et international (FR, LU, BE, CH) :

- **Page d'accueil** : `index.html`
- **6 pages secteurs** : cadres dirigeants, tech/IT, finance Luxembourg, startup/scaleup, industrie, commerce/hôtellerie
- **4 pages villes** : Paris, Luxembourg, Bruxelles, Genève
- **Offres d'emploi** : `/offres-emploi/` + 5 offres avec schéma `JobPosting` (éligibles Google for Jobs)
- **Blog** : `/blog/` + 3 articles avec schéma `Article`
- **Institutionnel** : `/a-propos/`, `/contact/`
- **Légal** : `/mentions-legales/`, `/politique-confidentialite/` (RGPD / CNIL / CNPD)
- **404** : `/404.html` (servi automatiquement par GitHub Pages)

## Structure

```
alveris-site/
├── index.html              ← page d'accueil
├── 404.html                ← page 404 (robots: noindex)
├── sitemap.xml             ← 24 URL
├── robots.txt
├── CNAME                   ← alveris.fr (ne pas supprimer)
├── .nojekyll               ← désactive le build Jekyll
├── assets/
│   ├── style.css
│   └── script.js
├── a-propos/index.html
├── contact/index.html
├── mentions-legales/index.html
├── politique-confidentialite/index.html
├── recrutement-cadres-dirigeants/index.html
├── recrutement-tech-it/index.html
├── recrutement-finance-luxembourg/index.html
├── recrutement-startup-scaleup/index.html
├── recrutement-industrie/index.html
├── recrutement-commerce-hotellerie/index.html
├── cabinet-recrutement-paris/index.html
├── cabinet-recrutement-luxembourg/index.html
├── cabinet-recrutement-bruxelles/index.html
├── cabinet-recrutement-geneve/index.html
├── offres-emploi/
│   ├── index.html
│   ├── directeur-financier-luxembourg/index.html
│   ├── cto-scaleup-paris/index.html
│   ├── senior-private-banker-geneve/index.html
│   ├── head-of-data-fintech-bruxelles/index.html
│   └── directeur-usine-grand-est/index.html
└── blog/
    ├── index.html
    ├── salaires-cadres-2026/index.html
    ├── ia-recrutement-opportunite-ou-menace/index.html
    └── profils-tech-tension-2026/index.html
```

## Formulaires (Web3Forms)

Tous les formulaires sont branchés sur **Web3Forms** avec routage par 4 clés distinctes :
- **Newsletter** (footer toutes pages) → clé `74a2f1f0-…`
- **Candidature** (5 pages d'offres d'emploi, poste pré-rempli) → clé `299b2f05-…`
- **Contact / recrutement** (page `/contact/` par défaut) → clé `572a375c-…`
- **Avis client/candidat** (page `/contact/` selon sélecteur) → clé `3ca9d971-…`

Sur la page `/contact/`, un script JS change dynamiquement la clé d'accès, le sujet et le `from_name` selon le type de demande choisi par le visiteur. Résultat : un seul formulaire visible, mais chaque demande arrive sur le bon formulaire Web3Forms avec sa propre auto-reply.

Après soumission, l'utilisateur est redirigé vers `/merci/` (page `noindex`).

## Optimisations SEO appliquées

- Balises `<title>` et `<meta description>` uniques sur chaque page
- URL canoniques (`<link rel="canonical">`)
- Balises Open Graph + Twitter Card
- Schémas JSON-LD : `Organization`, `ProfessionalService`, `WebSite`, `Service`, `JobPosting`, `Article`, `Blog`, `BreadcrumbList`
- `sitemap.xml` référencé dans `robots.txt`
- Structure multi-pages avec URL lisibles en français
- Maillage interne entre secteurs, villes, offres et articles
- Responsive mobile/tablette/desktop
- 404 personnalisée qui renvoie vers l'accueil et les offres

## Modifier le site

Éditez directement les fichiers `.html`. Pour publier, suivez `DEPLOYMENT.md`.

## Ajouter une nouvelle offre d'emploi

1. Créez un dossier `offres-emploi/<slug-de-lannonce>/`
2. Copiez le contenu d'une offre existante comme base
3. Mettez à jour le bloc JSON-LD `JobPosting` (title, datePosted, validThrough, baseSalary, etc.)
4. Ajoutez l'URL dans `sitemap.xml`
5. Listez l'offre dans `offres-emploi/index.html`

## Ajouter un article de blog

1. Créez un dossier `blog/<slug-article>/`
2. Copi