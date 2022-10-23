import Model from "./model.js";
import View from "./view.js";

import {initiateModals} from "./components/modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const model = new Model(); 
    const view = new View(); 

    model.setView(view); 
    view.setModel(model);

    initiateExternalScripts();
});

function initiateExternalScripts(){
    initiateModals();
}