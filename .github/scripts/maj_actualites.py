#!/usr/bin/env python3
"""Mise à jour automatique des actualités d'alveris.fr.

Lancé par la GitHub Action « Actualités automatiques » à chaque mise en ligne
(ou à la main : python3 .github/scripts/maj_actualites.py depuis la racine).

Ce que fait le script :
1. lit chaque article du dossier actualites/ (titre, résumé, image, rubrique,
   date de publication, temps de lecture) ;
2. régénère la liste complète de actualites/index.html, du plus récent au plus ancien ;
3. régénère le bloc « Actualités RH & Industrie » de la page d'accueil avec les
   trois articles les plus récents ;
4. ajoute au sitemap les articles qui n'y sont pas encore et met à jour les dates
   <lastmod> (date de modification de l'article, sinon date du dernier commit).

Pour publier un nouvel article, il suffit de déposer sa page dans actualites/
avec ses données structurées Article (datePublished). Les balises facultatives
suivantes permettent de choisir le texte et l'image de la vignette :
  <meta name="alveris:resume" content="Résumé court de la vignette">
  <meta name="alveris:vignette" content="/assets/img/mon-image.jpg">
  <meta name="alveris:vignette-alt" content="Description de l'image">
À défaut, le script prend la meta description et l'image og:image.
"""
import html
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

RACINE = Path(__file__).resolve().parents[2]
DOSSIER = RACINE / "actualites"
SITE = "https://alveris.fr"
NB_ACCUEIL = 3

MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
        "août", "septembre", "octobre", "novembre", "décembre"]

DEBUT_ACCUEIL = "<!-- ACTUS-AUTO:ACCUEIL:DEBUT (bloc généré automatiquement, ne pas modifier à la main) -->"
FIN_ACCUEIL = "<!-- ACTUS-AUTO:ACCUEIL:FIN -->"
DEBUT_LISTE = "<!-- ACTUS-AUTO:LISTE:DEBUT (bloc généré automatiquement, ne pas modifier à la main) -->"
FIN_LISTE = "<!-- ACTUS-AUTO:LISTE:FIN -->"

SURVOL = ("onmouseover=\"this.style.borderColor='var(--gold)';this.style.boxShadow='0 4px 16px rgba(0,0,0,.07)'\" "
          "onmouseout=\"this.style.borderColor='var(--light)';this.style.boxShadow='none'\"")
CARTE = ("display:block;text-decoration:none;color:inherit;border:1px solid var(--light);"
         "border-radius:4px;overflow:hidden;background:var(--white);transition:border-color .2s,box-shadow .2s")


def meta(source, nom, attribut="name"):
    m = re.search(r'<meta\s+%s="%s"\s+content="([^"]*)"' % (attribut, re.escape(nom)), source)
    return html.unescape(m.group(1)).strip() if m else ""


def donnees_article(source):
    for bloc in re.findall(r'<script type="application/ld\+json">(.*?)</script>', source, re.S):
        try:
            d = json.loads(bloc)
        except json.JSONDecodeError:
            continue
        for e in d if isinstance(d, list) else [d]:
            t = e.get("@type")
            if t in ("Article", "BlogPosting", "NewsArticle") or (isinstance(t, list) and "Article" in t):
                return e
    return {}


def date_fr(iso):
    a, m, j = (int(x) for x in iso[:10].split("-"))
    return f"{j} {MOIS[m - 1]} {a}"


def git_date(chemin):
    try:
        r = subprocess.run(["git", "log", "-1", "--format=%cs", "--", str(chemin)],
                           cwd=RACINE, capture_output=True, text=True, check=True)
        return r.stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError):
        return ""


def lire_articles():
    articles = []
    for f in sorted(DOSSIER.glob("*.html")):
        if f.name == "index.html":
            continue
        s = f.read_text(encoding="utf-8")
        if re.search(r'<meta name="robots" content="[^"]*noindex', s):
            continue
        d = donnees_article(s)
        publie = (d.get("datePublished") or "")[:10]
        if not publie:
            print(f"! {f.name} ignoré : pas de datePublished dans les données Article", file=sys.stderr)
            continue
        h1 = re.search(r"<h1[^>]*>(.*?)</h1>", s, re.S)
        titre = d.get("headline") or (html.unescape(re.sub("<[^>]+>", "", h1.group(1))).strip() if h1 else f.stem)
        rubrique = re.search(r'text-transform:uppercase;color:var\(--gold\);margin-bottom:\.75rem">([^<]+)<', s)
        lecture = re.search(r"(\d+)\s*min de lecture", s)
        image = meta(s, "alveris:vignette") or meta(s, "og:image", "property") or "/assets/img/hero-accueil.jpg"
        image = image.replace(SITE, "")
        articles.append({
            "url": f"/actualites/{f.name}",
            "fichier": f,
            "titre": titre,
            "resume": meta(s, "alveris:resume") or meta(s, "description"),
            "image": image,
            "alt": meta(s, "alveris:vignette-alt") or titre,
            "rubrique": html.unescape(rubrique.group(1)).strip() if rubrique else "Actualités",
            "publie": publie,
            "modifie": (d.get("dateModified") or publie)[:10],
            "lecture": lecture.group(1) if lecture else "",
        })
    # Du plus récent au plus ancien ; à date égale, on garde l'ordre actuel de la
    # page actualités (un article qui n'y figure pas encore passe devant).
    liste = (DOSSIER / "index.html").read_text(encoding="utf-8")
    ordre = re.findall(r'<a class="news-card" href="([^"]+)"', liste)
    rang = {u: i for i, u in enumerate(ordre)}
    articles.sort(key=lambda a: (a["publie"], -rang.get(a["url"], -1)), reverse=True)
    return articles


def e(texte):
    """Échappe le texte en gardant les apostrophes lisibles."""
    return html.escape(texte, quote=False).replace('"', "&quot;")


def carte_accueil(a):
    return f"""  <a href="{a['url']}" style="{CARTE};" {SURVOL}>
    <img alt="{e(a['alt'])}" src="{e(a['image'])}" width="800" height="160" loading="lazy" class="actu-img-tone" style="width:100%;height:160px;object-fit:cover;display:block;">
    <div style="padding:1.25rem;">
      <div style="font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem;">{e(a['rubrique'])}</div>
      <h3 style="font-family:var(--serif);font-size:1rem;font-weight:400;margin:0 0 .5rem;line-height:1.35;">{e(a['titre'])}</h3>
      <div style="font-size:11px;color:var(--mid);line-height:1.6;">{e(a['resume'])}</div>
      <div style="font-size:10px;color:var(--gold);margin-top:.75rem;font-weight:500;">Lire l'article →</div>
    </div>
  </a>"""


def carte_liste(a):
    lecture = f" · {a['lecture']} min de lecture" if a["lecture"] else ""
    return f"""<a class="news-card" href="{a['url']}" style="{CARTE}" {SURVOL}>
<img src="{e(a['image'])}" alt="{e(a['alt'])}" class="actu-img-tone" style="width:100%;height:180px;object-fit:cover;display:block" width="900" height="180" loading="lazy">
<div style="padding:1.25rem">
<div style="font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem">{e(a['rubrique'])}</div>
<div style="font-family:var(--serif);font-size:1.1rem;font-weight:400;margin-bottom:.6rem;line-height:1.3">{e(a['titre'])}</div>
<div style="font-size:12px;color:var(--mid);line-height:1.6;margin-bottom:.75rem">{e(a['resume'])}</div>
<div style="font-size:11px;color:var(--mid2)"><time datetime="{a['publie']}">{date_fr(a['publie'])}</time>{lecture}</div>
</div>
</a>"""


def remplacer_bloc(chemin, debut, fin, contenu):
    s = chemin.read_text(encoding="utf-8")
    motif = re.compile(re.escape(debut) + r".*?" + re.escape(fin), re.S)
    if not motif.search(s):
        sys.exit(f"Repères {debut[:30]}… introuvables dans {chemin.name}")
    nouveau = motif.sub(lambda _: f"{debut}\n{contenu}\n{fin}", s)
    if nouveau != s:
        chemin.write_text(nouveau, encoding="utf-8")
        return True
    return False


def maj_sitemap(articles):
    chemin = RACINE / "sitemap.xml"
    s = chemin.read_text(encoding="utf-8")
    dates_articles = {SITE + a["url"]: a["modifie"] for a in articles}

    # Articles absents du sitemap
    for a in articles:
        loc = SITE + a["url"]
        if f"<loc>{loc}</loc>" not in s:
            bloc = (f"<url>\n<loc>{loc}</loc>\n<lastmod>{a['modifie']}</lastmod>\n"
                    f"<changefreq>monthly</changefreq>\n<priority>0.7</priority>\n</url>\n")
            s = s.replace("</urlset>", bloc + "</urlset>")

    def lastmod(m):
        loc = m.group(1)
        if loc in dates_articles:
            d = dates_articles[loc]
        else:
            rel = loc.replace(SITE + "/", "") or "index.html"
            if rel.endswith("/"):
                rel += "index.html"
            d = git_date(RACINE / rel) or m.group(2)
        return f"<loc>{loc}</loc>\n<lastmod>{d}</lastmod>"

    nouveau = re.sub(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", lastmod, s)
    # La page d'accueil et la page actualités changent dès qu'un article paraît.
    plus_recent = max([a["publie"] for a in articles] + [git_date(RACINE / "index.html") or ""])
    for page in (SITE + "/", SITE + "/actualites/"):
        nouveau = re.sub(r"(<loc>%s</loc>\s*<lastmod>)([^<]+)" % re.escape(page),
                         lambda m: m.group(1) + max(m.group(2), plus_recent), nouveau)
    if nouveau != chemin.read_text(encoding="utf-8"):
        chemin.write_text(nouveau, encoding="utf-8")
        return True
    return False


def main():
    articles = lire_articles()
    if not articles:
        sys.exit("Aucun article trouvé.")
    a = remplacer_bloc(RACINE / "index.html", DEBUT_ACCUEIL, FIN_ACCUEIL,
                       "\n".join(carte_accueil(x) for x in articles[:NB_ACCUEIL]))
    b = remplacer_bloc(DOSSIER / "index.html", DEBUT_LISTE, FIN_LISTE,
                       "\n".join(carte_liste(x) for x in articles))
    c = maj_sitemap(articles)
    print(f"{len(articles)} articles. Accueil : {', '.join(x['url'] for x in articles[:NB_ACCUEIL])}")
    print(f"Modifié : accueil={a} liste={b} sitemap={c}")


if __name__ == "__main__":
    main()
