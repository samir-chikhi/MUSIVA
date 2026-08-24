# 📊 Fiche de suivi SEO – MUSIVA.fr

**Dernière mise à jour :** 24 août 2026  
**État :** Phase 1 en cours – Indexation activée

---

## ✅ Fait (Commit c541dcf)

- [x] Sitemap.xml mis à jour (ajout articles de blog + dernière date)
- [x] Service schema ajouté à service-audit.html
- [x] Commit git + push GitHub

## 🔴 Urgent – À faire cette semaine

**Deadline :** Semaine du 26 août 2026

### 1. Google Search Console
- [ ] Créer compte GSC : https://search.google.com/search-console
- [ ] Ajouter propriété `musiva.fr`
- [ ] Vérifier domaine (via DNS TXT chez OVH ou fichier HTML)
- [ ] Soumettre sitemap : `musiva.fr/sitemap.xml`
- [ ] Demander indexation rapide (URL Inspection)

**Temps :** 15-20 min  
**Impact :** Google commence à crawler et indexer le site

### 2. Google My Business
- [ ] Créer/revendiquer profil GMB pour "Le Génie"
- [ ] Adresse : 12 rue du Génie, 82000 Montauban
- [ ] Catégorie : "Tiers-lieu" ou "Espace de coworking"
- [ ] Téléphone, horaires, photos
- [ ] Lier à musiva.fr

**Temps :** 20-30 min  
**Impact :** Apparition en local search + Google Maps

### 3. Vérifier robots.txt en ligne
- [ ] Ouvrir : https://musiva.fr/robots.txt
- [ ] Vérifier l'accès (HTTP 200)
- [ ] Tester dans GSC (Outils → Testeur robots.txt)

**Temps :** 5 min  
**Impact :** Confirme que Google peut crawler

### 4. Vérifier sitemap.xml en ligne
- [ ] Ouvrir : https://musiva.fr/sitemap.xml
- [ ] Vérifier l'accès (HTTP 200)
- [ ] Confirmer que les 25 URLs sont listées

**Temps :** 5 min  
**Impact :** Prépare submission GSC

---

## 🟠 Important – À faire d'ici 2 semaines

### 5. Ajouter Service schema aux autres pages
Pages concernées :
- [ ] service-essms.html
- [ ] service-bilan.html
- [ ] service-ingenierie.html
- [ ] service-numerique.html
- [ ] service-management.html
- [ ] service-territorial.html
- [ ] service-domiciliation.html
- [ ] service-createur.html

**Temps :** 2-3 heures  
**Impact :** Rich snippets pour chaque service (prix, avis, description)

**Template à utiliser :**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MUSIVA - [NOM SERVICE]",
  "description": "[Meta description]",
  "url": "https://musiva.fr/[page].html",
  "telephone": "+33652813822",
  "address": { "@type": "PostalAddress", ... },
  "offers": { "@type": "Offer", "price": "[prix]", ... }
}
```

### 6. Mettre à jour dates lastmod du sitemap
- [ ] À chaque modification = mettre à jour lastmod dans sitemap.xml
- [ ] Format : YYYY-MM-DD

**Automation :** Script pour auto-générer sitemap.xml depuis fichiers du dossier

---

## 📈 Métriques à tracker (GSC)

### Semaine 1-2 (26 août – 7 septembre)
**Cible :** Pages découvertes et crawlées

| Métrique | Cible | Réel |
|----------|-------|------|
| Pages indexées | 15+ | — |
| Pages crawlées | 25+ | — |
| Erreurs d'indexation | 0 | — |
| Impressions (total) | 0-10 | — |

### Semaine 3-4 (8-21 septembre)
**Cible :** Premières impressions et clics

| Métrique | Cible | Réel |
|----------|-------|------|
| Impressions | 50-200 | — |
| Clics | 1-5 | — |
| CTR moyen | 2-5% | — |
| Position moyenne | 20-40 | — |

### Semaine 5-8 (22 sept – 18 oct)
**Cible :** Trafic organique stable

| Métrique | Cible | Réel |
|----------|-------|------|
| Pages vues/jour | 5-20 | — |
| Impressions/jour | 20-50 | — |
| Clics/jour | 2-10 | — |
| Position moyenne | 10-20 | — |

---

## 🎯 Phase 2 – Contenu (Semaines 3-8)

**Calendrier éditorial :** Voir `PLAN_CONTENU_BLOG.md`

Articles à créer :
1. "SaaSpocalypse" (Coûts SaaS OF) — Semaine 3
2. "IA + Qualiopi" (Conformité) — Semaine 4
3. "Commun numérique" (ESS) — Semaine 5
4. "Vos données valent plus" (Analytics) — Semaine 6
5. "N8n en action" (Automation) — Semaine 7
6. "RGPD & formation" (Conformité data) — Semaine 8

**À faire pour chaque article :**
- [ ] Rédaction (1500-2000 mots)
- [ ] Optimisation SEO (titre, h2, liens internes)
- [ ] Ajouter schema Article JSON-LD
- [ ] Upload HTML et lien sitemap.xml
- [ ] Partager LinkedIn + newsletter

**Backlinks strategy :**
- [ ] Partages organiques (LinkedIn + forums)
- [ ] Échanges liens avec partenaires (réseaux OF, ESS, collectivités)
- [ ] Citations locales (Montauban, Occitanie)

---

## 🔧 Checklist technique en cours

### SEO On-Page
- [x] Title/Meta description (pages principales)
- [x] Canonical URLs
- [x] Mobile-friendly (responsive)
- [x] Schema markup (Organization + LocalBusiness)
- [ ] Service schema (7/8 pages restantes)
- [ ] Article schema (articles de blog)
- [ ] BreadcrumbList (pages imbriquées)
- [ ] FAQ schema (si applicable)

### SEO Technique
- [x] robots.txt (correct)
- [x] sitemap.xml (mis à jour)
- [ ] HTTP/HTTPS redirects (vérifier)
- [ ] Core Web Vitals (vérifier dans GSC)
- [ ] Compression images (optimiser)
- [ ] Lazy loading (vérifier)
- [ ] CSS/JS minified (vérifier)

### Indexation
- [x] Google Search Console configurée (À faire)
- [ ] Sitemap soumis (À faire)
- [ ] URL Inspection lancée (À faire)
- [ ] robots.txt testé (À faire)
- [ ] Crawl budget optimisé (À faire)

---

## 📞 Références externes

### Outils
- **Google Search Console :** https://search.google.com/search-console
- **Google My Business :** https://www.google.com/business/
- **Schema Validator :** https://schema.org/validator
- **Mobile Test :** https://search.google.com/test/mobile-friendly
- **Page Speed Insights :** https://pagespeed.web.dev/

### Documentation
- **Google SEO Starter Guide :** https://developers.google.com/search/docs
- **Schema.org :** https://schema.org/
- **Sitemap Protocol :** https://www.sitemaps.org/

---

## 📋 Logs des changements

| Date | Action | Impact | Fichiers |
|------|--------|--------|----------|
| 2026-08-24 | Sitemap + Service schema | +5 articles, +rich snippets | sitemap.xml, service-audit.html |
| 2026-08-24 | Commit c541dcf | Code source mis à jour | GitHub |
| TBD | GSC configurée | Indexation activée | — |
| TBD | GMB créé | Local search | — |
| TBD | 5 articles blog | +trafic organique | — |

---

## 🎯 Résultats attendus (90 jours)

**Semaine 1-4 :** Indexation + premiers impressions  
→ 15+ pages indexées, 50-200 impressions/semaine

**Semaine 5-8 :** Premiers rankings  
→ 5-20 pages vues/jour, position moyenne 10-20

**Semaine 9-12 :** Trafic organique établi  
→ 20-50 pages vues/jour, leads B2B qualifiés issus du SEO

**Année 1 :** Autorité établie  
→ 100+ pages vues/jour, reconnaissabilité sur requêtes Qualiopi/ESSMS/collectivités

---

## 📞 Support & Questions

- Besoin d'aide ? Relire le **Rapport SEO complet**
- Fichiers fournis : sitemap.xml, robots.txt, schema-jsonld.html
- Prochaines actions : Voir section **Urgent – À faire cette semaine**

