//Récupération de quelques éléments fixes
const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const nav_links = document.querySelector(".nav_links");
const burgermenu = document.querySelector(".burgermenu");
const mqlarge = window.matchMedia('(min-width : 1200px)');

//ouvrir ou fermer le header en mode mobile
burgermenu.addEventListener("click", event => {
    event.stopPropagation();

    //si le burger menu est ouvert
    nav_links.querySelectorAll('.nav_links_toggle').forEach(togglemenu => {
        if (togglemenu.classList.contains("menu_mobile_inside")) {
            nav_links.querySelectorAll('button').forEach(button => {
                button.classList.remove("dnone");
            });
            togglemenu.classList.toggle("menu_mobile_inside");
            togglemenu.querySelector('img').classList.toggle("menu_mobile_inside");
            nav_links.classList.toggle("menu_mobile_inside");
            let whichmenu = togglemenu.getAttribute("data-menu");//identifier l'attribut du menu
            document.getElementById(whichmenu).classList.toggle("menu_mobile_inside");//dérouler le menu
        }
    });

    //si non on ouvre / ferme tout
    body.classList.toggle("noscroll");
    nav_links.classList.toggle("menu_mobile");
    header.classList.toggle("menu_mobile");
    burgermenu.querySelector('.burgermenu_open').classList.toggle("menu_mobile");
    burgermenu.querySelector('.burgermenu_close').classList.toggle("menu_mobile");
});


//On balaye tous les boutons = togglemenu qui permettent de dérouler un dropdown menu en mode bureau
document.querySelectorAll('.nav_links_toggle').forEach(togglemenu => {
    togglemenu.addEventListener('click', event => {

        //pour eviter que le click se propage jusqu'au body
        event.stopPropagation();

        //dans le cas ou on veut ouvrir ou fermer le menu desktop en mode bureau < 1200px
        if (mqlarge.matches) {

            //si le menu était déjà ouvert, on le ferme (menu en cours)
            if (togglemenu.classList.contains("menu_desktop")) {
                body.classList.toggle("noscroll"); //stopper le scroll global du document
                togglemenu.classList.toggle("menu_desktop");//fontweight 600 sur le menu en cours
                togglemenu.querySelector('img').classList.toggle("menu_desktop");//faire tourner l'icone menu déroulé
                let whichmenu = togglemenu.getAttribute("data-menu");//identifier l'attribut du menu
                document.getElementById(whichmenu).classList.toggle("menu_desktop");//dérouler le menu
                return;
            };

            //si le menu cliqué n'est pas ouvert, on l'ouvre
            if (!togglemenu.classList.contains("menu_desktop")) {

                //s'il y un autre menu ouvert, on le ferme d'abord
                document.querySelectorAll('.nav_links_toggle').forEach(menuopen => {
                    if (menuopen.classList.contains("menu_desktop")) {
                        body.classList.toggle("noscroll"); //stopper le scroll global du document
                        menuopen.classList.toggle("menu_desktop");//fontweight 600 sur le menu en cours
                        menuopen.querySelector('img').classList.toggle("menu_desktop");//faire tourner l'icone menu déroulé
                        let whichmenu = menuopen.getAttribute("data-menu");//identifier l'attribut du menu
                        document.getElementById(whichmenu).classList.toggle("menu_desktop");//dérouler le menu
                    }
                });

                //puis on ouvre le menu
                body.classList.toggle("noscroll"); //stopper le scroll global du document
                togglemenu.classList.toggle("menu_desktop");//fontweight 600 sur le menu en cours
                togglemenu.querySelector('img').classList.toggle("menu_desktop");//faire tourner l'icone menu déroulé
                let whichmenu = togglemenu.getAttribute("data-menu");//identifier l'attribut du menu
                document.getElementById(whichmenu).classList.toggle("menu_desktop");//dérouler le menu
            }
        }

        //dans le cas mobile
        else {
            //on enleve tout
            nav_links.querySelectorAll("button").forEach(button => {
                button.classList.toggle("dnone");
            });

            //puis on remet contact et le menu en cours
            togglemenu.classList.toggle("dnone");
            nav_links.querySelector(("button[data-menu='menu_contact']")).classList.toggle("dnone");

            togglemenu.classList.toggle("menu_mobile_inside");
            togglemenu.querySelector('img').classList.toggle("menu_mobile_inside");//faire tourner l'icone menu déroulé

            nav_links.classList.toggle("menu_mobile_inside");

            //puis on ouvre le menu
            let whichmenu = togglemenu.getAttribute("data-menu");//identifier l'attribut du menu
            document.getElementById(whichmenu).classList.toggle("menu_mobile_inside");//dérouler le menu
        };

    })
});

//pour eviter que le click se propage au body quand on est dans le menu
document.querySelectorAll('.dropdown_menu').forEach(dropdown_menu => {
    dropdown_menu.addEventListener('click', event => {
        event.stopPropagation();
    });
});

//pour eviter que le click se propage au body quand on est dans la barre de nav
nav.addEventListener('click', event => {
    event.stopPropagation();
});


//Pour fermer le menu si on clique à coté
body.addEventListener('click', event => {
    document.querySelectorAll('.nav_links_toggle').forEach(togglemenu => {
        if (togglemenu.classList.contains("menu_desktop")) {
            body.classList.toggle("noscroll"); //stopper le scroll global du document
            togglemenu.classList.toggle("menu_desktop");//fontweight 600 sur le menu en cours
            togglemenu.querySelector('img').classList.toggle("menu_desktop");//faire tourner l'icone menu déroulé
            let whichmenu = togglemenu.getAttribute("data-menu");//identifier l'attribut du menu
            document.getElementById(whichmenu).classList.toggle("menu_desktop");//dérouler le menu
        }
    })
});