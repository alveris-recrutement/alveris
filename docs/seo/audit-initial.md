# Audit SEO initial, alveris.fr

Date : 3 octobre 2026. Base : branche `main`, commit `c44e7da`.
Ce rapport sert de point de comparaison pour la fin de la mission (voir `rapport-final.md`).

Méthode : analyse automatique de tous les fichiers HTML du dépôt (script Python, BeautifulSoup), complétée d'une relecture manuelle. Le nombre de mots compte le texte visible de la page **hors menu, menu mobile et pied de page** (fil d'Ariane, hero, corps, FAQ, encadrés et barre d'appel à l'action inclus). « Liens entrants total » compte toutes les pages qui pointent vers la page, menu compris ; « contextuels » ne compte que les liens placés dans le corps du texte. La profondeur est le nombre minimal de clics depuis l'accueil.

## 1. Synthèse

| Indicateur | Valeur |
|---|---|
| Fichiers HTML | 53 (46 indexables, 2 pages légales en `noindex`, 4 redirections `executive-search-*.html`, 1 fichier de vérification Google) |
| Mots, total des pages indexables | 30 238 |
| Pages indexables de moins de 600 mots | 17 |
| Titles hors de la plage 50 à 60 caractères | 33 (26 trop longs, 7 trop courts) |
| Meta descriptions hors de la plage 140 à 160 caractères | 32 (21 trop longues, 11 trop courtes) |
| Titles ou metas manquants | 0 |
| Titles dupliqués | 0 |
| Pages sans H1 ou avec plusieurs H1 | 0 (hors redirections) |
| Pages orphelines (aucun lien entrant) | 1 : `regions-industrie.html` |
| Pages à plus de 3 clics de l'accueil | 1 : `regions-industrie.html` (non atteignable) |
| Liens internes morts | 0 |
| Données structurées JSON invalides | 0 |
| Images sans `alt` | 0 |
| Images sans `width`/`height` | 1 (`pourquoi-alveris.html`, photo fondatrice) |
| Tirets longs dans le texte visible | 0 (les 14 occurrences de `index.html` sont dans des commentaires CSS/HTML) |

## 2. Inventaire des pages

| Page | Title (car.) | Meta description (car.) | H1 | Mots | Données structurées | Liens entrants (total / contextuels) | Liens sortants contextuels | Profondeur |
|---|---|---|---|---|---|---|---|---|
| `actualites/chasseur-tete-ou-cabinet-recrutement.html` | Chasseur de tête ou cabinet de recrutement : quelle différence pour un poste de direction industrielle \| Alveris (112) | Chasseur de tête ou cabinet de recrutement : quelle différence pour un poste de direction … (103) | Chasseur de tête ou cabinet de recrutement : quelle différence pour un poste de direction industrielle | 329 | Article, BreadcrumbList | 3 / 3 | 7 | 2 |
| `actualites/cout-cabinet-executive-search-industrie.html` | Tarifs et honoraires d'un cabinet de recrutement industrie \| Alveris (68) | Garantie de remplacement 6 mois contre 3 mois en moyenne sur le marché. Honoraires à parti… (164) | Combien coûte un cabinet d'executive search industrie en 2026 | 1016 | Article, BreadcrumbList | 47 / 11 | 7 | 1 |
| `actualites/daf-industrie-precision-profil-strategique.html` | DAF industrie de précision : un profil de plus en plus stratégique \| Alveris (76) | DAF industrie de précision : un profil de plus en plus stratégique, entre pilotage des inv… (128) | DAF industrie de précision : un profil de plus en plus stratégique | 311 | Article, BreadcrumbList | 3 / 3 | 7 | 2 |
| `actualites/directeur-site-nucleaire-marche-tension.html` | Directeur de site nucléaire : un marché sous très forte tension \| Alveris (73) | Directeur de site nucléaire : un marché sous très forte tension, entre relance de projets … (116) | Directeur de site nucléaire : un marché sous très forte tension | 359 | Article, BreadcrumbList | 5 / 5 | 8 | 1 |
| `actualites/directeurs-usine-profils-ne-repondent-annonces.html` | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas à vos annonces \| Alveris (93) | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas à vos annonces, et ce… (148) | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas à vos annonces | 389 | Article, BreadcrumbList | 5 / 5 | 8 | 2 |
| `actualites/drh-industrie-nouvelles-attentes-directions-generales.html` | DRH industrie : les nouvelles attentes des directions générales en 2026 \| Alveris (81) | DRH industrie : les nouvelles attentes des directions générales en 2026, entre pénurie de … (132) | DRH industrie : les nouvelles attentes des directions générales en 2026 | 286 | Article, BreadcrumbList | 2 / 2 | 7 | 2 |
| `actualites/fonderie-metallurgie-directeurs-site.html` | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026 \| Alveris (93) | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026, entre… (147) | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026 | 307 | Article, BreadcrumbList | 3 / 3 | 7 | 2 |
| `actualites/index.html` | Actualités RH & Recrutement Industrie \| Alveris (47) | Décryptage des tendances du marché de l'emploi industriel, insights recrutement et actuali… (175) | Actualités RH & Recrutement | 575 | BreadcrumbList, ItemList | 47 / 12 | 13 | 1 |
| `actualites/management-transition-aeronautique-cadence.html` | Management de transition en aéronautique : gérer une montée en cadence sans dérailler \| Alveris (95) | Management de transition en aéronautique : gérer une montée en cadence sans dérailler, ent… (137) | Management de transition en aéronautique : gérer une montée en cadence sans dérailler | 336 | Article, BreadcrumbList | 4 / 4 | 8 | 1 |
| `actualites/management-transition-industriel-quand-y-recourir.html` | Management de transition industriel : quand y recourir et comment choisir le bon profil \| Alveris (97) | Management de transition industriel : quand y recourir et comment choisir le bon profil, e… (137) | Management de transition industriel : quand y recourir et comment choisir le bon profil | 344 | Article, BreadcrumbList | 2 / 2 | 7 | 2 |
| `actualites/marque-employeur-industrielle-attirer-directeurs-site.html` | Marque employeur industrielle : comment attirer les meilleurs directeurs de site \| Alveris (90) | Marque employeur industrielle : comment attirer les meilleurs directeurs de site grâce à u… (120) | Marque employeur industrielle : comment attirer les meilleurs directeurs de site | 290 | Article, BreadcrumbList | 2 / 2 | 7 | 2 |
| `actualites/remunerations-cadres-industriels-2026.html` | Rémunérations des cadres industriels en 2026 : ce qui a vraiment changé \| Alveris (81) | Rémunérations des cadres industriels en 2026 : ce qui a vraiment changé, entre écarts sect… (124) | Rémunérations des cadres industriels en 2026 : ce qui a vraiment changé | 281 | Article, BreadcrumbList | 2 / 2 | 7 | 2 |
| `cabinet-recrutement-aeronautique-mro.html` | Cabinet de recrutement aéronautique & MRO \| Alveris (51) | Recrutement de dirigeants et cadres pour l'aéronautique et la maintenance aéronautique : d… (155) | Cabinet de recrutement aéronautique & MRO | 1249 | FAQPage, BreadcrumbList | 47 / 4 | 6 | 1 |
| `cabinet-recrutement-agroalimentaire.html` | Cabinet de recrutement agroalimentaire \| Alveris (48) | Recrutement de directeurs de site, directeurs de production et dirigeants pour l'industrie… (147) | Cabinet de recrutement agroalimentaire | 926 | FAQPage, BreadcrumbList | 47 / 2 | 7 | 1 |
| `cabinet-recrutement-automobile-rhone-alpes.html` | Cabinet de recrutement automobile Rhône-Alpes \| Alveris (55) | Recrutement de dirigeants et cadres pour équipementiers et sous-traitants automobiles en A… (169) | Cabinet de recrutement automobile Rhône-Alpes & Auvergne | 1435 | FAQPage, BreadcrumbList | 47 / 6 | 10 | 1 |
| `cabinet-recrutement-chimie-materiaux.html` | Cabinet de recrutement chimie & matériaux \| Alveris (51) | Recrutement de dirigeants et cadres pour l'industrie chimique et les matériaux : directeur… (142) | Cabinet de recrutement chimie & matériaux | 1021 | FAQPage, BreadcrumbList | 47 / 2 | 8 | 1 |
| `cabinet-recrutement-fonderie-metallurgie.html` | Cabinet de recrutement fonderie & métallurgie \| Alveris (55) | Recrutement de dirigeants et cadres pour la fonderie, la forge et la métallurgie : directe… (141) | Cabinet de recrutement fonderie & métallurgie | 887 | FAQPage, BreadcrumbList | 2 / 2 | 7 | 2 |
| `cabinet-recrutement-industrie-grand-est.html` | Cabinet de Recrutement Cadres Dirigeants Grand Est \| Alveris · Industrie (72) | Alveris, cabinet de recrutement de cadres dirigeants pour l'industrie du Grand Est (Strasb… (182) | Cabinet de recrutement industrie Grand Est | 707 | FAQPage, BreadcrumbList | 48 / 3 | 8 | 1 |
| `cabinet-recrutement-industrie-lyon.html` | Cabinet de recrutement industrie Lyon & Rhône-Alpes \| Alveris (61) | Alveris accompagne les entreprises industrielles de la région Rhône-Alpes (Lyon, Saint-Éti… (176) | Cabinet de recrutement industrie Lyon & Rhône-Alpes | 814 | FAQPage, BreadcrumbList | 48 / 10 | 12 | 1 |
| `cabinet-recrutement-industrie-paca.html` | Cabinet de recrutement industrie PACA & Marseille \| Alveris (59) | Alveris accompagne les entreprises industrielles de PACA (Marseille, Toulon, Aix-en-Proven… (161) | Cabinet de recrutement industrie PACA & Marseille | 739 | FAQPage, BreadcrumbList | 48 / 4 | 8 | 1 |
| `cabinet-recrutement-industrie-paris.html` | Cabinet de recrutement industrie Paris & Île-de-France \| Alveris (64) | Alveris accompagne les groupes industriels d'Île-de-France (Paris, La Défense, Vélizy, Bou… (158) | Cabinet de recrutement industrie Paris & Île-de-France | 693 | FAQPage, BreadcrumbList | 48 / 2 | 7 | 1 |
| `cabinet-recrutement-industrie-var-toulon.html` | Cabinet de recrutement industrie Var & Toulon \| Alveris (55) | Recrutement de dirigeants et cadres industriels dans le Var : naval, défense, sous-traitan… (143) | Cabinet de recrutement industrie Var & Toulon | 1363 | FAQPage, BreadcrumbList | 2 / 2 | 7 | 2 |
| `cabinet-recrutement-nucleaire-energie.html` | Cabinet de recrutement nucléaire & énergie \| Alveris (52) | Recrutement de dirigeants et cadres pour les ETI de la filière nucléaire : ingénierie, mai… (166) | Cabinet de recrutement nucléaire & énergie | 1427 | FAQPage, BreadcrumbList | 47 / 3 | 7 | 1 |
| `cabinet-recrutement-pharma-cdmo.html` | Cabinet de recrutement pharma & CDMO \| Alveris (46) | Recrutement de directeurs de site, directeurs des opérations et dirigeants pour l'industri… (166) | Cabinet de recrutement pharma & CDMO | 1128 | FAQPage, BreadcrumbList | 47 / 5 | 7 | 1 |
| `cabinet-recrutement-plasturgie-decolletage.html` | Cabinet de recrutement plasturgie & décolletage \| Alveris (57) | Recrutement de dirigeants et cadres pour la plasturgie, l'injection et le décolletage : di… (145) | Cabinet de recrutement plasturgie & décolletage | 950 | FAQPage, BreadcrumbList | 47 / 3 | 8 | 1 |
| `chasseur-de-tete-industrie.html` | Executive Search Industrie \| Chasseur de Tête & Approche Directe, Alveris (73) | Alveris, cabinet d'executive search industrie : approche directe des cadres et dirigeants … (162) | Executive search & chasseur de tête spécialisé industrie | 917 | FAQPage, BreadcrumbList | 47 / 16 | 8 | 1 |
| `contact.html` | Contact \| Alveris · Cabinet de recrutement industrie (52) | Un besoin en recrutement industriel ? Prenons 20 minutes pour le qualifier. Premier échang… (137) | Un besoin en recrutement ? | 114 | BreadcrumbList | 47 / 39 | 2 | 1 |
| `deposer-cv.html` | Déposer un CV \| Alveris · Cabinet de recrutement industrie (58) | Déposez votre candidature auprès d'Alveris, cabinet de recrutement industrie. Votre profil… (158) | Déposez votre candidature | 117 | BreadcrumbList | 2 / 1 | 1 | 1 |
| `en/executive-search-france.html` | Executive Search in France for International Industrial Groups \| Alveris (72) | Alveris helps international industrial groups recruit France-based executives, with local … (200) | Executive Search in France for International Industrial Groups | 704 | FAQPage, BreadcrumbList | 2 / 2 | 4 | 2 |
| `en/hiring-executives-in-france.html` | Hiring Sales & Country Leadership in France \| Alveris (53) | Alveris helps international groups hire Sales Directors, Country Managers and Managing Dir… (181) | Hiring Sales Directors, Country Managers & Managing Directors in France | 622 | FAQPage, BreadcrumbList | 1 / 1 | 4 | 3 |
| `executive-search-grand-est.html` | Redirection · Alveris (21) |  (0) | **aucun** | 17 | - | 0 / 0 | 1 | non atteinte |
| `executive-search-ile-de-france.html` | Redirection · Alveris (21) |  (0) | **aucun** | 16 | - | 0 / 0 | 1 | non atteinte |
| `executive-search-paca.html` | Redirection · Alveris (21) |  (0) | **aucun** | 16 | - | 0 / 0 | 1 | non atteinte |
| `executive-search-rhone-alpes.html` | Redirection · Alveris (21) |  (0) | **aucun** | 16 | - | 0 / 0 | 1 | non atteinte |
| `expertises-industrie.html` | Toutes nos expertises industrie \| Alveris (41) | Toutes les fonctions dirigeantes et d'encadrement de l'industrie sur lesquelles Alveris in… (182) | Toutes nos expertises industrie | 162 | BreadcrumbList | 47 / 3 | 10 | 1 |
| `filieres-industrie.html` | Nos filières industrielles \| Alveris (36) | Toutes les filières industrielles sur lesquelles Alveris intervient : recrutement de dirig… (148) | Nos filières industrielles | 286 | BreadcrumbList | 47 / 0 | 9 | 1 |
| `googlea0d9813e0edd0822.html` |  (0) |  (0) | **aucun** | 3 | - | 0 / 0 | 0 | non atteinte |
| `index.html` | Cabinet de recrutement industrie & executive search \| Alveris (61) | Alveris, cabinet de recrutement industrie & executive search. Dirigeants industriels, appr… (138) | Cabinet de recrutement industrie & executive search pour ETI et groupes industriels | 656 | ProfessionalService, EmploymentAgency, FAQPage | 47 / 47 | 5 | 0 |
| `management-transition-industrie.html` | Management de Transition Industrie \| Alveris · Executive Search (63) | Alveris place des managers de transition expérimentés dans l'industrie : redressement de s… (161) | Management de Transition dans l'industrie | 801 | FAQPage, BreadcrumbList | 47 / 12 | 5 | 1 |
| `mentions-legales.html` | Mentions légales \| Alveris (26) | Mentions légales du site alveris.fr : éditeur, hébergement, propriété intellectuelle, limi… (135) | Mentions légales | 213 | - | 47 / 0 | 1 | 1 |
| `politique-confidentialite.html` | Politique de confidentialité & RGPD \| Alveris (45) | Politique de confidentialité et RGPD d'Alveris : données collectées, finalités, durée de c… (138) | Politique de confidentialité & RGPD | 330 | - | 47 / 0 | 1 | 1 |
| `postes-industrie.html` | Postes sur lesquels nous intervenons \| Alveris (46) | Aperçu des fonctions sur lesquelles Alveris intervient dans l'industrie : direction généra… (156) | Postes sur lesquels nous intervenons. | 642 | BreadcrumbList | 47 / 0 | 2 | 1 |
| `pourquoi-alveris.html` | Pourquoi Alveris \| L'histoire du cabinet, par Aurélie Stefanowski (65) | Après 17 ans dans le recrutement industriel, Aurélie Stefanowski a créé Alveris pour répon… (173) | Pourquoi j'ai créé Alveris | 413 | BreadcrumbList | 47 / 1 | 2 | 1 |
| `recrutement-cadres-industriels.html` | Recrutement Cadres Industriels \| Alveris · Executive Search Industrie (69) | Alveris recrute les cadres industriels expérimentés (ingénieurs, responsables de productio… (181) | Recrutement de Cadres dans l'industrie | 740 | FAQPage, BreadcrumbList | 47 / 5 | 4 | 1 |
| `recrutement-daf-industrie.html` | Recrutement DAF Industrie \| Alveris · Executive Search (54) | Alveris recrute les Directeurs Administratifs et Financiers (DAF) de groupes industriels p… (160) | Recrutement d'un DAF dans l'industrie | 721 | FAQPage, BreadcrumbList | 47 / 10 | 5 | 1 |
| `recrutement-directeur-general-industrie.html` | Recrutement Directeur Général Industrie \| Alveris · Executive Search (68) | Alveris accompagne les entreprises industrielles dans le recrutement de leur Directeur Gén… (171) | Recrutement d'un Directeur Général dans l'industrie | 629 | FAQPage, BreadcrumbList | 47 / 21 | 4 | 1 |
| `recrutement-directeur-industriel.html` | Recrutement Directeur Industriel \| Alveris · Executive Search (61) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur Industrie… (217) | Recrutement d'un Directeur Industriel | 709 | FAQPage, BreadcrumbList | 1 / 1 | 6 | 2 |
| `recrutement-directeur-qualite-industrie.html` | Recrutement Directeur Qualité Industrie \| Alveris · Executive Search (68) | Alveris accompagne les entreprises industrielles dans le recrutement de leur Directeur Qua… (184) | Recrutement d'un Directeur Qualité industrie | 705 | FAQPage, BreadcrumbList | 1 / 1 | 8 | 2 |
| `recrutement-directeur-supply-chain-industrie.html` | Recrutement Directeur Supply Chain Industrie \| Alveris · Executive Search (73) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur Supply Ch… (172) | Recrutement d'un Directeur Supply Chain industrie | 713 | FAQPage, BreadcrumbList | 1 / 1 | 7 | 2 |
| `recrutement-directeur-usine-industrie.html` | Recrutement Directeur d'Usine & Plant Manager Industrie \| Alveris · Executive Search (84) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur d'Usine, … (209) | Recrutement d'un Directeur d'Usine ou Plant Manager dans l'industrie | 791 | FAQPage, BreadcrumbList | 47 / 21 | 4 | 1 |
| `recrutement-drh-industrie.html` | Recrutement DRH Industrie \| Alveris · Executive Search (54) | Alveris recrute les DRH et RRH de groupes industriels par approche directe. Cabinet execut… (132) | Recrutement d'un DRH dans l'industrie | 742 | FAQPage, BreadcrumbList | 47 / 10 | 4 | 1 |
| `recrutement-fonctions-support-industrie.html` | Recrutement RH, Finance & Fonctions Support Industrie \| Alveris · Executive Search (82) | Alveris recrute les DRH, DAF, Directeurs Achats, Supply Chain et Qualité pour l'industrie … (168) | Recrutement RH, Finance et Fonctions Support dans l'industrie | 708 | FAQPage, BreadcrumbList | 12 / 12 | 5 | 2 |
| `regions-industrie.html` | Nos régions d'intervention \| Alveris (36) | Toutes les régions industrielles françaises sur lesquelles Alveris intervient : recrutemen… (156) | Nos régions d'intervention | 184 | BreadcrumbList | 0 / 0 | 6 | non atteinte |

## 3. Contenu

### 3.1 Pages trop légères (moins de 600 mots)

| Page | Mots | Commentaire |
|---|---|---|
| `expertises-industrie.html` | 162 | Hub : simple liste de fonctions, aucun texte de présentation. Pourtant déjà bien positionné selon la Search Console. |
| `regions-industrie.html` | 184 | Hub : quatre vignettes, et page orpheline. |
| `filieres-industrie.html` | 286 | Hub : vignettes seules, aucun lien contextuel entrant. |
| `pourquoi-alveris.html` | 413 | Page E-E-A-T clé, absente du sitemap, sans données `Person`. |
| `actualites/index.html` | 575 | Liste d'articles. |
| 11 articles d'actualité | 281 à 389 | Seul `cout-cabinet-executive-search-industrie.html` dépasse 600 mots (1 016). Articles trop courts pour se positionner sur des requêtes de dirigeants. |
| `contact.html`, `deposer-cv.html` | 114 et 117 | Pages utilitaires, pas de seuil à viser. |

Pages de fonction (DG, usine, DAF, DRH, qualité, supply chain, industriel, fonctions support) : entre 629 et 791 mots, au-dessus du seuil mais avec un champ sémantique « client » faible dans les H2 (pas de H2 sur le mandat, la short-list, la garantie, les honoraires).

### 3.2 Contenus quasi dupliqués

Comparaison par empreintes de 8 mots consécutifs (part des empreintes communes rapportée à la plus petite page) :

| Page A | Page B | Recouvrement |
|---|---|---|
| `cabinet-recrutement-industrie-grand-est.html` | `cabinet-recrutement-industrie-lyon.html` | 42 % |
| `cabinet-recrutement-industrie-grand-est.html` | `cabinet-recrutement-industrie-paca.html` | 36 % |
| `cabinet-recrutement-industrie-lyon.html` | `cabinet-recrutement-industrie-paca.html` | 32 % |

Les pages régionales Lyon, PACA, Grand Est et Paris suivent le même plan, avec des paragraphes entiers identiques à part les noms de villes (« Une présence de terrain en … », « Alveris est un cabinet de recrutement industrie national… », FAQ « Alveris a-t-elle une agence à … »). Toutes les autres paires de pages sont sous 25 %.

Les FAQ des pages de fonction partagent aussi une réponse identique sur les délais (voir 3.4).

### 3.3 Balises title et meta description

- Aucun title ni meta dupliqués, aucun manquant.
- Les titles des pages de service et de fonction commencent souvent par « Recrutement … » ou « Cabinet de recrutement industrie … » : la requête client principale (« cabinet recrutement directeur d'usine », « chasse de tête industrie », etc.) n'est pas toujours en tête.
- Les `og:title` et `og:description` diffèrent souvent du title et de la meta (versions abrégées, parfois génériques). Seuls 2 pages déclarent `twitter:title`, et seule l'accueil déclare `twitter:description` et `twitter:image`.

### 3.4 Affirmations à vérifier (déjà en ligne)

Relevées pendant l'audit, à faire confirmer ou retirer :

| Page | Affirmation |
|---|---|
| `recrutement-directeur-general-industrie.html`, `recrutement-directeur-industriel.html`, `recrutement-directeur-qualite-industrie.html`, `recrutement-directeur-supply-chain-industrie.html` (et données FAQ) | « les premiers profils qualifiés sont présentés sous environ 10 jours après le briefing, avec une mission complète généralement finalisée en 6 à 10 semaines » |
| `management-transition-industrie.html` | « un profil disponible en quelques jours », « mobilisable en quelques jours » |
| `contact.html` | « Réponse sous 24h » (meta, encadré, message de confirmation) |
| `cabinet-recrutement-industrie-lyon.html` | « Missions en cours sur Lyon et sa région » |
| `cabinet-recrutement-industrie-paca.html` | « Missions en cours sur le pourtour méditerranéen » |
| Pages régionales | « nos consultantes se déplacent sur site pour chaque mission » |
| `index.html` (FAQ en données structurées) | « 70% des profils expérimentés ne répondent pas aux annonces publiées » (non sourcé) |
| `actualites/cout-cabinet-executive-search-industrie.html` | « grille d'honoraires au succès » alors que l'échéancier prévoit 40 % au lancement : modèle à clarifier (succès ou forfait d'engagement) |

La mention « +200 recrutements réalisés en France » apparaît sur 11 pages (« 200+ placements » sur les 2 pages anglaises), toujours avec la même formulation, cohérente avec « 17 ans d'expérience ».

## 4. Maillage interne

- **Page orpheline** : `regions-industrie.html` n'est liée par aucune page (ni menu, ni corps, ni pied de page). Elle n'est accessible que par le sitemap.
- **Hubs sans lien contextuel entrant** : `filieres-industrie.html` (atteint uniquement par le menu) et `postes-industrie.html`.
- **Pages avec un seul lien entrant** : `recrutement-directeur-industriel.html`, `recrutement-directeur-qualite-industrie.html`, `recrutement-directeur-supply-chain-industrie.html` (uniquement depuis `expertises-industrie.html`), `en/hiring-executives-in-france.html` (uniquement depuis `en/executive-search-france.html`).
- **Profondeur** : toutes les pages indexables sont à 1 ou 2 clics, sauf `en/hiring-executives-in-france.html` (3 clics) et `regions-industrie.html` (non atteignable).
- **Articles d'actualité** : chaque article renvoie vers 2 pages de service via les vignettes « Voir aussi », mais aucune page de service ne renvoie vers les articles qui la concernent (hors page Honoraires, très liée).
- Les blocs « Voir aussi » de plusieurs pages pointent vers `/index.html` avec le libellé « Toutes nos expertises industrie », alors que le hub `expertises-industrie.html` existe.
- **Fil d'Ariane** : présent en HTML et en `BreadcrumbList` sur toutes les pages, sauf l'accueil (normal). Les fils d'Ariane des pages filière, région et fonction ne passent pas par leur hub (Accueil / Page au lieu de Accueil / Hub / Page).

## 5. Contrôle technique

| Point | Constat |
|---|---|
| `sitemap.xml` | 46 URL, aucune URL morte. `pourquoi-alveris.html` absente. `lastmod` figés aux 13 août et 11 septembre 2026 pour la plupart des pages. |
| `robots.txt` | `Allow: /` et déclaration du sitemap. Correct. |
| Canonicals | Présents sur toutes les pages (y compris redirections). L'accueil déclare `https://alveris.fr/` en canonical mais `og:url` sans barre finale ; les fils d'Ariane pointent vers `https://alveris.fr/index.html` (incohérence mineure). |
| Redirections | `executive-search-grand-est.html`, `-ile-de-france`, `-paca`, `-rhone-alpes` : redirections par `meta refresh` en `noindex`, hors sitemap. À conserver. |
| Open Graph | `og:title`, `og:description`, `og:url`, `og:image`, `og:type` présents partout (pages légales partielles). |
| Twitter Card | Seul `twitter:card` est présent sur 45 pages : `twitter:title`, `twitter:description`, `twitter:image` manquent partout sauf sur l'accueil. |
| Données structurées | JSON valide partout. Accueil : `ProfessionalService` + `EmploymentAgency` (adresse, e-mail, LinkedIn société), sans téléphone ni `areaServed` détaillé ; `FAQPage`. Articles : `Article` avec auteur `Person` pointant vers l'accueil (pas vers une page auteur). Pas de `Person` sur `pourquoi-alveris.html`. Pas de `FAQPage` sur les articles. |
| hreflang | Présent entre `chasseur-de-tete-industrie.html` et `en/executive-search-france.html`, et sur `en/hiring-executives-in-france.html`. |
| Images | 30 fichiers dans `assets/img`, de 77 Ko à 417 Ko (JPEG 1600 x 900). Les plus lourdes : `hero-var-toulon.jpg` (417 Ko), `hero-paris.jpg` (405 Ko), `hero-accueil.jpg` (327 Ko), `hero-aeronautique-mro.jpg` (319 Ko), `hero-grand-est.jpg` (306 Ko). Plusieurs articles et l'accueil chargent des images depuis `images.unsplash.com` (dépendance externe). Tous les `alt` sont renseignés. Une seule image sans dimensions (photo fondatrice sur `pourquoi-alveris.html`). |
| Images en `loading="lazy"` | Les images hors hero de l'accueil sont en lazy ; les autres pages n'ont qu'une image (hero), chargée normalement, ce qui est correct. |
| Consentement cookies | `assets/cookie-consent.js` : Consent Mode v2 en « denied » par défaut, GA4 (`G-L65XDNB8CD`) chargé seulement après consentement « mesure d'audience ». LinkedIn Insight Tag prévu mais **identifiant vide** dans `assets/tracking-config.js` : il ne se déclenche donc jamais. |
| Chargement des scripts de mesure | `tracking-config.js` puis `cookie-consent.js` présents sur les 48 pages de contenu. Absents (normalement) des redirections et du fichier de vérification Google. Conversions suivies : envoi du formulaire de contact (`contact_form_submit`), envoi de CV (`cv_form_submit`), clics téléphone et e-mail. |
| Performance mobile | Site statique léger : une feuille de style partagée (12 Ko), un script de navigation (2 Ko). Les polices Google sont chargées sans `preconnect`. L'accueil embarque ses styles en ligne (88 Ko de HTML). Points d'amélioration : poids des images hero, `preconnect` vers `fonts.gstatic.com`. |

## 6. Priorités qui en découlent

1. Hubs (`expertises`, `filieres`, `regions`, `postes`) à transformer en pages piliers, et `regions-industrie.html` à rattacher au menu ou au corps de texte.
2. Pages régionales à réécrire pour supprimer le texte commun.
3. Titles et metas à recaler sur les requêtes clients (55 à 60 et 150 à 160 caractères).
4. Articles trop courts et non reliés aux pages de service.
5. Affirmations de délais et de présence non validées (section 3.4).
6. `pourquoi-alveris.html` : sitemap, données `Person`, dimensions de la photo.
7. Cartes Twitter incomplètes, `lastmod` à mettre à jour.
