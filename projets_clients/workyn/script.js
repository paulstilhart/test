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

    if ((scrollTop > lastScrollTop) & (scrollTop > 500)) {
        header.classList.add("dnone");
        console.log('Scroll vers le bas');
    };

    if ((scrollTop < lastScrollTop)) {
        header.classList.remove("dnone");
    };

    lastScrollTop = scrollTop;

});