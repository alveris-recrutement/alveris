/* ============================================================
   ALVERIS — Bandeau de consentement cookies (RGPD / CNIL)
   ============================================================
   - Charge assets/tracking-config.js AVANT ce script (il lit
     window.ALVERIS_TRACKING pour les identifiants GA4 / LinkedIn).
   - Rien n'est chargé (GA4, LinkedIn Insight Tag) tant que
     l'utilisateur n'a pas donné son consentement pour la
     catégorie correspondante.
   - Choix mémorisé 6 mois (localStorage). Au-delà, le bandeau
     réapparaît.
   - Google Consent Mode v2 : les valeurs par défaut sont posées
     à "denied" avant tout chargement de script.
   - Un lien "Gérer les cookies" est ajouté automatiquement dans
     le footer de chaque page qui inclut ce script.
   ============================================================ */
(function(){
  'use strict';

  var CONFIG = window.ALVERIS_TRACKING || {};
  var GA4_ID = CONFIG.GA4_MEASUREMENT_ID || '';
  var LI_ID = CONFIG.LINKEDIN_PARTNER_ID || '';
  var STORAGE_KEY = 'alveris_cookie_consent';
  var SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;
  var lang = (document.documentElement.lang === 'en') ? 'en' : 'fr';

  var T = {
    fr: {
      text: "Nous utilisons des cookies pour mesurer l’audience du site et, si vous l’acceptez, pour le suivi publicitaire LinkedIn. Aucun cookie non essentiel n’est déposé sans votre accord.",
      accept: "Tout accepter",
      reject: "Tout refuser",
      customize: "Personnaliser",
      save: "Enregistrer mes choix",
      backLink: "← Retour",
      necessary: "Cookies nécessaires",
      necessaryDesc: "Indispensables au fonctionnement du site (navigation, sécurité). Toujours actifs.",
      analytics: "Mesure d’audience",
      analyticsDesc: "Google Analytics — nous aide à comprendre l’usage du site, de façon anonymisée.",
      linkedin: "LinkedIn",
      linkedinDesc: "Mesure l’efficacité de nos campagnes LinkedIn.",
      alwaysOn: "Toujours actif",
      manage: "Gérer les cookies"
    },
    en: {
      text: "We use cookies to measure site traffic and, if you agree, for LinkedIn ad tracking. No non-essential cookie is set without your consent.",
      accept: "Accept all",
      reject: "Reject all",
      customize: "Customize",
      save: "Save my choices",
      backLink: "← Back",
      necessary: "Necessary cookies",
      necessaryDesc: "Required for the site to work (navigation, security). Always active.",
      analytics: "Audience measurement",
      analyticsDesc: "Google Analytics — helps us understand site usage, anonymized.",
      linkedin: "LinkedIn",
      linkedinDesc: "Measures the effectiveness of our LinkedIn campaigns.",
      alwaysOn: "Always active",
      manage: "Manage cookies"
    }
  };
  var t = T[lang];

  /* ---------- Stockage du consentement ---------- */
  function readConsent(){
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      var data = JSON.parse(raw);
      if(!data || !data.ts || (Date.now() - data.ts) > SIX_MONTHS_MS) return null;
      return data;
    } catch(e){ return null; }
  }
  function writeConsent(analytics, linkedin){
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: !!analytics, linkedin: !!linkedin, ts: Date.now() }));
    } catch(e){}
  }

  function deleteCookie(name){
    var base = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    document.cookie = base;
    document.cookie = base + ' domain=' + location.hostname + ';';
    document.cookie = base + ' domain=.' + location.hostname + ';';
  }
  function purgeAnalyticsCookies(){
    document.cookie.split(';').forEach(function(c){
      var name = c.split('=')[0].trim();
      if(/^_ga/.test(name) || name === '_gid') deleteCookie(name);
    });
  }

  /* ---------- Google Consent Mode v2 (valeurs par défaut : refusé) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });

  var gaLoaded = false, liLoaded = false;

  function loadGA(){
    if(gaLoaded || !GA4_ID) return;
    gaLoaded = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA4_ID, { anonymize_ip: true });
  }

  function loadLinkedIn(){
    if(liLoaded || !LI_ID) return;
    liLoaded = true;
    window._linkedin_partner_id = LI_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(LI_ID);
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(s);
  }

  function applyConsent(c){
    if(c.analytics){ loadGA(); }
    else { gtag('consent', 'update', { analytics_storage: 'denied' }); purgeAnalyticsCookies(); }
    if(c.linkedin){ loadLinkedIn(); }
  }

  /* ---------- API publique : suivi des conversions ---------- */
  window.AlverisCookies = window.AlverisCookies || {};
  window.AlverisCookies.trackConversion = function(name){
    var c = readConsent();
    if(c && c.analytics){ loadGA(); gtag('event', name); }
  };

  /* Suivi clic téléphone / e-mail, sur tout le site, sans toucher aux pages */
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]') : null;
    if(!a) return;
    var isTel = a.getAttribute('href').indexOf('tel:') === 0;
    window.AlverisCookies.trackConversion(isTel ? 'phone_click' : 'email_click');
  }, true);

  /* ---------- Styles ---------- */
  var css = ""
    + ".alv-ck-wrap{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0a0a0a;color:#fafaf8;border-top:1px solid #2a2a2a;font-family:'DM Sans',Arial,sans-serif;box-shadow:0 -4px 24px rgba(0,0,0,.35);max-height:92vh;overflow-y:auto;}"
    + ".alv-ck-inner{max-width:1200px;margin:0 auto;padding:1.25rem 1.5rem;display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap;}"
    + ".alv-ck-text{flex:1 1 380px;font-size:12.5px;line-height:1.6;color:rgba(250,248,245,.82);margin:0;}"
    + ".alv-ck-actions{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center;}"
    + ".alv-ck-btn{border:none;cursor:pointer;font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:.75rem 1.25rem;border-radius:3px;min-height:44px;white-space:nowrap;}"
    + ".alv-ck-btn-accept{background:#c8a96d;color:#0a0a0a;}"
    + ".alv-ck-btn-accept:hover{background:#b8935a;}"
    + ".alv-ck-btn-reject{background:#fafaf8;color:#0a0a0a;border:1px solid #fafaf8;}"
    + ".alv-ck-btn-reject:hover{background:#e3e0d6;border-color:#e3e0d6;}"
    + ".alv-ck-btn-customize{background:transparent;color:#c8a96d;border:1px solid rgba(200,169,109,.5);}"
    + ".alv-ck-btn-customize:hover{background:rgba(200,169,109,.1);}"
    + ".alv-ck-panel{max-width:1200px;margin:0 auto;padding:0 1.5rem 1.25rem;}"
    + ".alv-ck-row{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start;padding:.9rem 0;border-top:1px solid rgba(255,255,255,.1);}"
    + ".alv-ck-row-title{font-size:12.5px;font-weight:500;color:#fafaf8;margin-bottom:.25rem;}"
    + ".alv-ck-row-desc{font-size:11.5px;color:rgba(250,248,245,.6);line-height:1.5;max-width:520px;}"
    + ".alv-ck-toggle{position:relative;display:inline-block;width:38px;height:22px;flex-shrink:0;}"
    + ".alv-ck-toggle input{opacity:0;width:0;height:0;}"
    + ".alv-ck-slider{position:absolute;inset:0;background:rgba(255,255,255,.2);border-radius:22px;cursor:pointer;transition:background .2s;}"
    + ".alv-ck-slider:before{content:'';position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .2s;}"
    + ".alv-ck-toggle input:checked + .alv-ck-slider{background:#c8a96d;}"
    + ".alv-ck-toggle input:checked + .alv-ck-slider:before{transform:translateX(16px);}"
    + ".alv-ck-toggle input:focus-visible + .alv-ck-slider{outline:2px solid #c8a96d;outline-offset:2px;}"
    + ".alv-ck-always{font-size:10.5px;color:rgba(250,248,245,.45);text-transform:uppercase;letter-spacing:.06em;padding-top:2px;}"
    + ".alv-ck-save-row{display:flex;justify-content:flex-end;gap:.6rem;margin-top:1rem;flex-wrap:wrap;}"
    + ".alv-ck-btn:focus-visible{outline:2px solid #c8a96d;outline-offset:2px;}"
    + "@media(max-width:680px){.alv-ck-inner{padding:1rem;}.alv-ck-actions{width:100%;}.alv-ck-btn{flex:1 1 auto;text-align:center;}.alv-ck-btn-reject{order:1;}.alv-ck-btn-accept{order:2;}.alv-ck-btn-customize{order:3;flex-basis:100%;}}"
    + ".alv-ck-manage-link{cursor:pointer;background:none;border:none;padding:0;font:inherit;color:inherit;text-decoration:none;}";
  var styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ---------- Construction du bandeau ---------- */
  var wrap = null, checkAnalytics = null, checkLinkedin = null, panelEl = null;

  function buildBanner(){
    wrap = document.createElement('div');
    wrap.className = 'alv-ck-wrap';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', lang === 'en' ? 'Cookie consent' : 'Consentement aux cookies');

    var inner = document.createElement('div');
    inner.className = 'alv-ck-inner';

    var p = document.createElement('p');
    p.className = 'alv-ck-text';
    p.textContent = t.text;

    var actions = document.createElement('div');
    actions.className = 'alv-ck-actions';

    var bReject = mkBtn(t.reject, 'alv-ck-btn-reject', function(){ finish(false, false); });
    var bCustom = mkBtn(t.customize, 'alv-ck-btn-customize', function(){ togglePanel(); });
    var bAccept = mkBtn(t.accept, 'alv-ck-btn-accept', function(){ finish(true, true); });

    actions.appendChild(bReject);
    actions.appendChild(bCustom);
    actions.appendChild(bAccept);
    inner.appendChild(p);
    inner.appendChild(actions);
    wrap.appendChild(inner);

    panelEl = document.createElement('div');
    panelEl.className = 'alv-ck-panel';
    panelEl.style.display = 'none';
    panelEl.appendChild(mkRow(t.necessary, t.necessaryDesc, null, true));
    checkAnalytics = mkToggle(t.analytics);
    panelEl.appendChild(mkRow(t.analytics, t.analyticsDesc, checkAnalytics));
    checkLinkedin = mkToggle(t.linkedin);
    panelEl.appendChild(mkRow(t.linkedin, t.linkedinDesc, checkLinkedin));

    var saveRow = document.createElement('div');
    saveRow.className = 'alv-ck-save-row';
    var bSave = mkBtn(t.save, 'alv-ck-btn-accept', function(){
      finish(checkAnalytics.checked, checkLinkedin.checked);
    });
    saveRow.appendChild(bSave);
    panelEl.appendChild(saveRow);

    wrap.appendChild(panelEl);
    document.body.appendChild(wrap);
  }

  function mkBtn(label, cls, onClick){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'alv-ck-btn ' + cls;
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  }

  function mkToggle(label){
    var input = document.createElement('input');
    input.type = 'checkbox';
    if(label) input.setAttribute('aria-label', label);
    return input;
  }

  function mkRow(title, desc, toggleInput, alwaysOn){
    var row = document.createElement('div');
    row.className = 'alv-ck-row';
    var left = document.createElement('div');
    var h = document.createElement('div');
    h.className = 'alv-ck-row-title';
    h.textContent = title;
    var d = document.createElement('div');
    d.className = 'alv-ck-row-desc';
    d.textContent = desc;
    left.appendChild(h);
    left.appendChild(d);
    row.appendChild(left);
    if(alwaysOn){
      var span = document.createElement('span');
      span.className = 'alv-ck-always';
      span.textContent = t.alwaysOn;
      row.appendChild(span);
    } else {
      var label = document.createElement('label');
      label.className = 'alv-ck-toggle';
      label.appendChild(toggleInput);
      var slider = document.createElement('span');
      slider.className = 'alv-ck-slider';
      label.appendChild(slider);
      row.appendChild(label);
    }
    return row;
  }

  function togglePanel(){
    panelEl.style.display = (panelEl.style.display === 'none') ? 'block' : 'none';
  }

  function finish(analytics, linkedin){
    writeConsent(analytics, linkedin);
    applyConsent({ analytics: analytics, linkedin: linkedin });
    if(wrap && wrap.parentNode){ wrap.parentNode.removeChild(wrap); }
    wrap = null;
  }

  function showBanner(prefill){
    if(wrap) return;
    buildBanner();
    if(prefill){
      checkAnalytics.checked = !!prefill.analytics;
      checkLinkedin.checked = !!prefill.linkedin;
    }
  }

  /* ---------- Lien "Gérer les cookies" (injecté dans le footer) ---------- */
  window.AlverisCookies.openPreferences = function(){
    var existing = readConsent();
    showBanner(existing || { analytics: false, linkedin: false });
    panelEl.style.display = 'block';
    wrap.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  function injectFooterLink(){
    var footer = document.querySelector('footer');
    if(!footer) return;
    var a = document.createElement('a');
    a.href = '#';
    a.className = 'alv-ck-manage-link';
    a.textContent = t.manage;
    a.addEventListener('click', function(e){ e.preventDefault(); window.AlverisCookies.openPreferences(); });

    var copy = footer.querySelector('.foot-copy');
    if(copy){
      copy.appendChild(document.createTextNode(' · '));
      copy.appendChild(a);
      return;
    }
    var privacyLink = footer.querySelector('a[href*="politique-confidentialite"]');
    if(privacyLink && privacyLink.parentNode){
      privacyLink.insertAdjacentText('afterend', ' · ');
      privacyLink.insertAdjacentElement('afterend', a);
      return;
    }
    var col = document.createElement('div');
    col.style.cssText = 'padding:1rem 4rem;font-size:10px;';
    col.appendChild(a);
    footer.appendChild(col);
  }

  /* ---------- Initialisation ---------- */
  function init(){
    var existing = readConsent();
    if(existing){ applyConsent(existing); } else { showBanner(); }
    injectFooterLink();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
