//*==================== SCRIPT SECTION MANIFESTE ====================*//
//La section manifeste et le slider manifeste
const recrutement_section_manifeste = document.querySelector('.recrutement_section_manifeste');
const slider_manifeste = recrutement_section_manifeste.querySelector('.slider');
const slider_manifeste_cards = recrutement_section_manifeste.querySelectorAll('.slider>div');

//Bouton du slider
const button_previous_manifeste = recrutement_section_manifeste.querySelectorAll('.button_box>button')[0];
const button_next_manifeste = recrutement_section_manifeste.querySelectorAll('.button_box>button')[1];

//Le gap entre les cartes = une constante
const gap = parseInt((window.getComputedStyle(slider_manifeste).getPropertyValue('column-gap')).replace("px", ""));


//1ere carte - decalage 1ere carte - largeur 1ere carte
let first_card_manifeste = slider_manifeste.firstElementChild;
let decalage_first_card = first_card_manifeste.getBoundingClientRect().left;
let last_card_manifeste = slider_manifeste.lastElementChild;
let decalage_last_card = ((window.innerWidth) - (last_card_manifeste.getBoundingClientRect().right));
let cardWidth = first_card_manifeste.offsetWidth;


//CLICK BOUTON NEXT
button_next_manifeste.addEventListener("click", event => {
    //On vient simplement incrémenter le scrollLeft de la largeur carte + gap
    let newscrollLeft = (cardWidth + gap);
    slider_manifeste.scrollLeft += newscrollLeft;
});


//Click bouton previous
button_previous_manifeste.addEventListener("click", event => {
    //On vient simplement incrémenter le scrollLeft de la largeur carte + gap
    let newscrollLeft = (cardWidth + gap);
    slider_manifeste.scrollLeft -= newscrollLeft;
});

//Pour mettre à jour les boutons au scroll doigt dans le conteneur
let previousScrollPosition = slider_manifeste.scrollLeft;
slider_manifeste.addEventListener("scroll", event => {
    let currentScrollPosition = slider_manifeste.scrollLeft;

    if ((currentScrollPosition > previousScrollPosition)) { //scroll droite
        button_previous_manifeste.classList.add('active');

        if ((slider_manifeste.scrollWidth - (slider_manifeste.scrollLeft + slider_manifeste.clientWidth)) < 100) {
            button_next_manifeste.classList.remove('active');
        }
    }
    else if (currentScrollPosition < previousScrollPosition) { //scroll gauche
        button_next_manifeste.classList.add('active');

        if (slider_manifeste.scrollLeft < 100) {
            button_previous_manifeste.classList.remove('active');
        }
    }
    // Met à jour la position précédente pour la prochaine itération
    previousScrollPosition = currentScrollPosition;
});


//Pour remettre le slider à 0 si on resize
// Variable pour stocker le délai de temporisation
let resizeTimeout;
window.addEventListener('resize', function () {
    // Réinitialise le délai de temporisation à chaque redimensionnement
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
        if (window.innerWidth < window.outerWidth - 10) { // Vérifie si le redimensionnement est horizontal avec une marge de 10 pixels
            slider_manifeste.scrollLeft = 0;
        }
    }, 200);// Délai de temporisation de 200 millisecondes pour limiter les appels fréquents lors du redimensionnement
});


let isDragging = false;
let startX = 0;

slider_manifeste.addEventListener("mousedown", event => {
    isDragging = true;
    startX = event.clientX;
    slider_manifeste.classList.add("grabbing");
});

slider_manifeste.addEventListener("mousemove", event => {
    if (isDragging) {
        let scroll = (startX - event.clientX);
        if (scroll > 0) {
            slider_manifeste.scrollLeft += scroll;
            return;
        }
        else if (scroll < 0) {
            slider_manifeste.scrollLeft -= Math.abs(scroll);
            return;
        }
        console.log(startX - event.clientX);
    }
});


window.addEventListener("mouseup", event => {
    isDragging = false;
    slider_manifeste.classList.remove("grabbing");
});

recrutement_section_manifeste.addEventListener("mouseleave", event => {
    isDragging = false;
    slider_manifeste.classList.remove("grabbing");
});




