# Déploiement — alveris.fr sur GitHub Pages

Guide pas à pas, à suivre dans l'ordre. **Tu n'as besoin que d'un terminal** (Terminal sur Mac, PowerShell ou CMD sur Windows) et d'un compte GitHub.

---

## 0. Formulaires Web3Forms — déjà branchés ✅

Tes 4 clés Web3Forms sont **déjà câblées dans le code**, plus rien à remplacer manuellement. Voici le routage en place :

| Formulaire | Clé utilisée | Form name côté Web3Forms |
|---|---|---|
| Newsletter (footer de toutes les pages) | `74a2f1f0-…-c76f1889` | Newsletter |
| Candidature (5 pages d'offres + formulaire `/contact/`) | `299b2f05-…-633d4424` | my first form |
| Contact / besoin recrutement (`/contact/` par défaut) | `572a375c-…-733174b3` | contact recrutement |
| Avis client / candidat (`/contact/` selon sélecteur) | `3ca9d971-…-7bf99e270d49` | Avis |

Sur la page `/contact/`, un mini-script JavaScript change automatiquement la clé d'accès, le sujet et le `from_name` selon le **type de demande** choisi par le visiteur dans le sélecteur (Recrutement client / Candidature spontanée / Avis / Newsletter / Autre). Résultat : un seul formulaire visible, mais 4 destinations Web3Forms distinctes → chaque demande arrive dans la bonne boîte et déclenche la bonne réponse automatique.

### Configuration à vérifier côté Web3Forms (dashboard)
- **Redirection après soumission** : pointer vers `https://alveris.fr/merci/` pour les 4 formulaires (le HTML envoie déjà ce paramètre, mais Web3Forms peut l'overrider depuis le dashboard).
- **Réponses automatiques (auto-reply)** : vérifier qu'elles sont actives sur les 4 formulaires.
- **Honeypot anti-spam** : un champ caché `botcheck` est inclus dans tous les formulaires → activer la protection bot dans Web3Forms.

### Vérification rapide
```bash
grep -rc "REMPLACEZ_PAR_VOTRE_CLE_WEB3FORMS" .
# Doit renvoyer 0 dans tous les fichiers
```

---

## 1. Prérequis (une seule fois)

### a. Avoir un compte GitHub
Si ce n'est pas fait : https://github.com/signup

### b. Installer git
- **Mac** : `git --version` dans le Terminal → s'il ne l'a pas, il proposera d'installer les Command Line Tools
- **Windows** : https://git-scm.com/download/win

### c. Configurer git (une seule fois sur la machine)
```bash
git config --global user.name "Aurélie Stefanowski"
git config --global user.email "stefanowskia@yahoo.com"
```

---

## 2. Créer le dépôt GitHub

1. Va sur https://github.com/new
2. **Repository name** : `alveris.fr` (ou `alveris-site` — peu importe, c'est le nom interne)
3. **Public** (GitHub Pages gratuit = dépôt public)
4. **Ne coche PAS** "Add a README file" (on en a déjà un)
5. Clique **Create repository**
6. Sur la page suivante, copie l'URL qui ressemble à :
   `https://github.com/<TON_USER>/alveris.fr.git`

---

## 3. Pousser le site (première fois)

Ouvre un terminal, puis place-toi dans le dossier du site. Remplace le chemin par l'emplacement réel sur ta machine :

```bash
cd /chemin/vers/alveris-site
```

Puis exécute ces commandes **dans l'ordre** :

```bash
git init
git add .
git commit -m "Initial commit — site alveris.fr v1"
git branch -M main
git remote add origin https://github.com/<TON_USER>/alveris.fr.git
git push -u origin main
```

GitHub va te demander de t'authentifier :
- **Username** : ton pseudo GitHub
- **Password** : **pas ton mot de passe** → un *Personal Access Token*
  - Créer un token : https://github.com/settings/tokens → "Generate new token (classic)" → coche `repo` → copie le token et colle-le comme mot de passe.

---

## 4. Activer GitHub Pages

1. Sur ton dépôt GitHub → onglet **Settings**
2. Menu de gauche → **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main**, dossier **/ (root)**
5. Clique **Save**
6. Attends 1–2 minutes. Le site sera visible sur :
   `https://<TON_USER>.github.io/alveris.fr/`

---

## 5. Brancher le domaine alveris.fr

### a. Côté GitHub
Le fichier `CNAME` est déjà dans le dépôt avec `alveris.fr`. GitHub Pages le détectera automatiquement. Dans **Settings → Pages**, le champ **Custom domain** devrait afficher `alveris.fr`.

Coche **Enforce HTTPS** dès que possible (peut prendre 1 à 24h pour s'activer — GitHub provisionne le certificat Let's Encrypt).

### b. Côté registrar (OVH, Gandi, Namecheap, etc.)
Connecte-toi à ton registrar de domaine et crée les enregistrements DNS suivants :

**Pour le domaine racine (alveris.fr) — 4 enregistrements A :**

| Type | Nom | Valeur          |
|------|-----|-----------------|
| A    | @   | 185.199.108.153 |
| A    | @   | 185.199.109.153 |
| A    | @   | 185.199.110.153 |
| A    | @   | 185.199.111.153 |

**Pour le sous-domaine www (optionnel mais recommandé) :**

| Type  | Nom | Valeur                   |
|-------|-----|--------------------------|
| CNAME | www | `<TON_USER>.github.io.`  |

Propagation DNS : entre 10 minutes et 24h.

### c. Vérifier
```bash
dig alveris.fr +short
# doit renvoyer les 4 IP GitHub
```

Puis ouvre https://alveris.fr dans un navigateur.

---

## 6. Publier une mise à jour (workflow récurrent)

À chaque modification :

```bash
cd /chemin/vers/alveris-site
git add .
git commit -m "Description de la modification"
git push
```

Le site est en ligne dans les 30 secondes à 2 minutes.

---

## 7. Soumettre le site à Google

Une fois que `alveris.fr` est en ligne et que HTTPS fonctionne :

1. **Google Search Console** : https://search.google.com/search-console
   - Ajoute la propriété **Domain** → `alveris.fr`
   - Valide via un enregistrement TXT chez ton registrar
   - Une fois validée → **Sitemaps** → soumets `https://alveris.fr/sitemap.xml`
   - Lance un **test en direct** de `https://alveris.fr/` et clique **Demander une indexation**

2. **Bing Webmaster Tools** (bonus) : https://www.bing.com/webmasters → même procédure

3. **Vérifier les résultats riches** (offres d'emploi + articles) :
   - https://search.google.com/test/rich-results
   - Colle `https://alveris.fr/offres-emploi/directeur-financier-luxembourg/` et vérifie que le schéma `JobPosting` est valide

---

## 8. Checklist post-déploiement

- [ ] `https://alveris.fr/` charge correctement
- [ ] HTTPS activé (cadenas dans le navigateur)
- [ ] `www.alveris.fr` redirige vers `alveris.fr` (ou l'inverse, au choix — mais une seule version)
- [ ] `https://alveris.fr/sitemap.xml` s'ouvre
- [ ] `https://alveris.fr/robots.txt` s'ouvre
- [ ] Page 404 testée : `https://alveris.fr/page-inexistante` → montre la 404 personnalisée
- [ ] Les 6 pages secteurs s'ouvrent
- [ ] Les 4 pages villes s'ouvrent
- [ ] Les 5 offres d'emploi s'ouvrent
- [ ] Les 3 articles de blog s'ouvrent
- [ ] Sitemap soumis à Google Search Console
- [ ] Test des résultats riches OK pour au moins 1 offre d'emploi
- [ ] Test formulaire `/contact/` avec type "Recrutement client" → mail reçu sur la boîte "contact recrutement" + auto-reply
- [ ] Test formulaire `/contact/` avec type "Avis client/candidat" → mail sur la boîte "Avis" + auto-reply
- [ ] Test envoi candidature depuis une offre d'emploi → mail sur "my first form" avec le titre du poste dans le sujet
- [ ] Test inscription newsletter depuis le footer → mail sur "Newsletter" + auto-reply
- [ ] Page `/merci/` accessible et redirection après soumission OK sur les 4 cas

---

## Besoin de changer quelque chose ?

- **Erreur de contenu** : édite le `.html` correspondant, `git commit`, `git push`
- **Numéro SIRET / TVA / adresse** à mettre à jour : cherche `[À compléter]` dans `mentions-legales/index.html`
- **Fo