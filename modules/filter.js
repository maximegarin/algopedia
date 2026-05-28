// filter.js
export function filterArticles(articles, searchText) {
  // Si l'input est vide, on retourne tous les articles
  if (!searchText) return articles;

  // On met le texte en minuscules pour recherche insensible à la casse
  searchText = searchText.toLowerCase();

  // On filtre les articles selon le titre
  const filtered = articles.filter(a => a.title.toLowerCase().includes(searchText));

  // Si aucun article n'a été trouvé, on retourne un tableau avec un objet spécial
  if (filtered.length === 0) {
    return [{ id: 0, title: "Aucun article trouvé", date: "" }];
  }

  return filtered;
}
