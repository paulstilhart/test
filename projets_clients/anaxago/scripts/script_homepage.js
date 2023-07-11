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