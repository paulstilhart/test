//==============================================================================================================================
//POUR GÉRER LE CHANGEMENT ICONE DU HEADER AU SCROLL

function headerIconScroll() {
  const js_header_logo_scroll = document.querySelector(".js_header_logo_scroll");
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
  const header = document.querySelector('header');
  const nav = document.querySelector(".js_nav");
  const navToggle = document.querySelector(".js_nav_toggle");
  const navToggletext = document.querySelector(".js_nav_toggle_text");

  navToggle.addEventListener("click", () => {
    const ariaExpanded = nav.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      header.classList.add('dark');
      nav.classList.add('!visible');
      nav.classList.add('!opacity-100');
      nav.setAttribute('aria-expanded', 'true');
      navToggletext.classList.add('-translate-y-2/4');
      body.classList.add('overflow-y-hidden');
    }
    else{
      header.classList.remove('dark');
      nav.classList.remove('!visible');
      nav.classList.remove('!opacity-100');
      nav.setAttribute('aria-expanded', 'false');
      navToggletext.classList.remove('-translate-y-2/4');
      body.classList.remove('overflow-y-hidden');  
    }
  });
}

toggleNav(); // Assurez-vous d'appeler la fonction pour l'initialiser
