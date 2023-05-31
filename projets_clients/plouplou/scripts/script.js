/* 
Sur mobile, l’utilisateur peut aussi swiper pour faire défiler les Blocs Comparaison
*/


//*==================== SCRIPT SECTION SOLUTION COMPARAISO ====================*//
const section_solution_comparaison = document.querySelector('.section_solution_comparaison');//la section
const slider = section_solution_comparaison.querySelector('.slider');//le container des cartes = slider
const nombreCartes = slider.childElementCount;
const button_box = section_solution_comparaison.querySelector('.button_box');//la button box
const button_previous = button_box.querySelectorAll('.button_box>button')[0];
const button_next = button_box.querySelectorAll('.button_box>button')[1];

//Pour enlever les boutons suivant le nombre de cartes
if (nombreCartes < 2) {
    button_box.classList.add('dnone');
} else if (nombreCartes < 4 && slider.offsetWidth >= 1100) {
    console.log(slider.offsetWidth);
    button_box.classList.add('dnone');
};

//Pour enlever les boutons suivant le nombre de cartes --> mais on resize la fenetre (garde fou)
window.addEventListener('resize', function () {
    slider.style["transform"] = 'translateX(0px)';//on remet à 0
    slider.setAttribute('data-translate', 0);//on remet à 0
    if (nombreCartes < 2) {
        button_box.classList.add('dnone');
    } else if (nombreCartes < 4 && slider.offsetWidth >= 1100) {
        button_box.classList.add('dnone');
    } else if (nombreCartes < 4 && slider.offsetWidth <= 1100) {
        button_box.classList.remove('dnone');
    } else if (nombreCartes > 3) {
        button_box.classList.remove('dnone');
    };
    return;//on sort de la boucle
});




//Click bouton next
button_next.addEventListener("click", event => {
    let last_card = slider.lastElementChild;//on récupère le décalage de la dernière carte par rapport à la fenètre
    let decalage = (window.innerWidth - last_card.getBoundingClientRect().right);//decalage dernière carte

    if (decalage < 0) {
        let cardWidth = last_card.offsetWidth;//largeur de la carte
        let gap = parseInt((window.getComputedStyle(slider).getPropertyValue('column-gap')).replace("px", ""));//on recupere le gap
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX - (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        return;//on sort de la boucle
    };
    return;//on sort de la boucle
});


//Click bouton previous
button_previous.addEventListener("click", event => {
    let first_card = slider.firstElementChild;//on récupère le decalage de la 1ere carte par rapport à la fenètre
    let decalage = first_card.getBoundingClientRect().left;//decalage 1ere carte

    if (decalage < 0) {
        let cardWidth = first_card.offsetWidth;//largeur de la carte
        let gap = parseInt((window.getComputedStyle(slider).getPropertyValue('column-gap')).replace("px", ""));//on recupere le gap
        let currentTranslateX = parseInt(slider.getAttribute('data-translate'));
        let nextTranslateX = (currentTranslateX + (cardWidth + gap));
        translateXvalue = 'translateX('.concat(nextTranslateX, 'px)');
        slider.style["transform"] = translateXvalue;
        slider.setAttribute('data-translate', nextTranslateX);
        return;//on sort de la boucle
    };
    return;//on sort de la boucle
});


window.addEventListener('load', function () {
    if (window.innerWidth < 576) {
        // Variables pour le déplacement tactile
        let touchStartX = 0;
        let touchMoveX = 0;


        // Gestionnaire d'événement touchstart
        slider.addEventListener('touchstart', event => {
            touchStartX = event.touches[0].pageX;
        });

        // Gestionnaire d'événement touchmove
        slider.addEventListener('touchmove', event => {
            touchMoveX = event.touches[0].pageX;
        });

        // Gestionnaire d'événement touchend
        slider.addEventListener('touchend', event => {
            let touchDiff = touchMoveX - touchStartX;

            if (touchDiff > 0) {
                // Faites défiler vers la droite (vers la gauche dans la vue)
                button_previous.click();
            } else if (touchDiff < 0) {
                // Faites défiler vers la gauche (vers la droite dans la vue)
                button_next.click();
            }
        });
    }
});


