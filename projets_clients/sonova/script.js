//Importation des données
import { datas_selection_parrain } from './module_datas.js';
import { datas_parrains } from './module_datas.js';
import { datas_filleuls } from './module_datas.js';


//Importation des fonctions
import { noDatas } from './module_functions.js';
import { createTableSelectionParrain } from './module_functions.js';
import { generateAndPaginateTable } from './module_functions.js';
import { orderByThead } from './module_functions.js';
import { orderbyStates } from './module_functions.js';
import { search } from './module_functions.js';
import { formsOnlyFront } from './module_functions.js';
import { addDateFilterFunctionality } from './module_functions.js';


//Pour ne rien afficher si besoin
noDatas(datas_selection_parrain, "js_table_selection_parrain");
noDatas(datas_parrains, "js_table_parrains");
noDatas(datas_filleuls, "js_table_filleuls");


//constantes de départ
const table_parrains_itemsPerPage = 8;
const table_filleuls_itemsPerPage = 3;

//Creation des 3 tables
//Les thead sont fixes et créees dans le html + Le tbody est vide mais les balises sont déjà crée dans le html
createTableSelectionParrain(datas_selection_parrain, "js_table_selection_parrain");

generateAndPaginateTable(datas_parrains, "js_table_parrains", table_parrains_itemsPerPage, 1, "alphabetic", 1);
generateAndPaginateTable(datas_filleuls, "js_table_filleuls", table_filleuls_itemsPerPage, 1, "alphabetic", 1);

orderByThead(datas_parrains, "js_table_parrains", table_parrains_itemsPerPage, 1);
orderByThead(datas_filleuls, "js_table_filleuls", table_filleuls_itemsPerPage, 1);


orderbyStates(datas_parrains, "js_table_parrains", table_parrains_itemsPerPage, 1);
orderbyStates(datas_filleuls, "js_table_filleuls", table_filleuls_itemsPerPage, 1);


search(datas_parrains, "js_table_parrains", table_parrains_itemsPerPage, 1, "alphabetic", 1);
search(datas_filleuls, "js_table_filleuls", table_filleuls_itemsPerPage, 1, "alphabetic", 1);


//Pour bloquer les boutons de formulaires qui servent que pour le front
formsOnlyFront('.js_forms_only_front');


addDateFilterFunctionality(datas_parrains, datas_filleuls, "js_table_parrains", "js_table_filleuls", table_parrains_itemsPerPage, table_filleuls_itemsPerPage, 1);




