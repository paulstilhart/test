//*==================== SCRIPT SECTION OPPORTUNITIES ====================*//
const homepage_section_opportunities = document.querySelector('.homepage_section_opportunities');
const homepage_section_opportunities_cards = homepage_section_opportunities.querySelectorAll('.main_container>.card');

if (window.innerWidth < 992) {
    homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));

    if (window.innerWidth < 768) {
        homepage_section_opportunities.querySelector('.main_container').scrollLeft = 135;
    }
};

homepage_section_opportunities_cards.forEach(card => card.addEventListener("mouseenter", event => {
    if (window.innerWidth >= 1200) {
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));
        card.classList.add('active');
    }
    else {
        return;
    }
}));

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1200) {
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));
        homepage_section_opportunities.querySelector('.main_container>.card').classList.add('active');
    }
    else if (window.innerWidth < 1200) {
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));

        if (window.innerWidth < 768) {
            homepage_section_opportunities.querySelector('.main_container').scrollLeft = 135;
        }
    }
});


//*==================== SCRIPT SECTION 9 PLATFORM ====================*//
const homepage_section_platform = document.querySelector('.homepage_section_platform'); // section plateform
const cards_container = homepage_section_platform.querySelector('.cards_container'); // conteneur des cartes
const slider = homepage_section_platform.querySelector('.slider'); // slider
const cards = slider.querySelectorAll('.card'); // toutes les cartes
let firstCard = slider.querySelector('.card'); // première carte (déclarée avec let)

// FONCTION POUR POSITIONNER ELEMENT GAUCHE DE L'ECRAN
function toLeftElement(element) {
    let elementLeft = element.getBoundingClientRect().left; // on détermine la distance au bord gauche de l'élément
    element.style.transform = `translateX(-${elementLeft}px)`; // on applique le style pour le déplacer vers la gauche
}
toLeftElement(cards_container);


// FONCTION pour connaître la position de la première carte toutes les 1 seconde
slider.style.right = 0;
setInterval(function firstCardPosition() {
    if (firstCard.getBoundingClientRect().left < -350) {
        let firstCardWidth = firstCard.offsetWidth;//on recup la largeur de la première carte
        slider.appendChild(firstCard);//on ajoute la carte à la fin
        let currentRight = parseInt(slider.style.right);//on recup la valeur de position relative en cours
        let newRight = currentRight - (firstCardWidth + 8);
        console.log(newRight);
        slider.style.right = newRight + 'px';
        firstCard = slider.querySelector('.card');
    }
}, 1000);
