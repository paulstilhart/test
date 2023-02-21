/*================================ ENVOI DU MAIL DEPUIS FORMULAIRE =======================================*/
function Mail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    Email.send({
        SecureToken: "c5306d78-131d-4951-9bcc-d5affcc4fd9a",
        To: 'paul.stilhart@gmail.com',
        From: email.value,
        Subject: "Formulaire de contact - Mail de - " + name.value,
        Body: message.value,
    }).then(
        message => alert("Mail bien envoyé!")
    );
};

/*================================ NAVIGATION MOBILE BURGER MENU =======================================*/
const burgerButton = document.querySelector(".nav_toggler");//On vient récupérer le bouton du burger menu
const navigation = document.querySelector("nav");//egalement l'élément nav
const header = document.querySelector("header");//egalement l'élément nav
const body = document.querySelector("main");
const footer = document.querySelector("footer");



//Au click sur le bouton, on vient déclencher la fonction callback toggleNav
burgerButton.addEventListener("click", toggleNav);

//Au click à l'extérieur de du menu une fois ouvert, on vient déclencher la fonction callback toggleNavIfOpen
body.addEventListener("click", toggleNavIfOpen);
footer.addEventListener("click", toggleNavIfOpen);


//on définit la fonction toggleNav
//toggle permet d'ajouter la classe si pas présente, l'enlever si déjà présente
function toggleNav() {
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    header.classList.toggle("active");
};


//Permet de fermer le menu en cliquant à l'extérieur
function toggleNavIfOpen() {
    if (header.classList.contains("active")) {
        burgerButton.classList.toggle("active");
        navigation.classList.toggle("active");
        header.classList.toggle("active");
    }
};


/*================================ GESTION DU MENU SUIVANT LA HAUTEUR =======================================*/
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
    /* console.dir(document.documentElement); //permet de voir toutes les propriétés dispos
        const { scrollTop, scrollHeight, clientHeight }
        = document.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    dans le cas ou on aurait besoin de toutes ces propriétées, ici en l'occurence juste celle vers le haut
    */

    const { scrollTop } = document.documentElement;

    if ((scrollTop > (lastScrollTop + 5)) & (scrollTop > 500)) {
        header.classList.add("dnone");
    };

    if ((scrollTop < (lastScrollTop - 10))) {
        header.classList.remove("dnone");
    };

    lastScrollTop = scrollTop;
});


/*================================ STOPSCROLL HORIZONTAL =======================================*/


/* 
let options = {
    //root: null,
    //rootMargin: '0',
    threshold: 1,
}
const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(cardsContainer);
function handleIntersect(entries) {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let currentScroll = 0;
            window.addEventListener('scroll', () => {
                const { scrollTop } = document.documentElement;

                if (scrollTop >currentScroll) {
                    console.log("je vais vers le bas");
                };

                currentScroll = scrollTop;
            });
        };
        if(!(entry.isIntersecting)) {
            console.log("je sors de la boucle")
        };
    })
}
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function disable() {
    document.querySelector('.scrollable').addEventListener('wheel', preventScroll);
}

function enable() {
    document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
}


*/







//Récupération de quelques éléments fixes
const sectionApproach = document.querySelector(".section_approach");
const cardsContainer = document.querySelector(".section_approach_cards_container");
const previous = document.getElementById("section_approach_cards_button_previous");
const next = document.getElementById("section_approach_cards_button_next");
const nombrecartes = cardsContainer.children.length;
const firstcard = cardsContainer.firstElementChild;
const cards = document.querySelectorAll('.section_approach_card');


//Click bouton next
next.addEventListener("click", event => {
    console.log(nombrecartes);

    //on récupere le decalage de la premiere carte en unité positive ou négativ
    let decalage = Math.round(((firstcard.getBoundingClientRect().x) - (cardsContainer.offsetLeft)) / 413);
    console.log(decalage);

    if (decalage > (-nombrecartes + 1)) {
        translateXvalue = 'translateX('.concat(((decalage * 413) - 413), 'px)');

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
    let decalage = Math.round(((firstcard.getBoundingClientRect().x) - (cardsContainer.offsetLeft)) / 413);

    if (decalage < 0) {
        translateXvalue = 'translateX('.concat(((decalage * 413) + 413), 'px)');

        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };

    cards.forEach(card => {
        translateXvalue = 'translateX('.concat(((-nombrecartes + 1) * 413), 'px)');
        card.style["transform"] = translateXvalue;
    });
    return;
});

