// modules/hero.js
export function afficherHero() {
  const hero = document.getElementById("hero");

  if (!hero) {
    console.error("Élément #hero introuvable dans le DOM.");
    return;
  }

  
  hero.innerHTML += `
    <section class="hero-section">
      <div class="hero-contenu">
        <h1>Bienvenue sur Algopedia</h1>
        <p>Partagez et découvrez des connaissances en informatique : tutoriels, projets, astuces et plus encore !</p>
        <a href="#conteneurArticles" class="hero-bouton">Commencer à explorer</a>
      </div>
      <!--  Carousel -->
        <div class="carousel">
            <div class="slides">
                <div class="slide">
                    <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" alt="" />
                </div>

                <div class="slide">
                    <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="" />
                </div>

                <div class="slide">
                    <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg" alt="" />
                </div>
            </div>
        </div>
    </section>
  `;
}
