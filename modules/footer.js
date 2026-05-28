export async function afficherFooter() {
  try {
    const footer = document.getElementById("footer");
    if (!footer) {
      console.error("Élément #footer introuvable dans le DOM.");
      return;
    }

    footer.innerHTML = "";

    const footerElement = document.createElement("div");
    footerElement.className = "footer";

    footerElement.innerHTML += `
      <div class="container-footer">
        <!-- Logo et slogan -->
        <div class="footer-logo">
          <img src="assets/images/codeshare-logo.svg" alt="CodeShare">
          <span class="footer-slogan">
            Plateforme web de partage de connaissances en informatique
          </span>
        </div>

        <!-- Réseaux sociaux -->
        <div class="footer-social">
          <a href="#"><img src="assets/images/facebook.svg" alt="Facebook"></a>
          <a href="#"><img src="assets/images/twitch.svg" alt="Twitch"></a>
          <a href="#"><img src="assets/images/instagram.svg" alt="Instagram"></a>
        </div>

        <!-- Copyright -->
        <div class="footer-copy">
          <span>&copy; 2025 Algopedia — Pour toi c'est gratuit ma gâtée !</span>
        </div>
      </div>
    `;

    footer.appendChild(footerElement);

  } catch (error) {
    console.error("Erreur lors du chargement du footer :", error);
  }
}
