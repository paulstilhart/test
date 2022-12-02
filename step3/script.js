//*==================== SCRIPT SECTION TESTIMONY ====================*//

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

//*==================== SCRIPT SECTION POSTS ====================*//
const titles = document.querySelectorAll(".section_posts_card_title");
const images = document.querySelectorAll(".section_posts_carrousel_img_container > a");
const nombreImages = images.length;
const cardsContent = document.querySelectorAll(".section_posts_carrousel_card_content");
const buttonNext = document.getElementById("section_posts_carrousel_card_button_next");
const buttonPrevious = document.getElementById("section_posts_carrousel_card_button_previous");
const progressBar = document.getElementById("section_posts_carrousel_card_progress_bar");
let count = 0;


//Fonction carrouselNext
function carrouselNext() {
    images[count].classList.remove("active");//on enleve la classe active de l'élément en cours pour les images
    cardsContent[count].classList.remove("active");//de la meme façon sur la carte content
    progressBar.classList.remove("active");
    clearInterval(timer);

    //si on est pas encore à la fin des images
    if (count < nombreImages - 1) {
        count++; //on incrémente le compteur
    } else {
        count = 0; //sinon on remet le compteur à 0
    }

    images[count].classList.add('active');
    cardsContent[count].classList.add('active');
    setTimeout(() => {
        progressBar.classList.add('active');
    }, 1);
    timer = setInterval(carrouselNext, 7000);
}

//Fonction carrouselPrevious
function carrouselPrevious() {
    images[count].classList.remove("active");//on enleve la classe active de l'élément en cours pour les images
    cardsContent[count].classList.remove("active");//de la meme façon sur la carte content
    progressBar.classList.remove("active");
    clearInterval(timer);

    //si on est pas eu début de la liste
    if (count > 0) {
        count--; //on incrémente le compteur
    } else {
        count = nombreImages - 1; //sinon on met le compteur à la fin de la liste
    }

    images[count].classList.add('active');
    cardsContent[count].classList.add("active");
    setTimeout(() => {
        progressBar.classList.add('active');
    }, 1);
    timer = setInterval(carrouselNext, 7000);
}


//on ajoute l'eventListener sur le bouttonNext
buttonNext.addEventListener('click', carrouselNext);
//on ajoute l'eventListener sur le bouttonPrevious
buttonPrevious.addEventListener('click', carrouselPrevious);
var timer = setInterval(carrouselNext, 7000);


//Fonction hover sur un le title pour scale l'image
titles.forEach(title => {
    title.addEventListener('mouseenter', event => {
        //pour eviter que le click se propage jusqu'au body
        event.stopPropagation();

        //on récupère le bon élément image avec parentNode
        title.parentNode.querySelector(".section_posts_card_img").classList.add("scale");
    });

    title.addEventListener('mouseleave', event => {
        //pour eviter que le click se propage jusqu'au body
        event.stopPropagation();

        title.parentNode.querySelector(".section_posts_card_img").classList.remove("scale");
    });
});