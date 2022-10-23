import { deleteElementButton } from "./delete-player-button.js";
import { closeAllModals } from "./modal.js";
import { playerInputField } from "./player-input-field.js";

export default class StartGameForm{
    constructor(id){
        const modal = document.getElementById(id)

        this.createPlayerButton = modal.querySelector(".player-create-button");
        console.log(this.createPlayerButton);
        this.fieldset = modal.querySelector(".player-list"); 
        this.startGameButton = modal.querySelector(".start-game");

        console.log(this.startGameButton);
        if (!this.fieldset.children.length){
            this.fieldset.appendChild(playerInputField(this.fieldset.children.length + 1));
        }

        this.createPlayerButton.onclick = () => this.fieldset.appendChild(playerInputField(this.fieldset.children.length + 1));
    }
    onClick(callback) {
        this.startGameButton.onsubmit = e => {
            console.log(this.startGameButton);
            e.preventDefault();
            closeAllModals(); 
            const players = this.fieldset.querySelectorAll(".player-name").map($element => $element.value);

            callback(players);
        }
    }
}