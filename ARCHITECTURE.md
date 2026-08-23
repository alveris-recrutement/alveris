# Architecture du site alveris.fr

Ce document explique où et comment ajouter une nouvelle page sans avoir à
retoucher la structure du menu à chaque fois. Il complète (ne remplace pas)
le code : le menu et le pied de page sont dupliqués tels quels dans chaque
fichier HTML (site statique, pas de composant partagé), donc toute
modification de navigation se fait par recherche/remplacement sur
l'ensemble des pages.

## 1. Les quatre rubriques du menu

Le menu principal (et le pied de page, qui reprend exactement le même
classement) est organisé en :

```
Accueil
EXPERTISES    → un métier / une fonction avec page dédiée (DG & COO, Directeur
                d'Usine, DRH & RH Industrie, DAF & Finance Industrie), plus un
                lien « Toutes nos expertises → » vers le hub expertises-industrie.html
NOS SERVICES  → une modalité d'intervention (Executive Search & Chasse de Tête,
                Management de Transition, Recrutement de Cadres Industriels)
FILIÈRES      → un secteur industriel (Automobile, Nucléaire, Pharma, Aéronautique...)
RÉGIONS       → une région (Auvergne-Rhône-Alpes, Île-de-France, PACA, Grand Est...)
Postes        → page unique (postes-industrie.html)
Actualités    → page unique (dossier /actualites/)
Contact       → page unique (contact.html)
```

### EXPERTISES vs NOS SERVICES vs hub expertises-industrie.html

- **EXPERTISES** (menu) ne montre que les fonctions qui ont une page dédiée
  ET qui sont au cœur du métier (direction générale, direction d'usine,
  RH, finance). Limité à 5 entrées (4 fonctions + le lien hub).
- **NOS SERVICES** (menu) regroupe les modalités d'intervention plutôt que
  les fonctions : chasse de tête / executive search, management de
  transition, recrutement de cadres. 3 entrées.
- **`expertises-industrie.html`** (hub, hors menu — atteignable uniquement
  via le lien « Toutes nos expertises → » dans la rubrique EXPERTISES)
  liste **toutes** les fonctions industrielles, groupées en 4 blocs
  (Direction Générale ; Direction Industrielle & Opérations ; Qualité,
  Supply Chain & Achats ; Ressources Humaines & Finance). Seules les
  fonctions qui ont une page dédiée y sont des liens ; les autres sont de
  simples mentions en texte, sans description inventée.
- Une page qui sort du menu (ex. `recrutement-fonctions-support-industrie.html`,
  retirée du menu principal) reste en ligne, son URL ne change jamais, et
  elle reste accessible depuis le hub `expertises-industrie.html` (lien en
  bas de page).

### Où ajouter une nouvelle page selon son type

| Type de page                                   | Rubrique   | Exemple existant |
|-------------------------------------------------|------------|-------------------|
| Un métier / une fonction dirigeante             | Expertises | `recrutement-drh-industrie.html` |
| Un secteur industriel (filière)                 | Filières   | `cabinet-recrutement-automobile-rhone-alpes.html` |
| Une région (zone géographique large)            | Régions    | `cabinet-recrutement-industrie-lyon.html` (libellé menu : « Auvergne-Rhône-Alpes ») |
| Un département / bassin local (zone infra-régionale) | Aucune — nichée sous sa région sur `regions-industrie.html` uniquement | `cabinet-recrutement-industrie-var-toulon.html` (nichée sous PACA) |
| Un article de blog / actualité                  | Actualités | fichiers dans `/actualites/` |
| Contenu utilitaire (contact, CV, mentions...)   | Aucune (lien direct, hors rubrique) | `contact.html`, `mentions-legales.html` |

### Cas particulier : page départementale / locale (infra-régionale)

Une page centrée sur un département ou un bassin d'emploi précis (ex. Var &
Toulon, rattaché à PACA) **n'entre jamais dans le menu principal**, à
aucun niveau (desktop, mobile, pied de page). Elle reste accessible
uniquement par trois chemins :

1. Un lien obligatoire depuis la page de la région parente, posé sur une
   ancre existante du texte qui mentionne déjà la zone locale (jamais de
   nouvelle phrase ajoutée pour créer ce lien).
2. La page hub `regions-industrie.html`, où elle apparaît **nichée** sous
   le bloc de sa région parente (hub à deux niveaux : un bloc par région,
   avec ses pages locales imbriquées en dessous, visuellement distinguées
   par une bordure d'accent).
3. Le `sitemap.xml`.

Avant de créer une page locale, vérifier qu'elle ne fait pas doublon avec
la page régionale existante : la page région doit rester généraliste
(vue d'ensemble, plusieurs villes), la page locale doit rester spécifique
(un département, un secteur dominant, des chiffres propres à cette zone).
En cas de chevauchement, c'est la page région qu'il faut alléger — jamais
la page locale.

Pour ajouter une page à une rubrique (Expertises, Filières ou Régions) :

1. Créer la page HTML en reprenant le gabarit d'une page existante du même
   type (nav + footer identiques à toutes les autres pages, un seul H1,
   title et meta description propres, canonical).
2. Ajouter un lien vers cette page dans **toutes** les occurrences du menu
   déroulant desktop, de l'accordéon mobile et du pied de page, sur
   **toutes** les pages du site (nav + footer identiques partout).
   Utiliser un libellé **court** dans le menu et le pied de page (la
   rubrique porte déjà le contexte — voir section 3), et le libellé complet
   dans le title/H1/canonical de la page elle-même.
3. Ajouter la page au `sitemap.xml` (sauf si elle est en `noindex`, comme
   les pages légales).
4. Si la rubrique concernée dépasse alors 8 entrées, appliquer la règle
   des 8 ci-dessous.

## 2. La règle des 8

Aucune rubrique déroulante n'affiche plus de **8 entrées**. Au-delà :

- N'allonger jamais la liste indéfiniment.
- Afficher les **7 entrées principales** dans le menu, plus un lien final
  **« Toutes les filières → »** (ou **« Toutes les régions → »**) qui pointe
  vers la page hub correspondante (`filieres-industrie.html` ou
  `regions-industrie.html`).
- La page hub liste alors **toutes** les entrées de la famille (vignette
  titre + phrase de description reprise de la page dédiée), et devient le
  point d'entrée pour le maillage interne complet de cette famille de
  pages.

Aujourd'hui (23/08/2026) :
- **Expertises** : 5 entrées (4 fonctions + lien hub « Toutes nos
  expertises → »). Le hub `expertises-industrie.html` absorbe toutes les
  fonctions supplémentaires plutôt que d'allonger le menu.
- **Nos Services** : 3 entrées.
- **Filières** : 4 entrées (Automobile Rhône-Alpes, Nucléaire & Énergie,
  Pharma & CDMO, Aéronautique & MRO).
- **Régions** : 4 entrées, strictement régionales (Auvergne-Rhône-Alpes,
  Île-de-France, PACA, Grand Est). Les pages départementales/locales (ex.
  Var & Toulon) ne comptent pas dans cette rubrique — voir le cas
  particulier ci-dessus.

Les deux pages hub existent déjà (`filieres-industrie.html`,
`regions-industrie.html`) et sont dans le sitemap, mais **volontairement
absentes du menu** tant qu'aucune rubrique ne dépasse 8 entrées — elles se
rempliront au fil des ajouts et ne seront ajoutées au menu que le jour où
la règle des 8 est atteinte.

## 3. Libellés courts dans le menu

Dans le menu déroulant, l'accordéon mobile et le pied de page **uniquement**,
les intitulés sont raccourcis car la rubrique porte déjà le contexte :

- Rubrique EXPERTISES → « DG Industrie » (pas « Recrutement DG Industrie »)
- Rubrique FILIÈRES → « Automobile Rhône-Alpes » (pas « Recrutement
  Automobile Rhône-Alpes »)
- Rubrique RÉGIONS → « Auvergne-Rhône-Alpes » (pas « Recrutement Industrie
  Lyon ») — le libellé menu porte le nom de la région, pas celui de la
  ville qui donne son nom au fichier

Le `<title>`, le H1 et le `canonical` de la page elle-même **ne changent
jamais** : eux gardent l'intitulé complet, optimisé SEO.

## 4. Menu déroulant desktop sur deux colonnes

Au-delà de **6 entrées** dans une rubrique, le menu déroulant desktop
passe automatiquement sur deux colonnes via la classe CSS `dropdown
dd-wide` (avec un `<div class="dd-grid">` interne). En dessous de 6
entrées, le déroulant reste une simple liste verticale (`dropdown` seul).

Concrètement : la rubrique Expertises (8 entrées) utilise `dd-wide`,
Filières (1 entrée) et Régions (4 entrées) utilisent la liste simple.

## 5. Menu mobile en accordéon

Le menu mobile (`#mob-menu`) est un accordéon : les rubriques à tiroir
(Expertises, Filières, Régions) sont repliées par défaut, et une seule
s'ouvre à la fois (`toggleAccordion()` dans `assets/nav.js`, qui referme
toute autre rubrique ouverte avant d'ouvrir celle qu'on vient de cliquer).
Les liens simples (Accueil, Postes, Actualités, Contact) restent des liens
directs, sans repli, puisqu'ils n'ont pas de sous-entrées.

## 6. Fichiers partagés

- `assets/seo-pages.css` — feuille de style commune à toutes les pages
  statiques du site (nav, footer, hero, sections, dropdowns, accordéon
  mobile). Toute page du site doit la charger.
- `assets/app-pages.css` — styles des composants applicatifs (formulaires
  de contact/CV, grille et modale des postes). Chargée en plus de
  `seo-pages.css` sur `contact.html`, `deposer-cv.html`,
  `postes-industrie.html` et les pages légales (qui réutilisent le bouton
  `.btn-outline`).
- `assets/nav.js` — comportement du menu mobile (hamburger + accordéon),
  partagé par toutes les pages sauf `index.html` (qui a sa propre logique
  JS déjà en place pour son fonctionnement de page unique avec bascule
  FR/EN, et embarque une version équivalente de `toggleAccordion()`
  directement dans son script).

`index.html` reste un cas particulier : c'est une page à part (styles
inline, sélecteur de langue FR/EN, hero en diaporama) qui n'utilise pas
`seo-pages.css`. Sa structure de nav/footer est tenue manuellement en
miroir de celle des autres pages — toute évolution du menu doit donc être
répercutée à la fois dans `assets/seo-pages.css`/gabarit des pages
statiques ET dans le `<nav>`/`<footer>` propres à `index.html`.

## 7. Pages hors rubriques

Certaines pages ne font partie d'aucune des 3 rubriques déroulantes :

- `contact.html`, `deposer-cv.html`, `postes-industrie.html` : liens
  directs dans le menu principal (Contact, — , Postes). `deposer-cv.html`
  n'a volontairement pas d'entrée dans le menu (atteignable depuis la page
  Postes et les futurs CTA du site) — conforme à la structure de menu
  demandée.
- `mentions-legales.html`, `politique-confidentialite.html` : en
  `noindex`, non listées au sitemap, accessibles uniquement via le pied de
  page (ligne de copyright), jamais dans le menu principal ni les
  rubriques déroulantes.
