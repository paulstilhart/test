
window.addEventListener("DOMContentLoaded", function() {
  var fieldsets = document.querySelectorAll("[data-lmg-dropdown-select], [data-lmg-dropdown-autocomplete]");

  fieldsets.forEach(function(fieldset) {
    // Sélectionner l'élément select
    var selectElement = fieldset.querySelector('select');
    var ulElement = fieldset.querySelector('ul');
    var liElement = fieldset.querySelector('li');

    if (selectElement) {
      // Parcourir chaque option dans le select
      for (var i = 0; i < selectElement.options.length; i++) {
        // Cloner l'élément li
        var clonedLiElement = liElement.cloneNode(true);
        // Récupérer la valeur et le texte de l'option
        var optionValue = selectElement.options[i].value;
        var optionText = selectElement.options[i].innerText;
        // Définir le texte interne de l'élément li cloné avec la valeur de l'option
        clonedLiElement.querySelector('span').innerText = optionText;
        clonedLiElement.setAttribute("data-value", optionValue);
        // Ajouter à la liste
        if (i === 0) {
          // Remplacer l'élément li cloné à la liste
          ulElement.replaceChild(clonedLiElement, liElement);
        }
        else {
          // Ajouter l'élément li cloné à la liste
          ulElement.appendChild(clonedLiElement);
        }
      }

      // Ajoutez un événement de changement sur le select
      selectElement.addEventListener("change", function() {
        // Récupérez le texte sélectionné du select
        var selectedValue = selectElement.options[selectElement.selectedIndex].text;
        // Alimentez la valeur de l'input avec la valeur sélectionnée du select
        inputText.value = selectedValue;
      });
    }


    var inputText = fieldset.querySelector("input[type='text']");
    var listeItems = fieldset.querySelectorAll("ul li");
    const dropdown = new Dropdown(fieldset.querySelector('[data-lmg-dropdown-container]'));
    console.log (dropdown);
    //modifie la valeur de l'input et du select au clic dans la liste
    listeItems.forEach(function(item) {
      item.addEventListener("click", function() {

        inputText.value = item.getAttribute("data-value");
        if (selectElement) {
          selectElement.value = item.getAttribute("data-value");
        }
        inputText.click();
      });
    });


  });
});
//
// export function initializeDropdownSelect(): void {
//   window.addEventListener("DOMContentLoaded", () => {
//     const fieldsets = document.querySelectorAll("[data-lmg-dropdown-select], [data-lmg-dropdown-autocomplete]");
//
//     fieldsets.forEach((fieldset: Element) => {
//       const selectElement = fieldset.querySelector('select') as HTMLSelectElement;
//       const ulElement = fieldset.querySelector('ul') as HTMLUListElement;
//       const liElement = fieldset.querySelector('li') as HTMLLIElement;
//
//       for (let i = 0; i < selectElement.options.length; i++) {
//         const clonedLiElement = liElement.cloneNode(true) as HTMLLIElement;
//         const optionValue = selectElement.options[i].value;
//         const optionText = selectElement.options[i].innerText;
//
//         clonedLiElement.innerText = optionText;
//         clonedLiElement.setAttribute("data-value", optionValue);
//
//         if (i === 0) {
//           ulElement.replaceChild(clonedLiElement, liElement);
//         } else {
//           ulElement.appendChild(clonedLiElement);
//         }
//       }
//
//       const inputText = fieldset.querySelector("input[type='text']") as HTMLInputElement;
//       const listeItems = fieldset.querySelectorAll("ul li");
//
//       // Assurez-vous que la classe Dropdown est définie quelque part dans votre code TypeScript
//       const dropdown = new Dropdown(fieldset.querySelector('[data-lmg-dropdown-container]') as HTMLElement);
//
//       listeItems.forEach((item: Element) => {
//         item.addEventListener("click", () => {
//           inputText.value = item.textContent || '';
//           selectElement.value = item.getAttribute("data-value") || '';
//           dropdown.hide();
//         });
//       });
//
//       selectElement.addEventListener("change", () => {
//         const selectedValue = selectElement.options[selectElement.selectedIndex].text;
//         inputText.value = selectedValue;
//       });
//     });
//   });
// }
