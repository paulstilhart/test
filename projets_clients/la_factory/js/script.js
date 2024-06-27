//==============================================================================================================================
//POUR GÉRER LE CHANGEMENT ICONE DU HEADER AU SCROLL

function headerIconScroll() {
  const js_header_logo_scroll = document.querySelector(
    ".js_header_logo_scroll"
  );
  if (!js_header_logo_scroll) return;

  const shouldAddClass = window.innerWidth > 768 && window.scrollY > 100;
  js_header_logo_scroll.classList.toggle("header_icon_scroll", shouldAddClass);
}

window.addEventListener("scroll", headerIconScroll);
window.addEventListener("resize", headerIconScroll);
headerIconScroll(); // Appel initial pour vérifier l'état au chargement de la page

//==============================================================================================================================
//AFFICHER OU NON LE MENU
function toggleNav() {
  const body = document.querySelector('body');
  const nav = document.querySelector(".js_nav");
  const navOpen = document.querySelector(".js_nav_open");
  const navClose = document.querySelector(".js_nav_close");

  navOpen.addEventListener("click", () => {
    nav.classList.add('!translate-y-0');
    body.classList.add('!overflow-y-hidden');
  });
  navClose.addEventListener("click", () => {
    nav.classList.remove('!translate-y-0');
    body.classList.remove('!overflow-y-hidden');
  });
}

toggleNav();
