import Model from "./model.js";
import View from "./view.js";

import {initiateModals} from "./components/modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const model = new Model(); 
    const view = new View(); 

    view.setModel(model);
    model.setView(view); 

    initiateExternalScripts();
});

function initiateExternalScripts(){
    initiateModals();
}