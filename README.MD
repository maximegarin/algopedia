# ALGOPEDIA

Plateforme web de partage de connaissances en informatique — articles, catégories, navigation thématique.

> **Projet de formation — CCP1** (Titre Pro Développeur Web, AFEC Bayonne).
> Premier travail sur le **rendu dynamique de données** : les contenus sont chargés depuis des fichiers JSON locaux faisant office de "faux backend", puis injectés dans le DOM via des modules JavaScript. Conservé volontairement pour montrer ma progression d'apprentissage.

[![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6_modules-F7DF1E?logo=javascript&logoColor=black)](#)
[![JSON](https://img.shields.io/badge/data-JSON-lightgrey)](#)

---

## Ce que le projet démontre

À ce stade de la formation, l'objectif était de quitter le HTML statique pour aller vers une page **alimentée par des données** :

- **Données externalisées en JSON** (`data/`) → séparation contenu / présentation
- **Chargement asynchrone** via `fetch` → premiers pas avec les données dynamiques
- **Architecture en modules ES6** → un module par composant d'interface
- **Rendu DOM par composition** → chaque module construit et injecte son fragment

C'est l'étape "avant le vrai backend" : comprendre comment une page se construit à partir de données plutôt que d'être codée en dur.

---

## Stack

| Couche | Choix |
| --- | --- |
| Structure | HTML5 (conteneurs vides remplis dynamiquement) |
| Style | CSS3 vanilla |
| Logique | JavaScript ES6 (modules natifs, `type="module"`) |
| Données | Fichiers JSON locaux (faux backend) chargés via `fetch` |

Aucune dépendance, aucun build.

---

## Architecture

```
.
├── index.html                    Conteneurs vides (#navbar-top, #hero, #liste-articles-recents, #footer…)
├── public/
│   └── app.js                    Point d'entrée : importe les modules, orchestre le rendu au DOMContentLoaded
├── modules/
│   ├── navbar-top.js             Rendu de la navigation haute
│   ├── navbar-bottom.js          Menu construit depuis data/menu.json
│   ├── navbar-bottom-mobile.js   Variante mobile du menu
│   ├── hero.js                   Section d'accueil
│   ├── carrousel.js              Carrousel
│   ├── articles-recents.js       Liste des articles récents (depuis JSON)
│   └── footer.js                 Pied de page
├── data/                         Fichiers JSON = faux backend (menu, articles, catégories)
└── assets/                       Ressources (images, styles)
```

**Principe** : `index.html` ne contient que des conteneurs vides identifiés par `id`. `app.js` lance, au chargement, une séquence de fonctions qui récupèrent les données JSON et remplissent chaque conteneur. Chaque composant vit dans son propre module.

---

## Lancement local

Le `type="module"` + les `fetch` imposent un serveur HTTP (pas de `file://`) :

```bash
python3 -m http.server 8000
# ou : npx serve
```

Puis `http://localhost:8000`.

---

## Limitations (assumées — projet d'apprentissage)

- Faux backend : les données sont des JSON statiques, pas une vraie API
- Pas de persistance ni d'authentification
- CSS desktop-first, responsive partiel

Ces points relèvent du périmètre CCP1 (front-end). La gestion d'un vrai backend, d'une base de données et d'une API REST est traitée dans des projets ultérieurs de la formation (voir [password-manager-api](https://github.com/maximegarin/password-manager-api)).

---

## Place dans mon parcours

| Projet | Stade | Apport |
| --- | --- | --- |
| [LOOMI](https://github.com/maximegarin/loomi) | Tout début de formation | Premier projet : HTML/CSS/JS statique |
| **ALGOPEDIA** | **CCP1** | **Données dynamiques via JSON + modules ES6** |
| [password-manager-api](https://github.com/maximegarin/password-manager-api) | Plus avancé | Vrai backend Node/Express, API REST, 2FA, sécurité |
| [pbd-annuaire](https://github.com/maximegarin/pbd-annuaire) | En autonomie / production | WordPress/PHP, perf, RGPD, livré pour un vrai client |

---

## Auteur

**Maxime Garin** — [github.com/maximegarin](https://github.com/maximegarin)

Deuxième projet réalisé pendant ma formation Titre Pro Développeur Web (AFEC Bayonne, 2024–2026).
