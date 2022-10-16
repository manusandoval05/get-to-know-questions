import { closeAllModals } from "./modal.js";
import { createLeaderBoard } from "./leaderboard.js";
import { generateRandomQuestion } from "../question_generator.js";

export const initiateStartGameButton = () => {

    (document.querySelectorAll(".start-game") || []).forEach( $button => {
        const $mainScreen = document.getElementById("main-screen");
        const $gameScreen = document.getElementById("game-screen");
        const $playerListDOM = document.getElementById($button.dataset.target); 
        const $leaderboardContainer = document.getElementById("leaderboard");

        $button.addEventListener("click", () => {

            if($playerListDOM.querySelectorAll(".field").length  <= 1){
                const $validationMessage = document.getElementById("not-enough-players")
                $validationMessage.classList.remove("is-hidden");
                return;
            }

            let playerList = [];
            $playerListDOM.querySelectorAll(".field").forEach( $playerField => {
                const playerName = $playerField.querySelector(".has-icons-left").querySelector(".player-name"); 
                playerList.push(playerName.value);
            })
            closeAllModals();

            let scoreboard = createLeaderBoard(playerList, $leaderboardContainer);
            $mainScreen.classList.add("is-hidden");
            $gameScreen.classList.remove("is-hidden");

            const $question = document.getElementById("current-question");
            const $currentPlayer = document.getElementById("current-player");

            const currentScoreboardPlayer = randomKeyValue(scoreboard);
            console.log(currentScoreboardPlayer); 
            $question.innerText = generateRandomQuestion();
            $currentPlayer.innerText = currentScoreboardPlayer.name;
            // Start game Logic
            gameEventSystem(scoreboard, $gameScreen, currentScoreboardPlayer); 
        });
        
    });  
};

const randomKeyValue = obj =>{
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return obj[keys[randomIndex]];
}
const gameEventSystem = (scoreboard, $gameScreen, currentPlayer) => {
    
};