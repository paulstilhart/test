/*================================ SESSION STORAGE CLEAN =======================================*/
const trigger_clean_storage_js = document.querySelector('.trigger_clean_storage_js');//tous les triggers suivants

trigger_clean_storage_js.addEventListener("click", function (event) {
    event.stopPropagation();
    sessionStorage.clear();
});


/*================================ TRIGGER NEXT JS =======================================*/
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
    const question = input.name;
    const choice = input.value;
    sessionStorage.setItem(question, choice);
}));


function findMostAnswered() {
    const answerCounts = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const answer = sessionStorage.getItem(key);
        if (!answerCounts[answer]) {
            answerCounts[answer] = 1;
        } else {
            answerCounts[answer]++;
        }
    }
    let maxAnswerCount = 0;
    let mostAnswered = "";
    for (const answer in answerCounts) {
        if (answerCounts[answer] > maxAnswerCount) {
            maxAnswerCount = answerCounts[answer];
            mostAnswered = answer;
        }
    }
    return mostAnswered;
};

const trigger_profile_js = document.querySelectorAll('.trigger_profile_js');//tous les labels
trigger_profile_js.forEach(input => input.addEventListener("click", function (event) {
    event.stopPropagation();
    let mostAnswered = findMostAnswered();
    sessionStorage.setItem('profile', mostAnswered);
    console.log(mostAnswered);
    return mostAnswered;//STOCKE DANS LE SESSION STORAGE
}));

/*================================ TRIGGER PROFILE JS =======================================*/
const trigger_result_js = document.querySelector('.trigger_result_js');//tous les triggers suivants

trigger_result_js.addEventListener("change", function (event) {
    event.stopPropagation();
    let selectedOption = trigger_result_js.value;
    sessionStorage.setItem('region', selectedOption);
    let result = sessionStorage.getItem("profile");
    let idToFind = ('section_result_'+result);
    let currentSection = trigger_result_js.closest("section");//section courrante du trigger cliqué
    resultSection = document.getElementById(idToFind);
    currentSection.classList.remove('active');
    resultSection.classList.add('active');
    return selectedOption;//STOCKE DANS LE SESSION STORAGE
});