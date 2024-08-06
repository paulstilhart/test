//================ FONCTION POUR NE RIEN AFFICHER SI PAS DE DONNEES
export function noDatas(datas, tableId) {
    const tableContainer = document.querySelector(`#${tableId}_table_container`);
    const noResultsContainer = document.querySelector(`#${tableId}_pas_de_resultats`);

    if (datas.length === 0) {
        tableContainer.classList.add('dnone');
        noResultsContainer.classList.remove('dnone');
    }
}


// Fonction pour bloquer les formulaires qui sont que pour le front
export function formsOnlyFront(formSelector) {
    // Récupérer le bouton de soumission (submit) dans le formulaire spécifié par le sélecteur formSelector
    const submitButton = document.querySelector(`${formSelector} button[type="submit"]`);

    // Ajouter un écouteur d'événements 'input' au document
    document.addEventListener('input', event => {
        // Trouver l'élément formulaire le plus proche de la cible de l'événement dans le formulaire spécifié par formSelector
        const form = event.target.closest(formSelector);

        if (form) {
            // Bascule la classe 'button_grey_soft' sur le bouton de soumission en fonction de la validité du formulaire
            submitButton.classList.toggle('button_grey_soft', !form.checkValidity());
        }
    });

    // Ajouter un écouteur d'événements 'submit' au document
    document.addEventListener('submit', event => {
        // Trouver l'élément formulaire le plus proche de la cible de l'événement dans le formulaire spécifié par formSelector
        const form = event.target.closest(formSelector);

        if (form) {
            // Empêche le comportement par défaut de soumission du formulaire
            event.preventDefault();
        }
    });
}


//Fonction SPECIFIQUE pour la table sélection parrain
export function createTableSelectionParrain(datas, tableId) {
    const tableTbody = document.querySelector(`#${tableId}>tbody`);
    tableTbody.innerHTML = datas.map((rowData, rowIndex) => `
        <tr>
            ${rowData.map((cellData, cellIndex) => `<td>${cellData}</td>`).join('')}
            <td><button class="button_classic button_green" data-row="${rowIndex}" data-name="${rowData[1]}">Sélectionner</button></td>
        </tr>
    `).join('');

    // Ajouter l'écouteur de clic sur les boutons "Sélectionner"
    const buttons = document.querySelectorAll(`#${tableId} td button`);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const rowIndex = button.getAttribute('data-row');
            const name = button.getAttribute('data-name');

            document.querySelector(`#${tableId}_table_container`).classList.add('dnone');
            document.querySelector(`#${tableId}_code_valable`).classList.remove('dnone');

            const parrainChoisi = { rowIndex: parseInt(rowIndex), name: name, };
            return parrainChoisi;
        });
    });
}



// Fonction pour réinitialiser la sélection des états
function resetStatesSelection(tableId) {
    const checkboxes = document.querySelectorAll(`#${tableId}_statuts_container input[type="checkbox"]`);
    document.querySelector(`#${tableId}_statuts_container .statut_span`).textContent = 'Multiples';
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
}

//================ FONCTION QUI INSERE LES DONNEES DANS TBODY
//================ ENTREE = tableau de tableaux non triés / tableId
//================ RETURN tbody crée dans le DOM
function generateTbody(datas, tableId) {
    const tableTbody = document.querySelector(`#${tableId} tbody`);
    tableTbody.textContent = ""; // On réinitialise

    const fragment = document.createDocumentFragment(); //fragment de document pour stocker les lignes de la table

    for (const data of datas) {// Parcourir chaque ligne de données dans le tableau "datas"
        const newRow = document.createElement("tr");//nouvelle ligne de la table tr
        const rowHTML = data.map((value, index) => {
            if (index === 8) {
                const span = document.createElement('span');

                // Ajoutez la classe en fonction du texte
                if (value === 'Expiré') { span.className = 'span_expire'; }
                else if (value === 'En cours') { span.className = 'span_encours'; }
                else if (value === 'Terminé') { span.className = 'span_termine'; }

                span.textContent = value;
                return `<td>${span.outerHTML}</td>`;
            } else {
                return `<td>${value}</td>`;
            }
        }).join('');// Générer le contenu HTML de la ligne complète
        newRow.insertAdjacentHTML('beforeend', rowHTML);// Insérer le contenu HTML de la ligne dans la nouvelle ligne
        fragment.appendChild(newRow);// Ajouter la ligne complète au fragment de document
    }

    tableTbody.appendChild(fragment);// Ajouter toutes les lignes d'un coup dans le DOM
}

//================ FONCTION QUI TRIE LES DONNEES ET RETOURNE UN TABLEAU TRIE
//================ ENTREE = tableau de tableaux non triés / type de tri / index de la colonne
//================ RETURN sortedData = tableau de tableaux non triés
function triData(datas, type, index, startDate, endDate, order = 'asc') {
    const copiedDatas = datas.slice();//copie du tableau avec slice() pour travailler sur une copie lors du tri

    const sortOrder = order === 'desc' ? -1 : 1; // Détermine l'ordre de tri (ascendant: 1, descendant: -1)

    const sortedData = copiedDatas.sort((a, b) => {// méthode sort() pour trier
        switch (type) {
            case "numeric": return sortOrder * (parseInt(a[index]) - parseInt(b[index])); //tri numérique des entiers avec parseInt()
            case "alphabetic": return sortOrder * ((a[index] && b[index]) ? a[index].localeCompare(b[index]) : 0);
            case "date": return sortOrder * (new Date(a[index]) - new Date(b[index]));
            default: return 0;//pour éviter un bug
        }
    });

    if (startDate && endDate) {// Filtrer les données par date si les dates de début et de fin sont fournies
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        console.log(startDateObj);
        console.log(endDateObj);

        function convertDate(dateString) {
            const [day, month, year] = dateString.split('/');
            return `${year}-${month}-${day}`;
        }

        const filteredData = sortedData.filter((row) => {
            const rowDate = new Date(convertDate(row[index]));
            return rowDate >= startDateObj && rowDate <= endDateObj;
        });
        return filteredData;
    }
    return sortedData;// On renvoie le tableau trié.
}

//================ FONCTION générer et paginer la table
export function generateAndPaginateTable(datas, tableId, itemsPerPage, currentPage, sorttype, sortindex, order) {
    //================ TRI DES DONNEES = ON MET À JOUR DATA
    if (sorttype && sortindex) {
        datas = triData(datas, sorttype, sortindex, null, null, order);
    }

    //================ DEFINITION DE pageData = DONNEES À AFFICHER DE LA PAGE
    const totalPages = Math.ceil(datas.length / itemsPerPage);//nombre total de page pour bien paginer
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    const startIndex = (currentPage - 1) * itemsPerPage;//index de départ des données sur la page actuelle
    let pageData = datas.slice(startIndex, startIndex + itemsPerPage);//on extrait seulement les données à afficher avec slice()

    //================ INSERTION DE pageData dans tbody
    generateTbody(pageData, tableId);

    //================ PAGINATION
    const paginationContainer = document.getElementById(`${tableId}_pagination`)
    if (totalPages < 2) {//si moins de 1 page, on supprimer le conteneur de pagination et on sort
        paginationContainer.classList.add('dnone');
        return;
    }
    else {
        paginationContainer.classList.remove('dnone');
        //On recupere le conteneur des boutons pages, et on réinitiliase
        const paginationNumbersContainer = paginationContainer.children[1];
        paginationNumbersContainer.textContent = "";

        //Les 2 boutons
        const btnPrev = document.querySelector(`#${tableId}_pagination button:first-of-type`);
        const btnNext = document.querySelector(`#${tableId}_pagination button:last-of-type`);


        const pageButtons = document.createDocumentFragment();

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberButton = document.createElement("button");
            pageNumberButton.innerText = i;
            pageNumberButton.classList.toggle('button_green', i === currentPage);
            pageNumberButton.addEventListener("click", () => {
                generateAndPaginateTable(datas, tableId, itemsPerPage, i, sorttype, sortindex, order);
            });
            pageButtons.appendChild(pageNumberButton);
        }
        paginationNumbersContainer.appendChild(pageButtons);

        // Gestion des clics sur le bouton "Précédent"
        btnPrev.addEventListener("click", () => {
            if (currentPage > 1) {
                generateAndPaginateTable(datas, tableId, itemsPerPage, currentPage - 1, sorttype, sortindex, order);
            }
        });

        // Gestion des clics sur le bouton "Suivant"
        btnNext.addEventListener("click", () => {
            if (currentPage < totalPages) {
                generateAndPaginateTable(datas, tableId, itemsPerPage, currentPage + 1, sorttype, sortindex, order);
            }
        });

        btnPrev.disabled = currentPage === 1;
        btnNext.disabled = currentPage === totalPages;
    }
}

//================ FONCTION pour trier au clic sur les th
export function orderByThead(datas, tableId, itemsPerPage, currentPage) {
    const tableThead = document.querySelector(`#${tableId} thead`);
    let lastClickedTh = null; // Stocker le th précédemment cliqué
    let currentOrder = "asc";

    // Ajouter un seul écouteur d'événement sur le thead pour les clics sur les en-têtes de colonnes
    tableThead.addEventListener('click', (event) => {
        if (event.target.tagName === 'TH') {

            // Le th qui vient d'être cliqué
            const currentTh = event.target;
            // Inverser l'ordre de tri si le même en-tête est cliqué, sinon réinitialiser à asc.
            currentOrder = (currentTh === lastClickedTh && currentOrder === "asc") ? "desc" : "asc";
            // Mettre à jour l'en-tête précédemment cliqué
            lastClickedTh = currentTh;

            resetStatesSelection(tableId);
            const sortType = event.target.getAttribute('data-sorttype');
            const sortIndex = event.target.getAttribute('data-sortindex');
            generateAndPaginateTable(datas, tableId, itemsPerPage, currentPage, sortType, sortIndex, currentOrder);
        }
    });
}

//================ FONCTION en fonction des statuts
export function orderbyStates(datas, tableId, itemsPerPage, currentPage) {
    const statutsContainer = document.querySelector(`#${tableId}_statuts_container`);
    const checkboxes = statutsContainer.querySelectorAll('input[type="checkbox"]');
    const statutSpan = statutsContainer.querySelector('.statut_span');

    function normalizeStatus(status) {
        const normalizedStatus = status.toLowerCase().trim();
        if (normalizedStatus === 'encours') return 'en cours';
        if (normalizedStatus === 'termine') return 'terminé';
        return normalizedStatus;
    }


    const updateTable = () => {
        const selectedStates = new Set(Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => normalizeStatus(checkbox.parentNode.getAttribute('data-state'))));

        if (selectedStates.size === 1) { statutSpan.textContent = selectedStates.values().next().value; }
        else if (selectedStates.size > 1) { statutSpan.textContent = 'Multiples'; }
        else { statutSpan.textContent = 'Aucun'; }

        const filteredData = datas.filter(data => selectedStates.has(normalizeStatus(data[8])));
        generateAndPaginateTable(filteredData, tableId, itemsPerPage, currentPage);
    };

    // Utilisation de la délégation d'événements pour gérer les changements de case à cocher
    statutsContainer.addEventListener('change', (event) => {
        if (event.target.type === 'checkbox') {
            updateTable();
        }
    });

    // Gérer le clic sur les div pour cocher/décocher automatiquement le checkbox concerné
    const statutsDivs = statutsContainer.querySelectorAll('.statuts_checkbox_container > div');
    statutsDivs.forEach(div => {
        const checkbox = div.querySelector('input[type="checkbox"]');
        div.addEventListener('click', (event) => {
            // Vérifier si le clic vient de la case à cocher ou de son étiquette (<p>)
            if (!event.target.matches('input[type="checkbox"]')) {
                checkbox.checked = !checkbox.checked;
            }
            updateTable();
        });
    });
    //Pour ouvrir le menu
    document.querySelector(`#${tableId}_statuts_container > div > p`).addEventListener('click', () => {
        statutsContainer.classList.toggle('active');
    });

    // Fermer le menu si on clique en dehors du statuts_checkbox_container
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (!statutsContainer.contains(targetElement) && !targetElement.closest(`#${tableId}_statuts_container`)) {
            statutsContainer.classList.remove('active');
        }
    });

    //Pour initialiser au début sur ce qui est fixé dans le html
    updateTable();
}



//================ FONCTION pour filtrer avec les dates
export function addDateFilterFunctionality(datas1, datas2, tableId1, tableId2, itemsPerPage1, itemsPerPage2, currentPage) {
    const form = document.getElementById('js_sorted_dates');
    const startDateInput = document.getElementById('suivi_parrainage_start');
    const endDateInput = document.getElementById('suivi_parrainage_end');


    function resetTable() {
        if (form.checkValidity()) {
            form.reset();
            form.querySelector('[type="submit"]').classList.add('button_grey_soft');

            // Réafficher les tables non triées
            const sortedData1 = triData(datas1, 'date', 2); // Tri sans filtre
            const sortedData2 = triData(datas2, 'date', 2); // Tri sans filtre
            generateAndPaginateTable(sortedData1, tableId1, itemsPerPage1, currentPage, 'date', 2);
            generateAndPaginateTable(sortedData2, tableId2, itemsPerPage2, currentPage, 'date', 2);
        }
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        resetStatesSelection(tableId1);
        resetStatesSelection(tableId2);

        //On crée 2 objets JavaScript avec Date()
        //Les 2 objets ont directement la norme ISO 8601 AAAA-MM-JJ car c'est un input de type date html 5
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        const sortedData1 = triData(datas1, 'date', 2, startDate, endDate);
        const sortedData2 = triData(datas2, 'date', 2, startDate, endDate);

        generateAndPaginateTable(sortedData1, tableId1, itemsPerPage1, currentPage, 'date', 2);
        generateAndPaginateTable(sortedData2, tableId2, itemsPerPage2, currentPage, 'date', 2);
    });

    // Ajouter un écouteur d'événements pour le clic sur l'input de date
    startDateInput.addEventListener('click', resetTable);
    endDateInput.addEventListener('click', resetTable);
}

//================ FONCTION pour chercher dans l'input
export function search(datas, tableId, itemsPerPage, currentPage, sorttype, sortindex) {
    const searchButton = document.querySelector(`#${tableId}_search>button`);
    const searchInput = document.querySelector(`#${tableId}_search>input`);

    // Fonction de recherche pour effectuer la recherche
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();// Récupérer la valeur de recherche et la formater en minuscules
        const filteredData = datas.filter(data => {
            const secondElement = data[1] && data[1].toString().toLowerCase();
            return secondElement && secondElement.includes(searchTerm);
        });
        generateAndPaginateTable(filteredData, tableId, itemsPerPage, currentPage, sorttype, sortindex);
    }

    // Écouteur d'événement pour le clic sur le bouton de recherche
    searchButton.addEventListener("click", function () {
        performSearch();
        resetStatesSelection(tableId);
    });

    // Écouteur d'événement pour la touche "Entrée" dans le champ de saisie
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
            resetStatesSelection(tableId);
        }
    });

    // Écouteur d'événement pour détecter lorsque l'utilisateur vide le champ de saisie
    searchInput.addEventListener("input", function () {
        if (searchInput.value.trim() === "") {
            // Si le champ de saisie est vide, réinitialiser la table en affichant toutes les données d'origine
            generateAndPaginateTable(datas, tableId, itemsPerPage, currentPage, sorttype, sortindex);
        }
    });
}

