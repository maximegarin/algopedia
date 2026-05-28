export function buildNavbarBottomFromJson(menuJsonUrl, navbarContainerId = 'navbar-bottom') {
  fetch(menuJsonUrl)
    .then(response => response.json())
    .then(data => buildNavbar(data.menu, navbarContainerId))
    .catch(error => console.error(error));
}

function buildNavbar(menu, navbarContainerId) {
  const nav = document.getElementById(navbarContainerId);
  if (!nav) return;

  const menusWrapper = document.createElement('div');
  menusWrapper.classList.add('menus');

  menu.forEach(famille => {
    const menuDeroulant = document.createElement('div');
    menuDeroulant.classList.add('menu-deroulant');

    const boutonFamille = document.createElement('button');
    boutonFamille.classList.add('bouton-categorie');
    boutonFamille.textContent = famille.nom;
    menuDeroulant.appendChild(boutonFamille);

    const sousMenu = document.createElement('div');
    sousMenu.classList.add('sous-menu');

    famille.categories.forEach(cat => {
      const boutonCat = document.createElement('button');
      boutonCat.classList.add('bouton-categorie');
      boutonCat.textContent = cat.nom;
      boutonCat.onclick = () => {
        console.log(`Catégorie cliquée: ${cat.nom}`);
      };
      sousMenu.appendChild(boutonCat);
    });

    boutonFamille.addEventListener('click', () => {
      console.log('clic détecté sur :', famille.nom); // ← ici, à l'intérieur
      document.querySelectorAll('.sous-menu.ouvert').forEach(menuOuvert => {
        if (menuOuvert !== sousMenu) {
          menuOuvert.classList.remove('ouvert');
        }
      });
      sousMenu.classList.toggle('ouvert');
    });

    menuDeroulant.appendChild(sousMenu);
    menusWrapper.appendChild(menuDeroulant);
  });

  nav.appendChild(menusWrapper);

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      document.querySelectorAll('.sous-menu.ouvert').forEach(menuOuvert => {
        menuOuvert.classList.remove('ouvert');
      });
    }
  });
}