# Projet Pratique : Plateforme de Blog/Forum Dynamique

## Objectif

Vous allez créer une plateforme de blog/forum en intégrant des données JSON dynamiques et en mettant en place un **contrôle d’accès pour un dashboard administrateur**.  
L’objectif est de comprendre la manipulation des données côté front-end, l’affichage dynamique et la gestion des rôles utilisateurs.

---

## 1. Données à intégrer

### a) `categories.json`
- Contient 78 catégories liées à l’informatique, programmation, matériel, IA, web, etc.  
- **Astuce :** utilisez un `<select>` ou un menu pour permettre à l’utilisateur de filtrer les articles par catégorie.

### b) `articles.json`
- Contient 50 articles avec les champs suivants :  
  `id`, `titre`, `contenu`, `image`, `categorie_id`, `date_creation`, `user_id`.
- **Astuce :** utilisez `fetch()` pour charger le JSON et `.forEach()` pour générer dynamiquement les articles dans le DOM.
- **Explication :** chaque article doit être affiché avec son image, titre, contenu résumé, et éventuellement la date.

### c) `users.json`
- Contient les utilisateurs avec les champs : `id`, `nom`, `prenom`, `email`, `avatar`, `role`.
- **Astuce :** stockez temporairement l’utilisateur connecté dans un objet JS pour tester les rôles et accès.
- **Explication :** le rôle (`admin`, `rédacteur`, `user`) déterminera l’accès au dashboard.

---

## 2. Intégration des données

| JSON | Où l’intégrer | Astuce / Explication |
|------|---------------|--------------------|
| categories.json | Menu de filtrage | Générer les options dynamiquement avec `forEach`. |
| articles.json | Section articles | Créer un conteneur `<div>` pour injecter les articles. Limiter le texte si nécessaire avec `.slice()` ou CSS. |
| users.json | Page profil utilisateur | Afficher seulement les informations pertinentes : nom, avatar, articles de l’utilisateur. |

---

## 3. Challenge : Dashboard Admin

### Objectif
- Créer un fichier `admin_dashboard.html`.
- Afficher uniquement la **liste complète des utilisateurs** pour les administrateurs.
- Interdire l’accès si le rôle n’est pas `admin`.

### Astuces
- Vérifier le rôle de l’utilisateur avant d’afficher le contenu.
- Si l’utilisateur n’est pas admin, afficher un message ou rediriger vers la page principale.

### Exemple de condition d’accès simple

```javascript
const currentUser = { id: 2, nom: "Nguyen", role: "rédacteur" };

if(currentUser.role !== "admin") {
  document.body.innerHTML = "<p>Accès interdit : vous n'êtes pas administrateur.</p>";
} else {
  // afficher le dashboard
  console.log("Bienvenue, administrateur !");
}
