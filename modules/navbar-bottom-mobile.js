export function activerScrollFadingNavbarBottom() {
  try {
    const navbarBottom = document.querySelector(".navbar-bottom");
    const navbarTop = document.querySelector(".navbar-top");
    const menus = document.querySelector(".menus");

    if (!navbarBottom || !menus || !navbarTop) {
      console.error("Éléments introuvables dans le DOM.");
      return;
    }

    const ajusterPosition = () => {
      if (window.innerWidth <= 768) {
        const hauteurNavbarTop = navbarTop.getBoundingClientRect().height;
        navbarBottom.style.top = `${hauteurNavbarTop}px`;
      } else {
        navbarBottom.style.top = "";
      }
    };

    ajusterPosition();
    window.addEventListener("resize", ajusterPosition);

    
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.bouton-categorie').forEach(bouton => {
        bouton.addEventListener('click', () => {
          const sousMenu = bouton.nextElementSibling;
          if (!sousMenu || !sousMenu.classList.contains('sous-menu')) return;

          if (sousMenu.classList.contains('ouvert')) {
            const rect = bouton.getBoundingClientRect();
            sousMenu.style.top = `${rect.bottom}px`;
            sousMenu.style.left = `${rect.left}px`;
          }
        });
      });
    }

    menus.addEventListener("scroll", () => {
      if (menus.scrollLeft > 20) {
        navbarBottom.classList.add("scrolled-left");
      } else {
        navbarBottom.classList.remove("scrolled-left");
      }
    });

  } catch (error) {
    console.error("Erreur dans activerScrollFadingNavbarBottom :", error);
  }
}