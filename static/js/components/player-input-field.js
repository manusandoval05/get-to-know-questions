import { deleteElementButton } from "./delete-player-button.js";
import FormAlert from "./form-alert.js";

export const playerInputFieldCreator = number => {
    const $playerField = document.createElement("div"); $playerField.classList.add("field", "has-addons");
    $playerField.innerHTML = `
        <p class="control has-icons-left">
            <input class="input player-name" type="text" placeholder="Player ${number}">
            <span class="icon is-medium is-left">
                <i class="bi bi-person-fill"></i>
            </span>
        </p>
        <p class="control">
            
        </p>
    `; 
            
    const $removeButton = deleteElementButton($playerField);

    $playerField.children[1].appendChild($removeButton);

    return $playerField
};