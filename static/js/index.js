import { initiateDeleteButton } from "./components/delete_button.js";
import { initiateModals } from "./components/modal.js";
import { initiateStartGameButton } from "./components/start_game_button.js";

initiateDeleteButton(".field", ".delete-player");
initiateModals(); 
initiateStartGameButton();