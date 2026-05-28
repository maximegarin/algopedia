export async function afficherNavbarTop() {
  try {
    const navbarTop = document.getElementById("navbar-top");
    if (!navbarTop) {
      console.error("Élément #navbar-top introuvable dans le DOM.");
      return;
    }

    navbarTop.innerHTML = "";

    const navElement = document.createElement("nav");
    navElement.className = "navbar-top";

    navElement.innerHTML += `
      <div class="zone-gauche">
      
        <a href="index.html">
    <img src="assets/images/algopedia-logo.svg" alt="Logo du site" class="logo">
        </a>

      </div>

      <div class="zone-centre">
        <input type="text" id="filterInput" placeholder="Chercher un article..." class="champRecherche"/>
      </div>

      <div class="zone-droite">
        <button class="bouton-rond bouton-profil" id="bouton-profil">
          <img src="assets/images/user.svg" alt="Icône profil" width="24" height="24">
        </button>

        <button class="bouton-rond bouton-saved" id="bouton-saved">
          <img src="assets/images/bookmark.svg" alt="Icône paramètres" width="24" height="24">
        </button>

        <button class="bouton-rond bouton-activity" id="bouton-activity">
          <img src="assets/images/zap.svg" alt="Icône paramètres" width="24" height="24">
        </button>

        

        <!-- Bouton burger -->
        <button class="bouton-rond bouton-burger" id="bouton-burger">
          <img src="assets/images/align-right.svg" alt="Icône menu" width="24" height="24">
        </button>
      </div>

    
    `;

    navbarTop.appendChild(navElement);
  } catch (error) {
    console.error("Erreur lors du chargement de la navbar :", error);
  }
}
