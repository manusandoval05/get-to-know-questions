import { closeAllModals } from "./modal.js";
import { createLeaderBoard } from "./leaderboard.js";

export const initiateStartGameButton = () => {

    (document.querySelectorAll(".start-game") || []).forEach( $button => {
        const $mainScreen = document.getElementById("main-screen");
        const $gameScreen = document.getElementById("game-screen");
        const $playerListDOM = document.getElementById($button.dataset.target); 
        const $leaderboardContainer = document.getElementById("leaderboard");

        $button.addEventListener("click", () => {
            let playerList = [];
            $playerListDOM.querySelectorAll(".field").forEach( $playerField => {
                const playerName = $playerField.querySelector(".has-icons-left").querySelector(".player-name"); 
                playerList.push(playerName.value);
            })
            closeAllModals();

            let scoreboard = createLeaderBoard(playerList, $leaderboardContainer);
            $mainScreen.classList.add("is-hidden");
            $gameScreen.classList.remove("is-hidden");

            // Start game Logic
            gameEventSystem(scoreboard, $gameScreen);
        });
        
    });  
};

const gameEventSystem = (scoreboard, $gameScreen) => {
    
};