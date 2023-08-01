
function unfoldAccordions() {
  const accordionItems = document.querySelectorAll('.js_accordion_item');//tous les accordions

  accordionItems.forEach(item => {//on itere sur chaque element
    const title = item.querySelector('.js_accordion_title');
    const content = item.querySelector('.js_accordion_content');

    // Ouvrir tous les éléments d'accordéon en définissant la propriété 'max-height' sur la hauteur réelle du contenu
    // Ceci est fait pour éviter des transitions abruptes au chargement de la page
    content.style.maxHeight = content.scrollHeight + 'px';

    title.addEventListener('click', () => {// Ajout d'un écouteur d'événement 'click' au titre
      // Inversion de l'état de la section de contenu (affichée ou masquée) lors du clic sur le titre
      content.style.maxHeight = content.style.maxHeight === '0px' ? content.scrollHeight + 'px' : '0px';
      item.classList.toggle('open', content.style.maxHeight !== '0px');//pour l'icome de fleche
    });

    //Garde-fou si on resize la fenetre
    window.addEventListener('resize', () => {
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  });
}


function intersectionObserverSection(sectionElement, paginationContainer) {
  //root : null car on utilise le viewport / rootMargin: "0px" (pas de marge autour de root) / threshold: 0.2 car sections hautes
  const options = { root: null, rootMargin: "0px", threshold: 0.2 };

  const callback = (entries, observer) => { // Callback appelée lorsque l'intersection change
    entries.forEach(entry => {

      if (entry.isIntersecting) {// La section est en cours d'intersection avec le viewport
        const sectionId = sectionElement.id;
        const intersectionLink = paginationContainer.querySelector(`a[href="#${sectionId}"]`);

        if (intersectionLink) {
          paginationContainer.querySelectorAll('a').forEach(link => link.classList.remove('active'));
          intersectionLink.classList.add('active');
        }
      }
    });
  };

  // Créer l'instance de l'IntersectionObserver + Observer la section cible
  const intersectionObserver = new IntersectionObserver(callback, options);
  intersectionObserver.observe(sectionElement);

}


function ObserveSections() {
  const sections = document.querySelectorAll('.js_intersection_section');
  const paginationContainer = document.querySelector('.js_pagination_container > div > div');
  sections.forEach(section => intersectionObserverSection(section, paginationContainer));
}


//Fonction click et MajButtons
function sliders() {
  const sliders = document.querySelectorAll('.js_slider');
  sliders.forEach(slider => {
    const js_slider_ancestor = slider.closest('.js_slider_ancestor');
    const js_slider_button_next = js_slider_ancestor.querySelector('.js_slider_button_next');
    const js_slider_button_previous = js_slider_ancestor.querySelector('.js_slider_button_previous');

    // On trouve la largeur d'une carte + le gap = scrollStep
    let scrollStep = slider.firstElementChild.offsetWidth + parseInt(getComputedStyle(slider).columnGap);

    //On ecoute les 2 boutons pour slider au click
    js_slider_button_next.addEventListener("click", () => { slider.scrollLeft += scrollStep; });
    js_slider_button_previous.addEventListener("click", () => { slider.scrollLeft -= scrollStep; });

    //Partie Dragging
    let isDragging = false;
    let startX = 0;

    function handleMouseDown(event) { isDragging = true; startX = event.clientX; slider.classList.add("grabbing"); }
    function handleMouseUpOrLeave() { isDragging = false; slider.classList.remove("grabbing"); }
    function handleMouseMove(event) { if (isDragging) { slider.scrollLeft += startX - event.clientX; } }

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseup", handleMouseUpOrLeave);
    slider.addEventListener("mouseleave", handleMouseUpOrLeave);
    slider.addEventListener("mousemove", handleMouseMove);

    //Pour mettre à jour l'état des boutons
    slider.addEventListener('scroll', () => {
      const conteneurLargeur = slider.clientWidth; // La largeur visible du conteneur
      const scrollPosition = slider.scrollLeft; // La position actuelle de défilement
      const contenuLargeur = slider.scrollWidth; // La largeur totale du contenu dans le conteneur

      js_slider_button_previous.classList.toggle('active', scrollPosition !== 0);
      js_slider_button_next.classList.toggle('active', contenuLargeur - scrollPosition - conteneurLargeur > 100);
    });

    //Garde-fou si on resize la fenetre
    window.addEventListener('resize', () => {
      slider.scrollLeft = 0;
      scrollStep = slider.firstElementChild.offsetWidth + parseInt(getComputedStyle(slider).columnGap);
    });
  })
}



function unfoldCard() {
  const cards_container = document.querySelectorAll('.js_cards');

  cards_container.forEach(js_cards => {
    const cards = js_cards.querySelectorAll('.card');
    const firstCard = cards[0];

    function activateCard(card) {
      cards.forEach(card => card.classList.remove('active'));
      card.classList.add('active');
    }

    function resetCards() {
      if (window.innerWidth >= 1200) { activateCard(firstCard); }
      else if (window.innerWidth < 1200) {
        activateCard(firstCard);
        if (window.innerWidth < 992) { js_cards.scrollLeft = 135; }
      }
    }

    cards.forEach(card => card.addEventListener("mouseenter", event => {
      if (window.innerWidth >= 1200) { activateCard(card); }
    }));

    window.addEventListener('resize', () => { resetCards() });
    resetCards()
  })
}

unfoldCard();
unfoldAccordions();//document.addEventListener('DOMContentLoaded', setupAccordion);
ObserveSections();
sliders();
