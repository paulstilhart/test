const discountOptions = {
    range_1: [
        { value: "discount_1", text: "Remise 1" },
        { value: "discount_2", text: "Remise 2" }
    ],
    range_2: [
        { value: "discount_3", text: "Remise 3" },
        { value: "discount_4", text: "Remise 4" }
    ],
    range_3: [
        { value: "discount_5", text: "Remise 5" },
        { value: "discount_6", text: "Remise 6" }
    ]
};

const request_form = document.getElementById('request_form');
const discountSelect = document.getElementById('discount');
const button_submit = document.querySelector('#request_form>button');



function checkFormValidity() {
    request_form.addEventListener('input', (event) => {
        if (request_form.checkValidity()) {
            button_submit.setAttribute("disabled", "false");
        } else {
            button_submit.setAttribute("disabled", "true");
        }
    });
}


function discountOption(){
    document.getElementById('range').addEventListener('change', function() {
        const selectedRange = this.value;
        console.log(selectedRange);
    
        // Clear previous options
        discountSelect.innerHTML = '<option value="" disabled selected>Sélectionner une remise</option>';
    
        if (selectedRange && discountOptions[selectedRange]) {
            discountOptions[selectedRange].forEach(option => {
                const newOption = document.createElement('option');
                newOption.value = option.value;
                newOption.textContent = option.text;
                discountSelect.appendChild(newOption);
            });
    
            discountSelect.setAttribute('aria-disabled', 'false');
        } else {
            discountSelect.setAttribute('aria-disabled', 'true');
        }
    });
}




discountOption();
checkFormValidity();



