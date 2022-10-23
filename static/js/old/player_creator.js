import {initiateDeleteButton} from "./components/delete_button.js";

document.addEventListener("DOMContentLoaded", () => {
    const $button = document.getElementById("player-creator-button");
    const $playerList = document.getElementById($button.dataset.target);

    $button.addEventListener("click", () =>{
        const newPlayer = document.createElement("div");
        newPlayer.classList.add("field", "has-addons");
        newPlayer.innerHTML = `
            <p class="control has-icons-left">
                <input class="input player-name" type="text" placeholder="Player ${$playerList.querySelectorAll(".field").length + 1}">
                    <span class="icon is-medium is-left">
                    <i class="bi bi-person-fill"></i>
                </span>
            </p>
            <p class="control">
                <button class="button is-danger is-outlined delete-player">
                    <span class="icon is-medium">
                        <i class="bi bi-trash"></i>
                    </span>
                </button>
            </p>
        `;
        $playerList.appendChild(newPlayer);

        initiateDeleteButton(".field", ".delete-player");
    });
}); 