const request_form = document.getElementById('request_form');
const button = document.querySelector('#request_form>button');

console.dir(request_form);


request_form.addEventListener('input',(event) => {
    console.log(event);
    if (request_form.checkValidity()){
        button.setAttribute("disabled", "false");
    }
    else{
        button.setAttribute("disabled", "true");
    }
});


