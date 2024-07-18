//==============================================================================================================================
//POUR GÉRER LE CHANGEMENT ICONE DU HEADER AU SCROLL

function headerIconScroll() {
  const js_header_logo_scroll = document.querySelector(
    ".js_header_logo_scroll"
  );
  if (!js_header_logo_scroll) return;

  const shouldAddAriaExpanded = window.innerWidth > 768 && window.scrollY > 500;

  if (shouldAddAriaExpanded) {
    js_header_logo_scroll.setAttribute("aria-expanded", "false");
  } else {
    js_header_logo_scroll.setAttribute("aria-expanded", "true");
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

  if (!navToggle) return;

  navToggle.addEventListener("click", () => {
    const ariaExpanded = header.getAttribute("aria-expanded");

    if (ariaExpanded === "false") {
      header.setAttribute("aria-expanded", "true");
      body.style.overflow = "hidden";
    } else {
      header.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });
}

toggleNav(); // Assurez-vous d'appeler la fonction pour l'initialiser

//==============================================================================================================================
function mapcards() {
  const cardsContainer = document.querySelector(".js_mapcards_cards");
  const pinsContainer = document.querySelector(".js_mapcards_pins");
  if (!cardsContainer || !pinsContainer) return;

  function selectGroup(groupNumber) {
    // Deselect all cards and pins
    cardsContainer.querySelectorAll("a").forEach((c) => {
      c.setAttribute("aria-selected", "false");
    });
    pinsContainer.querySelectorAll("span").forEach((p) => {
      p.setAttribute("aria-selected", "false");
    });

    // Select all cards and pins in the same group
    cardsContainer
      .querySelectorAll(`a[data-mapcards="${groupNumber}"]`)
      .forEach((c) => {
        c.setAttribute("aria-selected", "true");
      });
    pinsContainer
      .querySelectorAll(`span[data-mapcards="${groupNumber}"]`)
      .forEach((p) => {
        p.setAttribute("aria-selected", "true");
      });
  }

  cardsContainer.addEventListener("click", function (event) {
    const card = event.target.closest("a");
    if (
      !card ||
      !cardsContainer.contains(card) ||
      card.getAttribute("aria-selected") === "true"
    )
      return;

    event.preventDefault();

    const groupNumber = card.getAttribute("data-mapcards");
    selectGroup(groupNumber);
  });

  pinsContainer.addEventListener("click", function (event) {
    const pin = event.target.closest("span");
    if (
      !pin ||
      !pinsContainer.contains(pin) ||
      pin.getAttribute("aria-selected") === "true"
    )
      return;

    event.preventDefault();

    const groupNumber = pin.getAttribute("data-mapcards");
    selectGroup(groupNumber);
  });
}

mapcards();

//==============================================================================================================================
//EXPERTISES EFFET SLIDER HORIZONTAL AU SCROLL
function expertisesScrollEffect() {
  const js_expertises_1 = document.querySelector(".js_expertises_1");
  const js_expertises_2 = document.querySelector(".js_expertises_2");

  if (!js_expertises_1 || !js_expertises_2) {
    return;
  }

  const speedScroll = 9;
  let lastScrollPosition = window.scrollY;
  let ticking = false;

  const updateScroll = () => {
    const scrollPosition = window.scrollY;

    js_expertises_1.scrollLeft =
      js_expertises_1.scrollWidth -
      js_expertises_1.clientWidth -
      scrollPosition / speedScroll;
    js_expertises_2.scrollLeft = scrollPosition / speedScroll;
    lastScrollPosition = scrollPosition;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);

  // Initial call to position elements correctly on load
  updateScroll();
}

expertisesScrollEffect();

//==============================================================================================================================
//CHANGEMENT DE THEME SUIVANT LE THÈME DE LA SECTION
function darkOrLightTheme() {
  const sections = document.querySelectorAll("section");
  const rootElement = document.documentElement;

  // Fonction pour mettre à jour le thème
  function updateTheme(theme) {
    if (theme === "dark") {
      if (!rootElement.classList.contains("dark")) {
        rootElement.classList.add("dark");
      }
    } else {
      if (rootElement.classList.contains("dark")) {
        rootElement.classList.remove("dark");
      }
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          const theme = entry.target.getAttribute("data-theme");
          updateTheme(theme);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

darkOrLightTheme();
