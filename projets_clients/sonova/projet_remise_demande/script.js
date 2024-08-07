const remisetableau = {
    gamme1: [
        { value: "remise1", text: "Remise 1" },
        { value: "remise2", text: "Remise 2" }
    ],
    gamme2: [
        { value: "remise3", text: "Remise 3" },
        { value: "remise4", text: "Remise 4" }
    ],
    gamme3: [
        { value: "remise5", text: "Remise 5" },
        { value: "remise6", text: "Remise 6" }
    ]
};

const demandeformulaire = document.getElementById('demandeformulaire');
const remiseSelect = document.getElementById('remise');
const boutonSoumission = document.querySelector('#demandeformulaire>button');



function discountOption(){
    document.getElementById('gamme').addEventListener('change', function() {
        const gammeChoisie = this.value;
    
        // Clear previous options
        remiseSelect.innerHTML = '<option value="" disabled selected>Sélectionner une remise</option>';
    
        if (gammeChoisie && remisetableau[gammeChoisie]) {
            remisetableau[gammeChoisie].forEach(option => {
                const newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.textContent = option.text;
                remiseSelect.appendChild(newOption);
            });
    
            remiseSelect.setAttribute('aria-disabled', 'false');
        } else {
            remiseSelect.setAttribute('aria-disabled', 'true');
        }
    });
}


function checkFormValidity() {
    const updateButtonState = () => {
        if (demandeformulaire.checkValidity()) {
            boutonSoumission.disabled = false;//boutonSoumission.setAttribute("disabled", "");
        } else {
            boutonSoumission.disabled = true;//boutonSoumission.removeAttribute("disabled");
        }
    };

    demandeformulaire.addEventListener('input', updateButtonState);
    // Vérifie l'état initial au chargement de la page
    updateButtonState();
}



discountOption();
checkFormValidity();



