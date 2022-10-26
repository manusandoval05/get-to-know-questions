import StartGameForm from "./components/start-game-form.js";

export default class View{
    constructor(){
        this.model = null; 
        this.scoreboard = document.getElementById("scoreboard");
        this.defaultModal = new StartGameForm("party-multiplayer-modal");

        this.defaultModal.onClick(players => players.forEach(player => this.addPlayer(player)));
    }

    setModel(model){
        this.model = model;
    }
    addPlayer(name){
        const player = this.model.addPlayer(name);
        this.createRow(player);

    }
    createRow(player){
        const $row = this.scoreboard.insertRow();
        
        if (player.position === 1){
            $row.classList.add("is-selected");
        }

        $row.innerHTML = `
            <th>${player.position}</th>
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
    }
}

class PartyGameView{
    constructor(model){
        this.model = model; 
        
    }
}