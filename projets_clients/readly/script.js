/*================================ TRIGGER JS =======================================*/
const trigger_next_js = document.querySelectorAll('.trigger_next_js');//tous les triggers suivants

trigger_next_js.forEach(trigger => trigger.addEventListener("click", function (event) {
    event.stopPropagation();
    let currentSection = trigger.closest("section");//section courrante du trigger cliqué
    let nextSection = currentSection.nextElementSibling;//section suivante
    currentSection.classList.remove('active');
    nextSection.classList.add('active');
}));

/*================================ LABEL INPUT SELECTIONNE =======================================*/
const inputs = document.querySelectorAll('input');//tous les labels

inputs.forEach(input => input.addEventListener("click", function (event) {
    event.stopPropagation();
    let choice = input.id;
}));