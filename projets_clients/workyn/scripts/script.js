/*================================ ENVOI DU MAIL DEPUIS FORMULAIRE =======================================*/
function Mail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    Email.send({
        SecureToken: "c5306d78-131d-4951-9bcc-d5affcc4fd9a",
        To: 'paul.stilhart@gmail.com',
        From: 'paul.stilhart@gmail.com',
        Subject: "Formulaire de contact - Mail de : " + name.value + " Adresse email : " + email.value,
        Body: "Vous venez de recevoir un mail de : " + name.value + "<br/>" + " Adresse email : " + email.value + "<br/><br/>" + message.value,
    }).then(
        message => alert("Votre message a bien été envoyé!")
    );
};

/*================================ NAVIGATION MOBILE BURGER MENU =======================================*/
const burgerButton = document.querySelector(".nav_toggler");//On vient récupérer le bouton du burger menu
const navigation = document.querySelector("nav");//egalement l'élément nav
const header = document.querySelector("header");//egalement l'élément nav
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const sections = document.querySelectorAll("section");
const text = document.querySelectorAll("h1,h2,h3");

const sectionApproach = document.querySelector(".section_approach");
const cardsContainer = document.querySelector(".section_approach_cards_container");
const previous = document.getElementById("section_approach_cards_button_previous");
const next = document.getElementById("section_approach_cards_button_next");
const cards = document.querySelectorAll('.section_approach_card');



//Au click sur le bouton, on vient déclencher la fonction callback toggleNav
burgerButton.addEventListener("click", toggleNav);

//Au click à l'extérieur de du menu une fois ouvert, on vient déclencher la fonction callback toggleNavIfOpen
main.addEventListener("click", toggleNavIfOpen);
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
let options = {
    //root: null,
    //rootMargin: '0',
    //threshold: 0.25,
}
const observer = new IntersectionObserver(handleIntersect, options);

function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadein");
        };
        if (!(entry.isIntersecting)) {
            entry.target.classList.remove("fadein");
        };
    })
};

//pour mettre tous les titres à opacity 0

window.addEventListener('scroll', () => {
    /* console.dir(document.documentElement); //permet de voir toutes les propriétés dispos
        const { scrollTop, scrollHeight, clientHeight }
        = document.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    dans le cas ou on aurait besoin de toutes ces propriétées, ici en l'occurence juste celle vers le haut
    */
    text.forEach(item => {
        observer.observe(item);
    })
    const { scrollTop } = document.documentElement;
    if (scrollTop > 500) {
        header.classList.add("header_big");
    };
    if (scrollTop < 500) {
        header.classList.remove("header_big");
    };
    if ((scrollTop > (lastScrollTop + 5)) & (scrollTop > 500)) {
        header.classList.add("dnone");
    };

    if ((scrollTop < (lastScrollTop - 10))) {
        header.classList.remove("dnone");
    };

    lastScrollTop = scrollTop;

    if(next){
        if(window.innerWidth > 2600) {
            next.classList.remove("active");
            return;//on sort de la boucle
        };
        if ((window.innerWidth) < 2600 & !(previous.classList.contains("active"))) {
            next.classList.add("active");
            return;//on sort de la boucle
        }
    }
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



//Click bouton next
next.addEventListener("click", event => {
    //on récupere le decalage de la premiere carte en unité positive ou négativ
    let decalage = Math.round(((cardsContainer.firstElementChild.getBoundingClientRect().x) - (cardsContainer.offsetLeft)) / 413);
    let lastCardInner = (window.innerWidth - ((cardsContainer.lastElementChild).getBoundingClientRect().x));


    if (lastCardInner > 365) {
        return;//on sort de la boucle
    };

    if (decalage > (-cardsContainer.children.length + 1) & lastCardInner > 0) {
        next.classList.remove("active");
        previous.classList.add("active");
        translateXvalue = 'translateX('.concat(((decalage * 413) - 413), 'px)');

        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };

    if (decalage > (-cardsContainer.children.length + 1)) {
        previous.classList.add("active");
        translateXvalue = 'translateX('.concat(((decalage * 413) - 413), 'px)');

        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };

    cards.forEach(card => {
        card.style["transform"] = "translateX(0)";
        previous.classList.remove("active");
        return;//on sort de la boucle
    });
});


//Click bouton previous
previous.addEventListener("click", event => {

    //on récupere le decalage de la premiere carte en unité positive ou négative
    let decalage = Math.round(((cardsContainer.firstElementChild.getBoundingClientRect().x) - (cardsContainer.offsetLeft)) / 413);

    if (decalage > (-0.5)) {
        return;//on sort de la boucle
    };

    if (decalage == (-1)) {
        next.classList.add("active");
        previous.classList.remove("active");
        cards.forEach(card => {
            card.style["transform"] = "translateX(0)";
        });
        return;
    };

    if (decalage < -1) {
        next.classList.add("active");
        translateXvalue = 'translateX('.concat(((decalage * 413) + 413), 'px)');
        cards.forEach(card => {
            card.style["transform"] = translateXvalue;
        });
        return;//on sort de la boucle
    };
});

