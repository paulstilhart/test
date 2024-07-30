//==============================================================================================================================
//VARIABLES GENERALES

const body = document.querySelector("body");
const header = document.querySelector("header");

//==============================================================================================================================
//POUR GÉRER LE CHANGEMENT ICONE DU HEADER AU SCROLL

function headerIconScroll() {
  const js_header_logo_scroll = document.querySelector(
    ".js_header_logo_scroll"
  );
  if (!js_header_logo_scroll) return;

  const shouldAddAriaExpanded = window.innerWidth > 768 && window.scrollY > 300;

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
//Pour la carte de la home

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
//EXPERTISES EFFET SLIDER HORIZONTAL AU SCROLL PAGE EXPERTISES

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

//==============================================================================================================================
//GESTION INPUT CV PAGES POSTES

function inputCV() {
  const fileInput = document.querySelector(".js_file_cv>input");
  const fileText = document.querySelector(".js_file_cv>p");

  if (fileInput && fileText) {
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        fileInput.setAttribute("aria-checked", "true");
        fileText.textContent = file.name;
      }
    });
  }
}

inputCV();

//==============================================================================================================================
//

/*  
function getElementTopPositionWithinContainer() {
  const container = document.querySelector('.js_sticky_content');
  const stickyElement = container.querySelector('div');

  if (container && stickyElement) {
    const containerRect = container.getBoundingClientRect();
    const stickyElement = stickyElement.getBoundingClientRect();

    const relativeTop = stickyElement.top - containerRect.top;
    console.log(
      "Position top de l'élément sticky dans son conteneur:",
      relativeTop
    );
    return relativeTop;
  } else {
    console.log("Conteneur ou élément non trouvé.");
    return null;
  }
}

getElementTopPositionWithinContainer();
*/

//==============================================================================================================================
//PAGE CULTURE STOPSCROLL

// Options pour l'IntersectionObserver
const options = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
};

let lastScrollTop = 0;

// Fonction pour mettre à jour le défilement horizontal et gérer le défilement vertical
const handleScroll = (event) => {
  const scrollContainer = document.querySelector(
    ".js_culture_stopscroll_slider"
  );
  if (scrollContainer) {
    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    const scrollTop = window.scrollY || window.pageYOffset;
    const deltaY = lastScrollTop - scrollTop;
    let newScrollLeft = scrollLeft + deltaY;

    // Conserver la nouvelle position de défilement dans les limites du conteneur
    newScrollLeft = Math.max(
      0,
      Math.min(newScrollLeft, scrollWidth - clientWidth)
    );

    // Appliquer la nouvelle position de défilement horizontal
    scrollContainer.scrollLeft = newScrollLeft;

    // Mettre à jour la dernière position du défilement vertical
    lastScrollTop = scrollTop;

    // Désactiver le défilement vertical uniquement si le conteneur n'est pas en butée
    if (newScrollLeft > 0 && newScrollLeft < scrollWidth - clientWidth) {
      document.body.style.overflow = "hidden"; // Désactiver le défilement vertical
    } else {
      document.body.style.overflow = ""; // Réactiver le défilement vertical
    }

    event.preventDefault(); // Empêcher le défilement vertical
    event.stopPropagation(); // Empêcher les autres gestionnaires d'événements de s'exécuter
  }
};

// Fonction de rappel pour l'IntersectionObserver
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element visible");
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      console.log("Element not visible");
      window.removeEventListener("scroll", handleScroll);
    }
  });
};

// Création de l'instance IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Sélection de l'élément à observer
const targetElement = document.querySelector(".js_culture_stopscroll_mark");
if (targetElement) {
  observer.observe(targetElement);
}
