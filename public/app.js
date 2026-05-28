// app.js

import { afficherNavbarTop }               from "../modules/navbar-top.js";
import { buildNavbarBottomFromJson }        from "../modules/navbar-bottom.js";
import { afficherHero }                    from "../modules/hero.js";
import { animationCarrousel }              from "../modules/carrousel.js";
import { afficheArticlesRecents }          from "../modules/articles-recents.js";
import { afficherFooter }                  from "../modules/footer.js";
import { activerScrollFadingNavbarBottom } from "../modules/navbar-bottom-mobile.js";

document.addEventListener("DOMContentLoaded", () => {
  afficherNavbarTop();
  buildNavbarBottomFromJson('./data/menu.json');
  afficherHero();
  animationCarrousel();
  afficheArticlesRecents();
  afficherFooter();
  activerScrollFadingNavbarBottom();
});