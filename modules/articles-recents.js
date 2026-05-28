export async function afficheArticlesRecents() {
  try {
    const res = await fetch("./data/articles.json"); // await attend la connexion   res = resultats
    if (!res.ok) throw new Error("Erreur lors du chargement des données articles.json");

    const data = await res.json();
    const container = document.getElementById("liste-articles-recents");
    container.innerHTML = ""; 

    const titre = document.createElement("h2");
    titre.textContent = "Articles récents";
    container.appendChild(titre);

    const grille = document.createElement("div");
    grille.className = "grille-articles";
    container.appendChild(grille);

    const articlesRecents = data.articles
      .sort((a, b) => new Date(b.date_creation) - new Date(a.date_creation))
      .slice(0, 4);

    articlesRecents.forEach((article) => {
      const card = document.createElement("div");
      card.className = "carte-article";

      card.innerHTML += `
        <img src="${article.image}" alt="${article.titre}">
        <div class="card-content">
          <h4>${article.titre}</h4>
          <p>${article.contenu.substring(0, 120)}...</p>
          <a href="./article.html?id=${article.id}">Lire la suite</a>
        </div>
      `;
      grille.appendChild(card);
    });
  } catch (error) {
    console.error("Erreur affichage articles récents :", error);
  }
}

