//*==================== SCRIPT SECTION OPPORTUNITIES ====================*//
const homepage_section_opportunities = document.querySelector('.homepage_section_opportunities');
const homepage_section_opportunities_cards = homepage_section_opportunities.querySelectorAll('.main_container>.card');

if (window.innerWidth < 992){
    homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));

    if (window.innerWidth < 768){
        homepage_section_opportunities.querySelector('.main_container').scrollLeft = 135;
    }
};

homepage_section_opportunities_cards.forEach(card => card.addEventListener("mouseenter", event => {
    if (window.innerWidth>= 1200){
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));
        card.classList.add('active');
    }
    else{
        return;
    }
}));

window.addEventListener('resize', function () {
    if (window.innerWidth>= 1200){
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));
        homepage_section_opportunities.querySelector('.main_container>.card').classList.add('active');
    }
    else if(window.innerWidth < 1200){
        homepage_section_opportunities_cards.forEach(card => card.classList.remove('active'));

        if (window.innerWidth < 768){
            homepage_section_opportunities.querySelector('.main_container').scrollLeft = 135;
        }
    }
});


//*==================== SCRIPT SECTION 9 PLATFORM ====================*//
// Sélectionnez le slider et les cartes
const homepage_section_platform = document.querySelector('.homepage_section_platform');
const cards_container = homepage_section_platform.querySelector('.cards_container');
var cards = cards_container.querySelectorAll('.card');

// Clonez les cartes et ajoutez-les à la fin du slider
cards.forEach(function(card) {
  var clone = card.cloneNode(true);
  cards_container.appendChild(clone);
});

// Démarrez le slider
var sliderWidth = cards_container.offsetWidth;
var cardWidth = cards[0].offsetWidth;
var animationDuration = (cardWidth / sliderWidth) * cards.length * 150; // Ajustez la vitesse
cards_container.style.animationDuration = animationDuration + 's';