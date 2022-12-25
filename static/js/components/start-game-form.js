import { deleteElementButton } from "./delete-player-button.js";
import Alert from "./alert.js";
import { closeAllModals } from "./modal.js";
import { playerInputFieldCreator } from "./player-input-field.js";

export default class StartGameForm{
    constructor(id){
        const modal = document.getElementById(id)

        this.createPlayerButton = modal.querySelector(".player-create-button");
        this.notificationContainer = modal.querySelector(".notification-box");
        this.fieldset = modal.querySelector(".player-list"); 
        this.startGameButton = modal.querySelector(".start-game");

        if (!this.fieldset.children.length){
            this.fieldset.appendChild(playerInputFieldCreator(this.fieldset.children.length + 1));
        }

        this.createPlayerButton.onclick = () => this.fieldset.appendChild(playerInputFieldCreator(this.fieldset.children.length + 1));
    }
    onClick(callback) {
        this.startGameButton.onclick = () =>{

            const players = Array.from(this.fieldset.querySelectorAll(".player-name")).map(($element, index) => {
                if(!$element.value){
                    return `Player ${index + 1}`;
                }
                return $element.value; 
            });



            callback(players);
        }
    }
    showAlert(message, colorClass){
        if(this.notificationContainer.children.length > 0){
            return;
        }
        const alert = new Alert(message, colorClass);
        this.notificationContainer.appendChild(alert.element);
    }
    startGame(){
        const $gameScreen = document.getElementById("game-screen");
        const $mainScreen = document.getElementById("main-screen");

        $gameScreen.classList.remove("is-hidden");
        $mainScreen.classList.add("is-hidden");

        closeAllModals();
    }
}