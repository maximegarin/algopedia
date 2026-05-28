async function afficherArticles() {

  try {
 
    const reponse = await fetch("./data/articles.json");
   
    if (!reponse.ok) throw new Error("Erreur de chargement du fichier JSON.");

    
    const donnees = await reponse.json();

   
    const conteneur = document.getElementById("conteneurArticles");

    conteneur.innerHTML = "";

    
    donnees.articles.forEach((article) => {
     
      const resume = article.contenu.slice(0, 150);

    
      const carte = document.createElement("div");
      
      carte.className = "carte-article";

      carte.innerHTML += `
        <img src="${articles.image}" alt="${articles.titre}" />
        <h3>${article.titre}</h3>
        <p>${resume}...</p>
        <p class="date-article">🗓️ ${article.date_creation}</p>
        <button class="bouton-voir-plus" data-id="${article.id}">Voir plus</button>
      `;

     
      conteneur.appendChild(carte); 
    });

   

  } catch (erreur) {
    
    console.error(erreur);
    
    const conteneur = document.getElementById("conteneurArticles");
    if (conteneur) conteneur.innerHTML = "<p>Impossible de charger les articles.</p>";
  }
}


afficherArticles();
