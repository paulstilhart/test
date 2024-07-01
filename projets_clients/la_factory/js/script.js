//==============================================================================================================================
//POUR GÉRER LE CHANGEMENT ICONE DU HEADER AU SCROLL

function headerIconScroll() {
  const js_header_logo_scroll = document.querySelector(".js_header_logo_scroll");
  if (!js_header_logo_scroll) return;

  const shouldAddAriaExpanded = window.innerWidth > 768 && window.scrollY > 100;

  if (shouldAddAriaExpanded) {
    js_header_logo_scroll.setAttribute("aria-expanded", "false");
  } else {
    js_header_logo_scroll.setAttribute("aria-expanded","true");
  }
}

window.addEventListener("scroll", headerIconScroll);
window.addEventListener("resize", headerIconScroll);
headerIconScroll(); // Appel initial pour vérifier l'état au chargement de la page

//==============================================================================================================================
//AFFICHER OU NON LE MENU
function toggleNav() {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const navToggle = document.querySelector(".js_nav_toggle");

  navToggle.addEventListener("click", () => {
    const ariaExpanded = header.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      header.setAttribute("aria-expanded","true")
      body.classList.add("overflow-y-hidden");
    } else {
      header.setAttribute("aria-expanded","false")
      body.classList.remove("overflow-y-hidden");
    }
  });
}

toggleNav(); // Assurez-vous d'appeler la fonction pour l'initialiser
