//*==================== SCRIPT SECTION MANIFESTE ====================*//
const recrutement_section_manifeste = document.querySelector('.recrutement_section_manifeste');//la section
const slider = recrutement_section_manifeste.querySelector('.slider');//le container des cartes = slider
const nombreCartes = slider.childElementCount;
const button_box = recrutement_section_manifeste.querySelector('.button_box');//la button box
const button_previous = button_box.querySelectorAll('.button_box>button')[0];
const button_next = button_box.querySelectorAll('.button_box>button')[1];

//Pour remettre le slider à 0 si on resize
let resizeTimeout; // Variable pour stocker le délai de temporisation
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout); // Réinitialise le délai de temporisation à chaque redimensionnement
    resizeTimeout = setTimeout(function () {
        if (window.innerWidth < window.outerWidth - 10) { // Vérifie si le redimensionnement est horizontal avec une marge de 10 pixels
            // Effectue les actions nécessaires lors du redimensionnement horizontal
            slider.style.transform = 'translateX(0px)';
            slider.setAttribute('data-translate', 0);
        }
    }, 200); // Délai de temporisation de 200 millisecondes pour limiter les appels fréquents lors du redimensionnement
});

//Click bouton next
button_next.addEventListener("click", event => {
    let last_card = slider.lastElementChild;//on récupère le décalage de la dernière carte par rapport à la fenètre
    let decalage = (window.innerWidth - last_card.getBoundingClientRect().right);//decalage dernière carte
    let cardWidth = last_card.offsetWidth;//largeur de la carte
    let gap = parseInt((window.getComputedStyle(slider).getPropertyValue('column-gap')).replace("px", ""));//on recupere le gap


    if (decalage < (-cardWidth)) {
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX - (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        button_previous.classList.add('active');
        return;//on sort de la boucle
    }
    else if ((decalage > (-cardWidth - 1)) && (decalage < 0)) {
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX - (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        button_next.classList.remove('active');
        return;//on sort de la boucle
    };
    return;//on sort de la boucle
});


//Click bouton previous
button_previous.addEventListener("click", event => {
    let first_card = slider.firstElementChild;//on récupère le decalage de la 1ere carte par rapport à la fenètre
    let decalage = first_card.getBoundingClientRect().left;//decalage 1ere carte
    let cardWidth = first_card.offsetWidth;//largeur de la carte
    let gap = parseInt((window.getComputedStyle(slider).getPropertyValue('column-gap')).replace("px", ""));//on recupere le gap

    if (decalage < (-cardWidth)) {
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX + (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        button_next.classList.add('active');
        return;//on sort de la boucle
    }
    else if ((decalage > (-cardWidth - 1)) && (decalage < 0)) {
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX + (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        button_next.classList.add('active');
        button_previous.classList.remove('active');
        return;//on sort de la boucle
    };
    return;//on sort de la boucle
});
