//*==================== SCRIPT JS 4 BLOCS ACTIVE ====================*//
const js_section_trigger = document.querySelectorAll('.js_section_trigger');//les triggers
const js_section_show = document.querySelectorAll('.js_section_show');//les sections à afficher ou non

//Ecoute d'evenement click sur un js_section_trigger

js_section_trigger.forEach(trigger => trigger.addEventListener("click", event => {
    let trigger_number = trigger.getAttribute('data-trigger');
    js_section_trigger.forEach(trigger => trigger.classList.remove('active'));
    trigger.classList.add('active');

    js_section_show.forEach(section => section.classList.remove('active'));
    (document.querySelector(`[data-trigger="${trigger_number}"].js_section_show`)).classList.add('active');
}));

//*==================== SCRIPT JS CARDS CARROUSEL ====================*//
const js_slider = document.querySelector('.js_slider');//le slider
const js_button_previous = document.querySelectorAll('.js_button_box>button')[0];//button previous
const js_button_next = document.querySelectorAll('.js_button_box>button')[1];


//1ere carte - decalage 1ere carte - largeur 1ere carte
var gap = parseInt((window.getComputedStyle(js_slider).getPropertyValue('column-gap')).replace("px", ""));//gap entre les cartes
var js_first_card = js_slider.firstElementChild;
var js_card_width = js_first_card.offsetWidth;
var js_new_scrollLeft = (js_card_width + gap);//largeur carte + gap
/*  
let decalage_first_card = js_first_card.getBoundingClientRect().left;
let last_card_manifeste = js_slider.lastElementChild;
let decalage_last_card = ((window.innerWidth) - (last_card_manifeste.getBoundingClientRect().right));
*/


//CLICK BOUTON NEXT
js_button_next.addEventListener("click", event => {
    js_slider.scrollLeft += js_new_scrollLeft;
});

//CLICK BUTTON PREVIOUS
js_button_previous.addEventListener("click", event => {
    js_slider.scrollLeft -= js_new_scrollLeft;
});

//Pour mettre à jour les boutons au scroll doigt dans le conteneur
let previousScrollPosition = js_slider.scrollLeft;
js_slider.addEventListener("scroll", event => {
    let currentScrollPosition = js_slider.scrollLeft;

    if ((currentScrollPosition > previousScrollPosition)) { //scroll droite
        js_button_previous.classList.add('active');

        if ((js_slider.scrollWidth - (js_slider.scrollLeft + js_slider.clientWidth)) < 100) {
            js_button_next.classList.remove('active');
        }
    }
    else if (currentScrollPosition < previousScrollPosition) { //scroll gauche
        js_button_next.classList.add('active');

        if (js_slider.scrollLeft < 100) {
            js_button_previous.classList.remove('active');
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
            js_slider.scrollLeft = 0;
            gap = parseInt((window.getComputedStyle(js_slider).getPropertyValue('column-gap')).replace("px", ""));//gap entre les cartes
            js_first_card = js_slider.firstElementChild;
            js_card_width = js_first_card.offsetWidth;
            js_new_scrollLeft = (js_card_width + gap);//largeur carte + gap
        }
    }, 200);// Délai de temporisation de 200 millisecondes pour limiter les appels fréquents lors du redimensionnement
});


let isDragging = false;
let startX = 0;

js_slider.addEventListener("mousedown", event => {
    isDragging = true;
    startX = event.clientX;
    js_slider.classList.add("grabbing");
});

js_slider.addEventListener("mousemove", event => {
    if (isDragging) {
        let scroll = (startX - event.clientX);
        if (scroll > 0) {
            js_slider.scrollLeft += scroll;
            return;
        }
        else if (scroll < 0) {
            js_slider.scrollLeft -= Math.abs(scroll);
            return;
        }
        console.log(startX - event.clientX);
    }
});


window.addEventListener("mouseup", event => {
    isDragging = false;
    js_slider.classList.remove("grabbing");
});

js_slider.addEventListener("mouseleave", event => {
    isDragging = false;
    js_slider.classList.remove("grabbing");
});


