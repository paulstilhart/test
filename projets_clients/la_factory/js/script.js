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
//CURSOR CUSTOM

function cursor() {
  // Ajouter le curseur personnalisé au début du body
  document.body.insertAdjacentHTML(
    "afterbegin",
    '<div class="js_cursor"></div>'
  );
  const cursor = document.querySelector(".js_cursor");

  // Fonction pour mettre à jour la position du curseur personnalisé
  function updateCursorPosition(e) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY - window.scrollY}px`;
  }

  // Mettre à jour la position du curseur lors du mouvement de la souris
  document.addEventListener("mousemove", updateCursorPosition);

  // Sélectionner tous les éléments <a> et <button> et ajouter les gestionnaires d'événements
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", (event) =>
      cursor.classList.add("hover")
    );
    element.addEventListener("mouseleave", (event) =>
      cursor.classList.remove("hover")
    );
  });

  // Ajouter les gestionnaires d'événements pour les éléments avec la classe js_cursor_yellow
  document.querySelectorAll(".js_cursor_yellow").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("black")
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("black")
    });
  });
}

cursor();


//==============================================================================================================================
//PAGE CULTURE > AGENCES > STOPSCROLL

const js_culture_stopscroll_mark = document.querySelector(
  ".js_culture_stopscroll_mark"
);
const js_culture_stopscroll_slider = document.querySelector(
  ".js_culture_stopscroll_slider"
);

function scrollHorizontally(e) {
  e.preventDefault();
  const delta = e.deltaY || -e.detail || e.wheelDeltaY; // Détermine la direction du défilement
  const scrollSpeed = 10; // Ajustez cette valeur comme nécessaire

  if (js_culture_stopscroll_slider) {
    js_culture_stopscroll_slider.scrollLeft -= delta * scrollSpeed;
  }
}

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      body.style.overflow = "hidden";

      window.addEventListener("wheel", scrollHorizontally, { passive: false });
      console.log("L'élément est visible dans le viewport.");
    } else {
      console.log("je suis sorti");
      body.style.overflow = "";
    }
  });
}

const options = {
  root: null, // Utilise le viewport du navigateur comme root
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

if (js_culture_stopscroll_mark && js_culture_stopscroll_slider) {
  observer.observe(js_culture_stopscroll_mark);
}
