import StartGameForm from "./components/start-game-form.js";

export default class View{
    constructor(){
        this.model = null; 

        this.defaultModal = new StartGameForm("party-multiplayer-modal");

        this.scoreboard = document.getElementById("scoreboard");
        this.questionCard = document.getElementById("question-card"); 
        this.currentPlayerCard = document.getElementById("current-player-card"); 
        this.categoryDropdown = document.getElementById("filter-dropdown");

        this.acceptButton = document.getElementById("accept-button");
        this.rejectButton = document.getElementById("reject-button");

        // Starts the game
        this.defaultModal.onClick(players => {
            if(players.length <= 1){
                this.defaultModal.showAlert("At least two players are required to start the game", "is-danger");
                return;
            }
            players.forEach(player => this.addPlayer(player)); 
            this.refreshCurrentQuestion(this.getNewQuestion());
            this.refreshCurrentPlayer(this.getNewPlayer().name); 

            this.defaultModal.startGame();
        });

        this.acceptButton.onclick = () => this.acceptQuestion(); 


        this.categoryDropdown.onchange = () => this.changeCategory(this.categoryDropdown.value);

    }
    changeCategory(category){
        this.model.currentCategory = category;
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
    increaseScore(){
        const players = this.model.increaseScore();
        this.refreshScoreboard(players);
    }
    acceptQuestion(){
        this.increaseScore(); 
        this.refreshCurrentQuestion(this.getNewQuestion());
        this.refreshCurrentPlayer(this.getNewPlayer().name);
    }
    refreshCurrentPlayer(currentPlayerName){
        this.currentPlayerCard.textContent = currentPlayerName;
    }
    refreshCurrentQuestion(question){
        this.questionCard.textContent = question; 
    }
    refreshScoreboard(players){
        this.scoreboard.textContent = "";
        players.forEach(player => this.createRow(player)); 
    }
    getNewQuestion(category){
        const newQuestion = this.model.questions.randomQuestion(category);
        return newQuestion; 
    }
    getNewPlayer(){
        const newPlayer = this.model.newCurrentPlayer();
        return newPlayer; 
    }
    
}