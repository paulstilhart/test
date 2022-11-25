//Récupération de quelques éléments fixes
const previous = document.getElementById("section_testimony_interactions_button_previous");
const next = document.getElementById("section_testimony_interactions_button_next");
const container = document.getElementById('section_testimony_cards_container_nopadding');
const nombrecartes = container.children.length;
const firstcard = container.firstElementChild;
const cards = document.querySelectorAll('.section_testimony_card');


//Click bouton next
next.addEventListener("click", event => {

    //on récupere le decalage de la premiere carte en unité positive ou négativ
    let decalage = Math.round(((firstcard.getBoundingClientRect().x) - (container.offsetLeft)) / 395);

    if (decalage > (-nombrecartes + 1)) {
        translateXvalue = 'translateX('.concat(((decalage * 395) - 395), 'px)');

        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };

    cards.forEach(card => {
        card.style["transform"] = "translateX(0)";
    });
    return;
});


//Click bouton previous
previous.addEventListener("click", event => {

    //on récupere le decalage de la premiere carte en unité positive ou négative
    let decalage = Math.round(((firstcard.getBoundingClientRect().x) - (container.offsetLeft)) / 395);
    console.log(decalage);
    console.log(nombrecartes);

    if (decalage < 0) {
        translateXvalue = 'translateX('.concat(((decalage * 395) + 395), 'px)');

        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };

    cards.forEach(card => {
        translateXvalue = 'translateX('.concat(((-nombrecartes + 1) * 395), 'px)');
        card.style["transform"] = translateXvalue;
    });
    return;
});