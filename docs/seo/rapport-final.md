# Rapport final : plan SEO alveris.fr, acquisition de mandats

Date : 3 octobre 2026. Branche : `seo-mandats` (rien n'a été fusionné sur `main`).
Base de comparaison : `docs/seo/audit-initial.md`. Suivi des requêtes : `docs/seo/suivi-requetes.md`. Netlinking et fiche Google : `docs/seo/netlinking.md`.

## 1. Prévisualiser le résultat

La branche n'est pas en ligne : GitHub Pages ne publie que `main`. Trois façons de la voir :

1. **En local (recommandé, fidèle au site réel)** : télécharger la branche (GitHub > branche `seo-mandats` > Code > Download ZIP), décompresser, ouvrir un terminal dans le dossier et lancer `python3 -m http.server 8000`, puis ouvrir http://localhost:8000/. Les liens commencent par `/`, il faut donc un petit serveur : un double-clic sur un fichier HTML ne suffit pas.
2. **Comparer les modifications** : sur GitHub, comparer `main...seo-mandats` (https://github.com/alveris-recrutement/alveris/compare/main...seo-mandats). Je peux aussi ouvrir une pull request sans la fusionner si vous le souhaitez.
3. **Aperçu en ligne privé** : sur demande, je peux publier une copie de prévisualisation privée du site (lien claude.ai non indexé). Je ne l'ai pas fait sans votre accord, puisqu'il s'agit de votre site et de votre marque.

Commits, un par lot :

| Commit | Contenu |
|---|---|
| Étape 0 | `docs/seo/audit-initial.md` |
| Lot A | Balises et sémantique client des pages de service, fonction, filière et région |
| Lot B | Pages piliers, pages régionales spécifiques et maillage interne |
| Lot C | Quatre articles pour dirigeants et article rémunérations sourcé |
| Lot D | Autorité et preuves (E-E-A-T) |
| Lot E | Page de conversion management de transition |
| Lot F | Technique (balises, sitemap, images, données structurées) |
| Livrables | Rapport final, suivi des requêtes, netlinking, corrections de dernière relecture |

## 2. Avant / après en chiffres

| Indicateur | Avant | Après |
|---|---|---|
| Pages indexables | 46 | 50 (4 articles créés) |
| Mots, total des pages indexables | 30 238 | 46 862 |
| Pages indexables de moins de 600 mots | 17 | 11 (9 anciens articles courts, Contact, Dépôt de CV) |
| Titles hors 55 à 60 caractères | 33 | 0 |
| Metas hors 150 à 160 caractères | 32 | 0 |
| Pages orphelines | 1 (`regions-industrie.html`) | 0 |
| Profondeur maximale depuis l'accueil | non atteignable / 3 | 2 |
| Paires de pages quasi dupliquées (plus de 25 % de recouvrement) | 3 (régions) | 0 |
| Pages avec `twitter:title`, `description`, `image` complets | 1 | toutes |
| Pages sans `BreadcrumbList` | accueil seul | accueil seul (normal) |
| Fils d'Ariane passant par les hubs | non | oui (Expertises, Filières, Régions) |
| `pourquoi-alveris.html` dans le sitemap | non | oui |
| Poids total des images locales | 5,5 Mo | 4,7 Mo |
| Liens internes morts | 0 | 0 |

## 3. Titles et metas, avant / après

Nombre de caractères entre parenthèses.

| Page | Title avant | Title après | Meta avant | Meta après |
|---|---|---|---|---|
| `actualites/chasseur-tete-ou-cabinet-recrutement.html` | Chasseur de tête ou cabinet de recrutement : quelle différence pour un poste de direction industrielle \| Alveris (112) | Chasseur de tête ou cabinet : quelle différence ? \| Alveris (59) | Chasseur de tête ou cabinet de recrutement : quelle différence pour un poste de direction industrielle. (103) | Chasseur de tête ou cabinet de recrutement : méthodes, accès aux candidats en poste, engagement et honoraires, pour un poste de direction industrielle. (151) |
| `actualites/cout-cabinet-executive-search-industrie.html` | Tarifs et honoraires d'un cabinet de recrutement industrie \| Alveris (68) | Honoraires cabinet d'executive search industrie \| Alveris (57) | Garantie de remplacement 6 mois contre 3 mois en moyenne sur le marché. Honoraires à partir de 18 % du package annuel brut, échéancier 40/60. Premier mandat à 18 %. (164) | Honoraires d'un cabinet d'executive search industrie : à partir de 18 % du package annuel brut, échéancier 40/60, garantie de remplacement de six mois. (151) |
| `actualites/daf-industrie-precision-profil-strategique.html` | DAF industrie de précision : un profil de plus en plus stratégique \| Alveris (76) | DAF industrie de précision, un profil stratégique \| Alveris (59) | DAF industrie de précision : un profil de plus en plus stratégique, entre pilotage des investissements et gestion de trésorerie. (128) | DAF industrie de précision : pourquoi le directeur administratif et financier devient un partenaire du pilotage industriel, et comment bien le recruter. (152) |
| `actualites/directeur-site-nucleaire-marche-tension.html` | Directeur de site nucléaire : un marché sous très forte tension \| Alveris (73) | Directeur de site nucléaire : marché sous tension \| Alveris (59) | Directeur de site nucléaire : un marché sous très forte tension, entre relance de projets et pénurie de compétences. (116) | Directeur de site nucléaire : pourquoi ces profils sont si rares, ce que la relance de la filière change, et comment les recruter par approche directe. (151) |
| `actualites/directeurs-usine-profils-ne-repondent-annonces.html` | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas à vos annonces \| Alveris (93) | Directeurs d'usine : pourquoi l'annonce échoue \| Alveris (56) | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas à vos annonces, et ce que font différemment les entreprises qui recrutent vite. (148) | Directeurs d'usine : pourquoi les meilleurs profils ne répondent pas aux annonces, et comment les atteindre par une approche directe et confidentielle. (151) |
| `actualites/drh-industrie-nouvelles-attentes-directions-generales.html` | DRH industrie : les nouvelles attentes des directions générales en 2026 \| Alveris (81) | DRH industrie : ce qu'attendent les directions \| Alveris (56) | DRH industrie : les nouvelles attentes des directions générales en 2026, entre pénurie de compétences et profils plus opérationnels. (132) | DRH industrie : ce que les directions générales attendent désormais de leur DRH, dialogue social, transformation, recrutement, et comment le recruter. (150) |
| `actualites/fonderie-metallurgie-directeurs-site.html` | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026 \| Alveris (93) | Fonderie et métallurgie : directeurs de site rares \| Alveris (60) | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026, entre vivier restreint et compétences difficiles à transférer. (147) | Fonderie et métallurgie : pourquoi les directeurs de site sont introuvables en 2026, et comment les entreprises peuvent recruter ces profils si rares. (150) |
| `actualites/index.html` | Actualités RH & Recrutement Industrie \| Alveris (47) | Actualités : recruter des dirigeants industriels \| Alveris (58) | Décryptage des tendances du marché de l'emploi industriel, insights recrutement et actualités RH sélectionnés par Alveris. Cabinet de recrutement industrie & executive search. (175) | Analyses et guides pour les dirigeants industriels : recruter un directeur de site, un directeur QHSE, choisir son cabinet, honoraires et rémunérations. (152) |
| `actualites/management-transition-aeronautique-cadence.html` | Management de transition en aéronautique : gérer une montée en cadence sans dérailler \| Alveris (95) | Management de transition aéronautique et cadence \| Alveris (58) | Management de transition en aéronautique : gérer une montée en cadence sans dérailler, entre pénurie de compétences et exigences qualité. (137) | Management de transition en aéronautique : sécuriser une montée en cadence sur un site de production ou de MRO grâce à un manager de transition expérimenté. (156) |
| `actualites/management-transition-industriel-quand-y-recourir.html` | Management de transition industriel : quand y recourir et comment choisir le bon profil \| Alveris (97) | Management de transition : quand y recourir ? \| Alveris (55) | Management de transition industriel : quand y recourir et comment choisir le bon profil, entre redressement de site et projets ponctuels. (137) | Management de transition industriel : les situations où y recourir (absence, redressement, démarrage) et sa différence avec un recrutement permanent CDI. (153) |
| `actualites/marque-employeur-industrielle-attirer-directeurs-site.html` | Marque employeur industrielle : comment attirer les meilleurs directeurs de site \| Alveris (90) | Marque employeur : attirer des directeurs de site \| Alveris (59) | Marque employeur industrielle : comment attirer les meilleurs directeurs de site grâce à une communication mieux ciblée. (120) | Marque employeur industrielle : comment attirer des directeurs de site lorsque les meilleurs candidats sont en poste et sollicités par vos concurrents. (151) |
| `actualites/remunerations-cadres-industriels-2026.html` | Rémunérations des cadres industriels en 2026 : ce qui a vraiment changé \| Alveris (81) | Rémunération des cadres industriels 2026 : repères \| Alveris (60) | Rémunérations des cadres industriels en 2026 : ce qui a vraiment changé, entre écarts sectoriels et part variable renforcée. (124) | Rémunération des cadres industriels en 2026 : repères sourcés de l'Apec, part variable, écarts selon filière et bassin, lecture pour un poste de direction. (155) |
| `cabinet-recrutement-aeronautique-mro.html` | Cabinet de recrutement aéronautique & MRO \| Alveris (51) | Cabinet recrutement aéronautique, MRO : dirigeants \| Alveris (60) | Recrutement de dirigeants et cadres pour l'aéronautique et la maintenance aéronautique : directeurs de site, opérations, qualité EN 9100. Approche directe. (155) | Cabinet de recrutement aéronautique et MRO : directeurs de site, qualité EN 9100, Part 145, programmes. Chasse directe des profils en poste, short-list évaluée. (160) |
| `cabinet-recrutement-agroalimentaire.html` | Cabinet de recrutement agroalimentaire \| Alveris (48) | Cabinet recrutement agroalimentaire, dirigeants \| Alveris (57) | Recrutement de directeurs de site, directeurs de production et dirigeants pour l'industrie agroalimentaire. Approche directe, expertise IFS et BRC. (147) | Cabinet de recrutement agroalimentaire : directeurs d'usine, QHSE, production et DG de sites IAA. Chasse directe confidentielle, short-list et garantie. (152) |
| `cabinet-recrutement-automobile-rhone-alpes.html` | Cabinet de recrutement automobile Rhône-Alpes \| Alveris (55) | Cabinet recrutement automobile, directeurs d'usine \| Alveris (60) | Recrutement de dirigeants et cadres pour équipementiers et sous-traitants automobiles en Auvergne-Rhône-Alpes. Approche directe, expertise IATF et transition électrique. (169) | Cabinet de recrutement automobile en Rhône-Alpes et en France : directeurs d'usine, qualité IATF, programmes chez les équipementiers. Chasse directe en mandat. (159) |
| `cabinet-recrutement-chimie-materiaux.html` | Cabinet de recrutement chimie & matériaux \| Alveris (51) | Cabinet recrutement chimie, matériaux : dirigeants \| Alveris (60) | Recrutement de dirigeants et cadres pour l'industrie chimique et les matériaux : directeurs de site Seveso, production, HSE. Approche directe. (142) | Cabinet de recrutement chimie et matériaux : directeurs de site Seveso, HSE, production, R&D. Chasse directe confidentielle des profils en poste, short-list. (157) |
| `cabinet-recrutement-fonderie-metallurgie.html` | Cabinet de recrutement fonderie & métallurgie \| Alveris (55) | Cabinet recrutement fonderie et métallurgie, sites \| Alveris (60) | Recrutement de dirigeants et cadres pour la fonderie, la forge et la métallurgie : directeurs de site, production, qualité. Approche directe. (141) | Cabinet de recrutement fonderie et métallurgie : directeurs de site, production, qualité et HSE. Chasse directe des profils en poste, short-list évaluée. (153) |
| `cabinet-recrutement-industrie-grand-est.html` | Cabinet de Recrutement Cadres Dirigeants Grand Est \| Alveris · Industrie (72) | Cabinet recrutement industrie Grand Est et Alsace \| Alveris (59) | Alveris, cabinet de recrutement de cadres dirigeants pour l'industrie du Grand Est (Strasbourg, Metz, Nancy, Reims), par approche directe. Premier échange gratuit et sans engagement. (182) | Cabinet de recrutement industrie Grand Est : Alsace, Moselle, Meurthe-et-Moselle, Marne. Chasse directe de directeurs d'usine et de dirigeants industriels. (155) |
| `cabinet-recrutement-industrie-lyon.html` | Cabinet de recrutement industrie Lyon & Rhône-Alpes \| Alveris (61) | Cabinet de recrutement industriel Lyon Rhône-Alpes \| Alveris (60) | Alveris accompagne les entreprises industrielles de la région Rhône-Alpes (Lyon, Saint-Étienne, Grenoble, Valence) dans le recrutement de leurs dirigeants par approche directe. (176) | Cabinet de recrutement industriel à Lyon et en Rhône-Alpes : vallée de la chimie, Arve, Oyonnax, Grenoble. Chasse directe de directeurs de site et dirigeants. (158) |
| `cabinet-recrutement-industrie-paca.html` | Cabinet de recrutement industrie PACA & Marseille \| Alveris (59) | Cabinet recrutement industrie PACA, Marseille, Aix \| Alveris (60) | Alveris accompagne les entreprises industrielles de PACA (Marseille, Toulon, Aix-en-Provence, Nice) dans le recrutement de leurs dirigeants par approche directe. (161) | Cabinet de recrutement industrie en PACA : Marseille-Fos, étang de Berre, Marignane, Aix, Toulon, Grasse. Chasse directe de directeurs de site et dirigeants. (157) |
| `cabinet-recrutement-industrie-paris.html` | Cabinet de recrutement industrie Paris & Île-de-France \| Alveris (64) | Cabinet recrutement industrie Paris, Île-de-France \| Alveris (60) | Alveris accompagne les groupes industriels d'Île-de-France (Paris, La Défense, Vélizy, Boulogne) dans le recrutement de leurs dirigeants et comités exécutifs. (158) | Cabinet de recrutement industrie en Île-de-France : sièges de groupes, aéronautique, automobile, santé. Chasse directe de dirigeants et directeurs de site. (155) |
| `cabinet-recrutement-industrie-var-toulon.html` | Cabinet de recrutement industrie Var & Toulon \| Alveris (55) | Cabinet recrutement industrie Var et Toulon, naval \| Alveris (60) | Recrutement de dirigeants et cadres industriels dans le Var : naval, défense, sous-traitance mécanique. Cabinet implanté à La Londe-les-Maures. (143) | Cabinet de recrutement industrie dans le Var et à Toulon : naval de défense, sous-traitance, maintenance. Chasse directe de directeurs de site et cadres. (153) |
| `cabinet-recrutement-nucleaire-energie.html` | Cabinet de recrutement nucléaire & énergie \| Alveris (52) | Chasseur de têtes nucléaire et énergie, dirigeants \| Alveris (60) | Recrutement de dirigeants et cadres pour les ETI de la filière nucléaire : ingénierie, maintenance, chaudronnerie, travaux neufs. Approche directe et confidentialité. (166) | Chasseur de têtes nucléaire et énergie : directeurs de site, projets, qualité et sûreté chez les exploitants et sous-traitants. Approche directe confidentielle. (160) |
| `cabinet-recrutement-pharma-cdmo.html` | Cabinet de recrutement pharma & CDMO \| Alveris (46) | Cabinet recrutement pharma et CDMO : directeurs \| Alveris (57) | Recrutement de directeurs de site, directeurs des opérations et dirigeants pour l'industrie pharmaceutique et la sous-traitance CDMO. Approche directe, expertise BPF. (166) | Cabinet de recrutement pharma et CDMO : directeurs de site, pharmacien responsable, qualité, production BPF. Chasse directe des profils en poste, short-list. (157) |
| `cabinet-recrutement-plasturgie-decolletage.html` | Cabinet de recrutement plasturgie & décolletage \| Alveris (57) | Cabinet recrutement plasturgie et décolletage \| Alveris (55) | Recrutement de dirigeants et cadres pour la plasturgie, l'injection et le décolletage : directeurs de site, technique, qualité. Approche directe. (145) | Cabinet de recrutement plasturgie et décolletage : directeurs d'usine, techniques et qualité à Oyonnax, vallée de l'Arve et en France. Approche directe. (152) |
| `chasseur-de-tete-industrie.html` | Executive Search Industrie \| Chasseur de Tête & Approche Directe, Alveris (73) | Chasseur de tête industrie : chasse de dirigeants \| Alveris (59) | Alveris, cabinet d'executive search industrie : approche directe des cadres et dirigeants industriels, France entière. Premier échange gratuit et sans engagement. (162) | Chasse de tête industrie : Alveris approche en direct et en toute confidentialité les directeurs en poste. Mandat, short-list évaluée, garantie de remplacement. (160) |
| `contact.html` | Contact \| Alveris · Cabinet de recrutement industrie (52) | Contact : confier un recrutement de direction \| Alveris (55) | Un besoin en recrutement industriel ? Prenons 20 minutes pour le qualifier. Premier échange gratuit et sans engagement, réponse sous 24h. (137) | Contactez Alveris pour confier un recrutement de direction industrielle : directeur de site, QHSE, DAF, DG. Premier échange gratuit et sans engagement. (151) |
| `en/executive-search-france.html` | Executive Search in France for International Industrial Groups \| Alveris (72) | Executive search firm in France for manufacturers \| Alveris (59) | Alveris helps international industrial groups recruit France-based executives, with local expertise in French labor law, the candidate market and the industrial landscape. 17 years in French industry. (200) | French executive search firm dedicated to industry and engineering. Direct search for plant managers, MDs, CFOs and HR directors, with a 6-month guarantee. (155) |
| `en/hiring-executives-in-france.html` | Hiring Sales & Country Leadership in France \| Alveris (53) | Hiring executives in France: industry search firm \| Alveris (59) | Alveris helps international groups hire Sales Directors, Country Managers and Managing Directors based in France, through direct, confidential approach. 17 years in French industry. (181) | Hiring a Country Manager, Sales or Managing Director in France? Alveris, a French executive search firm for industry, runs direct search and assessment. (152) |
| `expertises-industrie.html` | Toutes nos expertises industrie \| Alveris (41) | Cabinet recrutement cadres dirigeants industrie \| Alveris (57) | Toutes les fonctions dirigeantes et d'encadrement de l'industrie sur lesquelles Alveris intervient : direction générale, direction industrielle, qualité, supply chain, RH et finance. (182) | Cabinet de recrutement des cadres dirigeants de l'industrie : DG, directeur d'usine, QHSE, DAF, DRH, supply chain. Approche directe et short-list évaluée. (154) |
| `filieres-industrie.html` | Nos filières industrielles \| Alveris (36) | Cabinet recrutement industrie par filière, secteur \| Alveris (60) | Toutes les filières industrielles sur lesquelles Alveris intervient : recrutement de dirigeants et cadres par approche directe, secteur par secteur. (148) | Cabinet de recrutement industrie par filière : automobile, agroalimentaire, pharma, chimie, aéronautique, nucléaire, plasturgie, fonderie. Approche directe. (156) |
| `index.html` | Cabinet de recrutement industrie & executive search \| Alveris (61) | Cabinet executive search industrie et ingénierie \| Alveris (58) | Alveris, cabinet de recrutement industrie & executive search. Dirigeants industriels, approche directe. France entière, Lyon, Paris, PACA. (138) | Alveris, cabinet d'executive search dédié à l'industrie : chasse directe de directeurs de site, DG, DAF, QHSE pour ETI et groupes, Rhône-Alpes, PACA, France. (157) |
| `management-transition-industrie.html` | Management de Transition Industrie \| Alveris · Executive Search (63) | Management de transition industrie, direction site \| Alveris (60) | Alveris place des managers de transition expérimentés dans l'industrie : redressement de site, remplacement urgent, démarrage de production. Mission 6 à 18 mois. (161) | Management de transition industrie : un manager de transition pour remplacer un directeur d'usine ou une fonction clé dans l'urgence. Cadrage et suivi. (151) |
| `postes-industrie.html` | Postes sur lesquels nous intervenons \| Alveris (46) | Postes de direction industrielle et fonctions \| Alveris (55) | Aperçu des fonctions sur lesquelles Alveris intervient dans l'industrie : direction générale, direction industrielle, RH, finance, management de transition. (156) | Postes de direction industrielle recrutés par Alveris : directeurs de site, d'usine, QHSE, DAF, DRH, cadres. Exemples de missions pour ETI et groupes. (150) |
| `pourquoi-alveris.html` | Pourquoi Alveris \| L'histoire du cabinet, par Aurélie Stefanowski (65) | Aurélie Stefanowski, fondatrice du cabinet Alveris \| Alveris (60) | Après 17 ans dans le recrutement industriel, Aurélie Stefanowski a créé Alveris pour répondre à la pénurie de dirigeants compétents dans l'industrie, par l'approche directe. (173) | Aurélie Stefanowski a fondé Alveris après 17 ans de recrutement et de RH dans l'industrie, dont un poste de DRH de holding. Parcours, méthode et engagements. (157) |
| `recrutement-cadres-industriels.html` | Recrutement Cadres Industriels \| Alveris · Executive Search Industrie (69) | Recrutement cadres industriels, approche directe \| Alveris (58) | Alveris recrute les cadres industriels expérimentés (ingénieurs, responsables de production, chefs de projet) par approche directe. Cabinet de recrutement industrie, France entière. (181) | Recrutement de cadres industriels : responsables de production, méthodes, maintenance, qualité. Approche directe, évaluation et garantie de remplacement. (153) |
| `recrutement-daf-industrie.html` | Recrutement DAF Industrie \| Alveris · Executive Search (54) | Cabinet recrutement DAF industrie, chasse directe \| Alveris (59) | Alveris recrute les Directeurs Administratifs et Financiers (DAF) de groupes industriels par approche directe. Cabinet de recrutement industrie, France entière. (160) | Cabinet de recrutement de DAF industrie : contrôle de gestion industriel, LBO, ETI familiales. Chasse directe confidentielle, short-list évaluée, garantie. (155) |
| `recrutement-directeur-general-industrie.html` | Recrutement Directeur Général Industrie \| Alveris · Executive Search (68) | Recrutement directeur général industrie, DG et CEO \| Alveris (60) | Alveris accompagne les entreprises industrielles dans le recrutement de leur Directeur Général (DG) par approche directe. Cabinet de recrutement industrie, France entière. (171) | Recrutement de directeur général dans l'industrie : succession, LBO, redressement. Chasse directe confidentielle des DG en poste, évaluation des dirigeants. (156) |
| `recrutement-directeur-industriel.html` | Recrutement Directeur Industriel \| Alveris · Executive Search (61) | Cabinet recrutement direction industrielle, COO \| Alveris (57) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur Industriel, responsable de plusieurs sites de production, par approche directe. Cabinet executive search 100% industrie, France entière. (217) | Cabinet de recrutement en direction industrielle : directeur industriel, directeur des opérations multisites. Chasse directe confidentielle et short-list. (154) |
| `recrutement-directeur-qualite-industrie.html` | Recrutement Directeur Qualité Industrie \| Alveris · Executive Search (68) | Cabinet recrutement directeur QHSE et qualité \| Alveris (55) | Alveris accompagne les entreprises industrielles dans le recrutement de leur Directeur Qualité (QSE, HSE) par approche directe. Cabinet executive search 100% industrie, France entière. (184) | Cabinet de recrutement de directeurs QHSE et qualité industrie : ISO 9001, 14001, 45001, IATF 16949. Approche directe, évaluation technique, short-list. (152) |
| `recrutement-directeur-supply-chain-industrie.html` | Recrutement Directeur Supply Chain Industrie \| Alveris · Executive Search (73) | Recrutement directeur supply chain industrie, S&OP \| Alveris (60) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur Supply Chain par approche directe. Cabinet executive search 100% industrie, France entière. (172) | Recrutement de directeurs supply chain industrie : S&OP, achats, logistique multisites. Approche directe des profils en poste et short-list évaluée en mandat. (158) |
| `recrutement-directeur-usine-industrie.html` | Recrutement Directeur d'Usine & Plant Manager Industrie \| Alveris · Executive Search (84) | Cabinet recrutement directeur d'usine et de site \| Alveris (58) | Alveris accompagne les groupes industriels dans le recrutement de leur Directeur d'Usine, Plant Manager ou Directeur de Production par approche directe. Cabinet executive search 100% industrie, France entière. (209) | Cabinet de recrutement de directeurs d'usine et de site industriel (plant manager) : chasse directe des profils en poste, évaluation, garantie 6 mois. (150) |
| `recrutement-drh-industrie.html` | Recrutement DRH Industrie \| Alveris · Executive Search (54) | Cabinet recrutement DRH industrie, chasse directe \| Alveris (59) | Alveris recrute les DRH et RRH de groupes industriels par approche directe. Cabinet executive search 100% industrie, France entière. (132) | Cabinet de recrutement de DRH industrie : dialogue social, multisites, transformation. Chasse directe des DRH en poste, short-list évaluée et confidentielle. (157) |
| `recrutement-fonctions-support-industrie.html` | Recrutement RH, Finance & Fonctions Support Industrie \| Alveris · Executive Search (82) | Recrutement fonctions support industrie, RH, DAF \| Alveris (58) | Alveris recrute les DRH, DAF, Directeurs Achats, Supply Chain et Qualité pour l'industrie par approche directe. Cabinet executive search 100% industrie, France entière. (168) | Recrutement des fonctions support de l'industrie : RRH de site, contrôleurs de gestion, responsables financiers. Approche directe et évaluation des profils. (156) |
| `regions-industrie.html` | Nos régions d'intervention \| Alveris (36) | Cabinet recrutement industrie en région, bassins \| Alveris (58) | Toutes les régions industrielles françaises sur lesquelles Alveris intervient : recrutement de dirigeants et cadres par approche directe, région par région. (156) | Cabinet de recrutement industrie en région : Auvergne-Rhône-Alpes, PACA, Grand Est, Île-de-France, Var. Chasse directe des dirigeants des bassins industriels. (158) |

## 4. Pages créées, réécrites et enrichies

Nombre de mots visibles hors menu et pied de page (même méthode que l'audit initial).

| Page | Statut | Mots avant | Mots après |
|---|---|---|---|
| `actualites/choisir-cabinet-recrutement-industriel.html` | Créée | - | 1550 |
| `actualites/recruter-directeur-qhse-industrie.html` | Créée | - | 1549 |
| `actualites/recruter-directeur-site-industriel.html` | Créée | - | 1688 |
| `actualites/recruter-directeur-usine-periode-crise.html` | Créée | - | 1562 |
| `etudes-de-cas.html` | Créée | - | 373 |
| `cabinet-recrutement-industrie-grand-est.html` | Réécrite | 707 | 869 |
| `cabinet-recrutement-industrie-lyon.html` | Réécrite | 814 | 1267 |
| `cabinet-recrutement-industrie-paca.html` | Réécrite | 739 | 1023 |
| `cabinet-recrutement-industrie-paris.html` | Réécrite | 693 | 835 |
| `expertises-industrie.html` | Réécrite | 162 | 1034 |
| `filieres-industrie.html` | Réécrite | 286 | 926 |
| `management-transition-industrie.html` | Réécrite | 801 | 1200 |
| `pourquoi-alveris.html` | Réécrite | 413 | 880 |
| `regions-industrie.html` | Réécrite | 184 | 922 |
| `actualites/chasseur-tete-ou-cabinet-recrutement.html` | Enrichie | 329 | 375 |
| `actualites/cout-cabinet-executive-search-industrie.html` | Enrichie | 1016 | 1076 |
| `actualites/daf-industrie-precision-profil-strategique.html` | Enrichie | 311 | 354 |
| `actualites/directeurs-usine-profils-ne-repondent-annonces.html` | Enrichie | 389 | 433 |
| `actualites/drh-industrie-nouvelles-attentes-directions-generales.html` | Enrichie | 286 | 329 |
| `actualites/index.html` | Enrichie | 575 | 732 |
| `actualites/marque-employeur-industrielle-attirer-directeurs-site.html` | Enrichie | 290 | 333 |
| `actualites/remunerations-cadres-industriels-2026.html` | Enrichie | 281 | 802 |
| `cabinet-recrutement-aeronautique-mro.html` | Enrichie | 1249 | 1395 |
| `cabinet-recrutement-agroalimentaire.html` | Enrichie | 926 | 1232 |
| `cabinet-recrutement-automobile-rhone-alpes.html` | Enrichie | 1435 | 1586 |
| `cabinet-recrutement-chimie-materiaux.html` | Enrichie | 1021 | 1167 |
| `cabinet-recrutement-fonderie-metallurgie.html` | Enrichie | 887 | 1030 |
| `cabinet-recrutement-nucleaire-energie.html` | Enrichie | 1427 | 1580 |
| `cabinet-recrutement-pharma-cdmo.html` | Enrichie | 1128 | 1278 |
| `cabinet-recrutement-plasturgie-decolletage.html` | Enrichie | 950 | 1096 |
| `chasseur-de-tete-industrie.html` | Enrichie | 917 | 1386 |
| `en/hiring-executives-in-france.html` | Enrichie | 622 | 924 |
| `index.html` | Enrichie | 656 | 858 |
| `postes-industrie.html` | Enrichie | 642 | 1036 |
| `recrutement-cadres-industriels.html` | Enrichie | 740 | 898 |
| `recrutement-daf-industrie.html` | Enrichie | 721 | 1167 |
| `recrutement-directeur-general-industrie.html` | Enrichie | 629 | 1180 |
| `recrutement-directeur-industriel.html` | Enrichie | 709 | 868 |
| `recrutement-directeur-qualite-industrie.html` | Enrichie | 705 | 961 |
| `recrutement-directeur-supply-chain-industrie.html` | Enrichie | 713 | 856 |
| `recrutement-directeur-usine-industrie.html` | Enrichie | 791 | 1090 |
| `recrutement-drh-industrie.html` | Enrichie | 742 | 883 |
| `recrutement-fonctions-support-industrie.html` | Enrichie | 708 | 852 |
| `actualites/directeur-site-nucleaire-marche-tension.html` | Balises / maillage | 359 | 398 |
| `actualites/fonderie-metallurgie-directeurs-site.html` | Balises / maillage | 307 | 345 |
| `actualites/management-transition-aeronautique-cadence.html` | Balises / maillage | 336 | 375 |
| `actualites/management-transition-industriel-quand-y-recourir.html` | Balises / maillage | 344 | 383 |
| `cabinet-recrutement-industrie-var-toulon.html` | Balises / maillage | 1363 | 1364 |
| `contact.html` | Balises / maillage | 114 | 114 |
| `en/executive-search-france.html` | Balises / maillage | 704 | 704 |

## 5. Mentions [À VALIDER] : arbitrages du 4 octobre 2026

Toutes les mentions ont été traitées selon vos consignes ; il ne reste **aucune** mention `[À VALIDER]` sur le site.

| Sujet | Décision | Ce qui a été fait |
|---|---|---|
| Délais « premiers profils sous environ 10 jours, mission en 6 à 10 semaines » (7 pages de fonction, FAQ et données structurées) | Pas de délai chiffré | Remplacé par : « Le calendrier est fixé avec vous lors du cadrage de la mission. » |
| Management de transition : délai de prise de fonction et modèle tarifaire | Rien en ligne | Questions de FAQ correspondantes, paragraphe tarifaire et ligne « prise de fonction » du tableau comparatif supprimés. |
| Pourquoi Alveris : employeurs précédents, holding, formation | Rien en ligne | Mentions et paragraphe « Formation » supprimés. Le parcours reste : 17 ans de recrutement et RH en industrie, DRH d'une holding multi-sociétés, secteurs automobile, agroalimentaire, matériaux réfractaires, énergie. |
| Chiffres Apec par fonction | Chiffres certifiés uniquement | Réintégrés le 4 octobre 2026 à partir du relevé fourni (étude Apec 2025 et baromètre 2025), avec la page de chaque chiffre (voir 7.2). |
| « Honoraires au succès », 40 % au lancement, solde à la signature | Ne pas détailler sur les pages créées ou enrichies ; page Honoraires existante inchangée | Retirés des pages de service, hubs, accueil et articles. La page `actualites/cout-cabinet-executive-search-industrie.html` a été restaurée à l'identique (grille au succès, échéancier 40 % / 60 %). |
| Réponse sous 24 h (formulaire de contact) | Validé | Conservé sur `contact.html`. |
| `etudes-de-cas.html` | En attente | Champs `[À COMPLÉTER]`, page en noindex (voir section 8). |

## 6. Affirmations déjà en ligne qui mériteraient votre confirmation

Je ne les ai pas modifiées (sauf mention contraire), car elles existaient avant la mission et relèvent de vos engagements commerciaux :

| Page | Affirmation | Action |
|---|---|---|
| `contact.html` | « Réponse sous 24h » au formulaire | **Validé le 4 octobre 2026.** |
| `index.html` | « Nous qualifions votre besoin en 20 minutes » | À confirmer. Mes appels à l'action parlent de « quinze minutes » pour exposer un besoin, ce qui n'est pas une promesse de délai ; à harmoniser si vous préférez 20. |
| `actualites/cout-cabinet-executive-search-industrie.html` | Garantie 6 mois « quand le standard du marché est de trois mois » ; « suivi hebdomadaire jusqu'à l'intégration » | Conservés. « Grille au succès » et échéancier 40/60 **retirés** le 4 octobre 2026. |
| `cabinet-recrutement-industrie-var-toulon.html` | « Briefing sur site, systématiquement », « nous nous déplaçons sur site », « suivi hebdomadaire », rencontres en face à face | Cohérent avec votre implantation dans le Var ; à confirmer. |
| Pages filières (aéronautique, nucléaire, pharma, chimie, plasturgie) et Var | Chiffres de marché sourcés en bas de page | Non modifiés. Les sources citées sont à jour à la date de rédaction de ces pages. |
| `index.html` (données FAQ) | « 70 % des profils expérimentés ne répondent pas aux annonces publiées » (non sourcé) | **Retiré.** La FAQ de l'accueil est désormais visible et alignée sur ses données structurées. |
| `index.html` (données FAQ) | « Honoraires sur devis » | **Remplacé** par la grille publiée (à partir de 18 %). |
| Pages régionales | « Missions en cours sur Lyon et sa région », « sur le pourtour méditerranéen », « nos consultantes se déplacent sur site pour chaque mission » | **Retirés.** |

## 7. Points bloquants et décisions prises seule

### 7.1 Branches

Le travail a été fait sur la branche `seo-mandats`, comme demandé. L'environnement de travail impose aussi une branche technique, `claude/new-session-6ax34l`, sur laquelle les mêmes commits ont été poussés. Les deux branches sont identiques ; `main` n'a pas été touchée. La branche technique peut être supprimée après validation.

### 7.2 Chiffres Apec

Les premiers chiffres Apec venaient de résumés de recherche web et non du document de l'Apec ; ils ont été retirés. Le relevé que vous avez fourni le 4 octobre 2026 a d'ailleurs montré qu'ils étaient faux : « 66 k€, 46 à 105 k€ » correspond à la direction des achats, pas au pilotage de la production.

Les chiffres désormais en ligne viennent exclusivement de ce relevé, avec la page du document Apec :

- `actualites/remunerations-cadres-industriels-2026.html` : tableau de 11 familles (médiane, fourchette des 80 %, part avec variable, médiane dans le secteur Industrie), étude « Les rémunérations des cadres dans 111 familles de métiers », édition 2025, pp. 1, 6, 42, 45, 83, 97, 99, 100, 102, 103, 106 ; baromètre 2025, pp. 1, 6 et 11.
- `actualites/recruter-directeur-site-industriel.html` : direction industrielle, p. 97.
- `actualites/recruter-directeur-qhse-industrie.html` : HSE, p. 103.

### 7.3 Honoraires

La page Honoraires existante est restaurée telle qu'elle était, avec la grille au succès et l'échéancier 40 % au lancement, 60 % à la signature. Les autres pages ne détaillent pas le mode de paiement et renvoient vers elle. L'article `choisir-cabinet-recrutement-industriel.html` présente de façon générale la différence entre mandat exclusif et mise en concurrence de plusieurs cabinets, et cite la fourchette de marché de 12 % à 30 % déjà présente sur la page Honoraires (source : enquête Adeis RH).

### 7.4 Données factuelles sur les bassins industriels

Les pages régionales citent des sites et organismes publics (raffinerie de Feyzin, plateformes de Pont-de-Claix, Jarrie, Chalampé, Carling Saint-Avold, Fos-sur-Mer, Lavéra, La Mède, Bazancourt-Pomacle ; centrales du Bugey, Tricastin, Cruas-Meysse, Cattenom ; usine de combustible de Romans-sur-Isère ; Airbus Helicopters à Marignane ; CEA Cadarache et ITER ; Naval Group à Toulon ; usines de Mulhouse et de Trémery ; pôles Axelera et CIMES ; SNDEC à Cluses). Ce sont des faits publics, sans chiffre ; une relecture de votre part reste utile. En vérifiant les cibles de netlinking, j'ai constaté que le pôle Mont-Blanc Industries a fusionné dans CIMES : la page Lyon le mentionne ainsi.

### 7.5 Structure et charte

- La police du site est DM Sans (et non Outfit comme indiqué dans le cahier des charges) : je l'ai conservée pour rester cohérente avec l'existant.
- Aucune URL existante n'a été modifiée : **aucune redirection n'est nécessaire**.
- `regions-industrie.html` reste hors du menu (règle de `ARCHITECTURE.md` : moins de 8 régions), mais elle est désormais liée depuis le fil d'Ariane de chaque page régionale, depuis les hubs et depuis l'accueil.
- Les fils d'Ariane des pages de fonction, filière et région passent maintenant par leur hub (Accueil / Expertises / page).
- Le H1 de la page qualité devient « Recrutement d'un Directeur Qualité et QHSE industrie » pour porter la requête « cabinet recrutement directeur QHSE » sans créer de nouvelle page.
- Le title de la page Postes ne parle plus de postes « à pourvoir » ou « ouverts », puisque la page précise que les mandats en cours ne sont jamais publiés.
- L'accueil a reçu une FAQ visible (en français et en anglais via le sélecteur de langue), nécessaire pour que ses données `FAQPage` soient conformes aux règles de Google.
- Le texte de `pourquoi-alveris.html` reste à la première personne, comme l'original ; le cabinet est désigné par « nous » et rien n'indique sa taille.

### 7.6 Non traité ou partiellement traité

- **Neuf anciens articles restent sous 600 mots** (330 à 430 mots). Le cahier des charges ne demandait pas leur réécriture ; ils ont reçu titles, metas, signature, maillage. Les enrichir est la prochaine étape la plus rentable.
- **Images** : recompression JPEG sans conversion en WebP ni versions responsives (`srcset`), qui demanderaient de modifier toutes les pages. Plusieurs articles et l'accueil chargent encore des images depuis images.unsplash.com.
- **LinkedIn Insight Tag** : l'identifiant est vide dans `assets/tracking-config.js`, le tag ne se déclenche donc jamais. GA4 fonctionne et ne se charge qu'après consentement (testé).
- **Performance mobile** : contrôlée en 375 px (aucun débordement horizontal sur les 53 pages), sans mesure Lighthouse, non disponible dans l'environnement.

### 7.7 Responsive et charte graphique

Contrôle automatique de toutes les pages (53) à 375 px (mobile), 768 px (tablette) et 1 280 px (ordinateur) : aucun débordement horizontal. Les nouveaux éléments (titres H3, encadrés d'appel à l'action, encadré auteur, blocs des hubs, études de cas) utilisent uniquement les variables de couleur et de police de la feuille de style commune : noir, crème, sable et or, Cormorant Garamond pour les titres, DM Sans pour le texte, comme le reste du site.

### 7.8 Formulations de conversion proposées, non publiées

Conformément à la règle 3, ces formulations ne sont pas en ligne. À valider si elles correspondent à votre fonctionnement :

- « Réponse sous 24 h à votre demande » à côté des boutons de contact, puisque cet engagement est validé pour le formulaire.
- Bouton de contact unique sur toutes les pages : « Exposer votre besoin en 15 minutes ».

## 8. Études de cas : informations attendues

Le gabarit `etudes-de-cas.html` est en `noindex`, hors sitemap et hors menu. Pour chaque cas réel (idéalement 3 à 6, couvrant vos fonctions et régions prioritaires), j'ai besoin de :

1. **Fonction recrutée** (ex. directeur de site, directeur QHSE, DAF).
2. **Filière** (ex. chimie, agroalimentaire, automobile).
3. **Région ou bassin** (ex. vallée de la chimie, Var, Alsace), au niveau de précision que vous jugez compatible avec la confidentialité.
4. **Type d'entreprise** (ETI familiale, filiale de groupe, PME, LBO) et ordre de grandeur des effectifs si possible.
5. **Contexte** (création de poste, remplacement, succession, redressement, croissance).
6. **Difficulté principale** (rareté, confidentialité, mobilité, habilitation, contre-proposition).
7. **Approche retenue** (cartographie, nombre d'entreprises ciblées, éventuel intérim).
8. **Délai** entre le lancement et la signature, et date de prise de poste.
9. **Résultat** (prise de poste effective, situation à six mois ou plus).
10. **Citation du client**, seulement avec son accord écrit, et **accord de publication** du client pour le cas anonymisé.

Une fois les cas publiés, la page pourra passer en `index`, entrer au sitemap et être liée depuis l'accueil, Pourquoi Alveris et les pages de fonction.

## 9. Après validation et fusion : URL à soumettre dans la Search Console

1. Resoumettre le sitemap : https://alveris.fr/sitemap.xml (Sitemaps > saisir `sitemap.xml` > Envoyer).
2. Demander l'indexation (Inspection de l'URL > Demander une indexation), par ordre de priorité :

**Nouvelles pages**
- https://alveris.fr/actualites/recruter-directeur-site-industriel.html
- https://alveris.fr/actualites/choisir-cabinet-recrutement-industriel.html
- https://alveris.fr/actualites/recruter-directeur-qhse-industrie.html
- https://alveris.fr/actualites/recruter-directeur-usine-periode-crise.html

**Pages prioritaires réécrites ou enrichies**
- https://alveris.fr/recrutement-directeur-general-industrie.html
- https://alveris.fr/expertises-industrie.html
- https://alveris.fr/cabinet-recrutement-industrie-paca.html
- https://alveris.fr/recrutement-daf-industrie.html
- https://alveris.fr/chasseur-de-tete-industrie.html
- https://alveris.fr/cabinet-recrutement-agroalimentaire.html
- https://alveris.fr/en/hiring-executives-in-france.html

**Autres pages réécrites**
- https://alveris.fr/cabinet-recrutement-industrie-lyon.html
- https://alveris.fr/management-transition-industrie.html
- https://alveris.fr/recrutement-directeur-usine-industrie.html
- https://alveris.fr/recrutement-directeur-qualite-industrie.html
- https://alveris.fr/regions-industrie.html
- https://alveris.fr/filieres-industrie.html
- https://alveris.fr/cabinet-recrutement-industrie-grand-est.html
- https://alveris.fr/cabinet-recrutement-industrie-paris.html
- https://alveris.fr/pourquoi-alveris.html
- https://alveris.fr/postes-industrie.html
- https://alveris.fr/actualites/remunerations-cadres-industriels-2026.html
- https://alveris.fr/actualites/
- https://alveris.fr/

La Search Console limite le nombre de demandes d'indexation par jour : étaler sur deux ou trois jours si nécessaire. Les autres pages seront recrawlées via le sitemap.
