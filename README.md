# Site MUSIVA

Site vitrine de **MUSIVA** (anciennement CCFA — Chikhi Conseil Formation Audit),
SASU basée au 12 rue du Génie, 82000 Montauban.

- **Production** : https://musiva.fr
- **Hébergement** : GitHub Pages (branche `main`, racine du dépôt)
- **Domaine** : OVH → enregistrement dans `CNAME`

## Stack

HTML5 / CSS3 / JavaScript vanilla. Aucun build, aucune dépendance à installer.
Les seules ressources externes sont Google Fonts et le widget Calendly (page Contact).

## Structure

```
index.html               Accueil
a-propos.html            Parcours de Samir Chikhi + timeline
notre-histoire.html      Récit « Du cocon CCFA à l'éclosion MUSIVA »
tarifs.html              Grille tarifaire et packs
contact.html             Formulaire, Calendly, FAQ
mentions-legales.html    Mentions légales (Kbis, RGPD, hébergeur)
espace-pro.html          Portail interne (mot de passe côté client)
404.html                 Page d'erreur
service-*.html           7 pages service
styles.css               Feuille principale (charte MUSIVA)
service-styles.css       Styles propres aux pages service
script.js                Slider, menu mobile, FAQ, compteurs
images/                  Logo, emblème, favicons, portrait
CNAME · robots.txt · sitemap.xml
```

## Charte graphique

Palette dérivée du logo (mosaïque *opus musivum*) :

| Rôle | Variable CSS | Valeur |
|---|---|---|
| Bleu nuit (wordmark) | `--primary-color` | `#12273d` |
| Bleu moyen | `--secondary-color` | `#2e5c87` |
| Or (arc + baseline) | `--accent-color` | `#b78636` |
| Tesselle sarcelle | `--tessera-teal` | `#1f7a80` |
| Tesselle terracotta | `--tessera-terracotta` | `#c0562c` |
| Tesselle ocre | `--tessera-ocre` | `#b87333` |
| Tesselle sable | `--tessera-sand` | `#d9a441` |
| Tesselle olive | `--tessera-olive` | `#6e8b4a` |
| Tesselle pierre | `--tessera-stone` | `#8a9099` |
| Fond crème | `--bg-light` | `#faf7f0` |

Typographie : Montserrat (titres) + Open Sans (texte).
Signature : *Assembler les compétences, créer du sens*.

## Développement local

```bash
npx --yes http-server . -p 5173 -c-1
```

Puis ouvrir http://localhost:5173.

## Déploiement

Tout push sur `main` déclenche la publication GitHub Pages.
Le fichier `CNAME` doit rester à la racine : le supprimer casse le domaine personnalisé.

## Points ouverts

- `contact@musiva.fr` : redirection e-mail à créer côté OVH.
- Formulaire de contact : back-end à raccorder (Formspree ou équivalent).
- Numéro de déclaration d'activité de formation et TVA intracommunautaire à ajouter
  dans `mentions-legales.html` si applicable.
- Mot de passe de `espace-pro.html` en clair dans le JS : protection dissuasive
  uniquement, ne convient pas à des documents confidentiels.

---

© 2026 MUSIVA — Tous droits réservés.
