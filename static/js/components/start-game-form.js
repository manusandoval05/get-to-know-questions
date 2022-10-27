import { deleteElementButton } from "./delete-player-button.js";
import { closeAllModals } from "./modal.js";
import { playerInputField } from "./player-input-field.js";

export default class StartGameForm{
    constructor(id){
        const modal = document.getElementById(id)

        this.createPlayerButton = modal.querySelector(".player-create-button");
        this.fieldset = modal.querySelector(".player-list"); 
        this.startGameButton = modal.querySelector(".start-game");

        if (!this.fieldset.children.length){
            this.fieldset.appendChild(playerInputField(this.fieldset.children.length + 1));
        }

        this.createPlayerButton.onclick = () => this.fieldset.appendChild(playerInputField(this.fieldset.children.length + 1));
    }
    onClick(callback) {
        this.startGameButton.onclick = () =>{
            closeAllModals();
            const $gameScreen = document.getElementById("game-screen");
            const $mainScreen = document.getElementById("main-screen");

            $gameScreen.classList.remove("is-hidden");
            $mainScreen.classList.add("is-hidden");
            const players = Array.from(this.fieldset.querySelectorAll(".player-name")).map($element => $element.value);

            callback(players);
        }
    }
}