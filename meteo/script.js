/* 
Lien du site API
https://api.ipma.pt/

Lien sur github:
https://paulstilhart.github.io/test/meteo/

*/

//Définitions de quelques paramètres
console.log("Bienvenue dans la console!");
const api = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json";
console.log("Le lien de l'api de Lisbonne est: ", api);

//Récupération des éléments constants du DOM
const titre = document.querySelector("h1");
const container = document.getElementById("container");


//Récupération des données de l'API
//async await permet d'éviter d'avoir pleins de .then les un à la suite des autres
//Plus de précisions ici https://www.youtube.com/watch?v=KLGCGDkn0gc&t=301s&ab_channel=LeDesignerduWeb

async function getWeather() {
    let reponse = await fetch(api); //on attend la réponse de fetch et on le stocke dans une variable
    let data = await reponse.json();//on transforme la réponse en json et on le stocke dans data
    return data;
};



async function dataCreate() {
    let data = await getWeather();
    console.log("Les données de l'api sont", data);
    titre.innerHTML = ("Heure de mise à jour : " + data.dataUpdate);

    let dataWeather = data.data;

    for (let dataWeatherDay of dataWeather) {
        console.log(dataWeatherDay);

        //Création du lien pour chaque article
        let dayContainer = document.createElement("div");//element crée mais ne fait pas encore parti du DOM
        container.appendChild(dayContainer);//on insère l'élément dans le DOM
        dayContainer.classList.add("dayContainer");

        //Création de l'élément forecastDate
        let forecastDate = document.createElement("p");
        dayContainer.appendChild(forecastDate);
        forecastDate.innerHTML = ("Jour : " + dataWeatherDay.forecastDate);

        //Création de l'élément tMin
        let tMin = document.createElement("p");
        dayContainer.appendChild(tMin);
        tMin.innerHTML = ("Température minimale : " + dataWeatherDay.tMin + "°");

        //Création de l'élément tMax
        let tMax = document.createElement("p");
        dayContainer.appendChild(tMax);
        tMax.innerHTML = ("Température maximale : " + dataWeatherDay.tMax + "°");

        //Création de l'élément precipitaProb
        let precipitaProb = document.createElement("p");
        dayContainer.appendChild(precipitaProb);
        precipitaProb.innerHTML = ("Probabilité de précipitation : " + dataWeatherDay.precipitaProb +" %");
    }
};

dataCreate();

