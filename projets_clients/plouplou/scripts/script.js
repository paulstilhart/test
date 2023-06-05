//*==================== SCRIPT SECTION SOLUTION COMPARAISON ====================*//
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
let resizeTimeout; // Variable pour stocker le délai de temporisation
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout); // Réinitialise le délai de temporisation à chaque redimensionnement
    resizeTimeout = setTimeout(function () {
        if (window.innerWidth < window.outerWidth - 10) { // Vérifie si le redimensionnement est horizontal avec une marge de 10 pixels
            // Effectue les actions nécessaires lors du redimensionnement horizontal
            slider.style.transform = 'translateX(0px)';
            slider.setAttribute('data-translate', 0);
            if (nombreCartes < 2 || (nombreCartes < 4 && slider.offsetWidth >= 1100)) {
                button_box.classList.add('dnone');
            } else {
                button_box.classList.remove('dnone');
            }
        }
    }, 200); // Délai de temporisation de 200 millisecondes pour limiter les appels fréquents lors du redimensionnement
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


        /* 
        // Gestionnaire d'événement touchmove
        slider.addEventListener('touchmove', event => {
            touchMoveX = event.touches[0].pageX;
        });
                slider.addEventListener('touchmove', event => {
            const touch = event.touches[0];
            const touchMoveY = touch.pageY;
            const touchDiffY = Math.abs(touchMoveY - touchStartY);
            const touchDiffX = Math.abs(touchMoveX - touchStartX);
            if (touchDiffY < touchDiffX) { // Vérifie si le déplacement vertical est inférieur au déplacement horizontal
                event.preventDefault(); // Empêche le défilement vertical par défaut
                touchMoveX = touch.pageX;
            }
        });
        */

        // Gestionnaire d'événement touchend
        slider.addEventListener('touchend', event => {
            let touchDiff = touchMoveX - touchStartX;
            console.log(touchDiff);
            if (touchDiff > 100) {  //ajuster la valeur selon les possibilités
                button_previous.click();
            } else if (touchDiff < -100) {  // ajuster la valeur aussi
                button_next.click();
            }
        });
    }
});


//*==================== SCRIPT SECTION SOLUTION ACCORDEON ====================*//
const section_solution_accordeon = document.querySelector('.section_solution_accordeon');//la section accordeon
const accordeons = section_solution_accordeon.querySelectorAll('.accordeon');//tous les accordéons de façon unitaires

accordeons.forEach(accordeon => accordeon.addEventListener("click", event => {
    if (accordeon.classList.contains('active')) {
        accordeon.classList.remove('active');
        return;//on sort de la boucle
    }
    else {
        let accordeonActiveOld = section_solution_accordeon.querySelector('.accordeon.active');
        if (accordeonActiveOld) {
            accordeonActiveOld.classList.remove('active');
        };
        accordeon.classList.add('active');
    }
}));


//*==================== SCRIPT SECTION SOLUTION TESTIMONY ====================*//
const section_solution_contact_testimony = document.querySelector('.section_solution_contact_testimony');//la section testimony
const slider_container = section_solution_contact_testimony.querySelector('.slider_container');//le slider_container

let pressed = false;
let startX = 0;

slider_container.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
    this.style.cursor = 'grabbing';
    console.log(startX);
});

slider_container.addEventListener('mouseleave', function (e) {
    pressed = false;
});

slider_container.addEventListener('mouseup', function (e) {
    pressed = false;
    this.style.cursor = 'grab';
});

slider_container.addEventListener('mousemove', function (e) {
    let slider_container_width = slider_container.offsetWidth;
    if (!pressed) {
        return
    }
    else if ((startX - e.clientX) > 0) {
        this.scrollLeft += slider_container_width;
    }
    else if ((startX - e.clientX) < 0) {
        this.scrollLeft -= slider_container_width;
    }
});


/* 
//Les variables utiles
let positionClic = 0;
let positionDrag = 0;
let posInitiale;
let posFinale;
let dragLimit;

slider_container.addEventListener('onmousedown',dragStart);

function dragStart(e){
    e.preventDefault();

    posInitiale = slider_container.offsetLeft;
    positionClic = e.clientX;

    document.addEventListener('mousemove', moveSliderContainer);
    document.addEventListener('pointerup',dragEnd);
};

function moveSliderContainer(e){
    positionDrag = positionClic - e.clientX;//clic -X actuel
    positionClic = e.clientX;
    console.log(`OLDposition : ${positionClic} NEWposition : ${e.clientX}`);


    slider_container.style.left = `${slider_container.offsetLeft - positionDrag}px`;
};






*/



