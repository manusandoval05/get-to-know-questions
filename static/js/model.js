export default class Model{
    constructor(){
        this.view = null; 
        this.players = [];
    }
    setView(view){
        this.view = view;
    }
    findPlayer(name){
        return this.players.findIndex(player => player.name === name);
    }
    getPlayer(id){
        return this.players[id - 1]
    }
    addPlayer(name){
        const player = {
            name: name, 
            score: 0, 
            position: this.players.length + 1 
        }

        this.players.push(player);

        return player;
    }
    removePlayerByName(name){
        const index = this.findPlayer(name); 
        const deletedPlayer = this.players.splice(index, 1);
        this.updatePositions();

        return deletedPlayer; 
    }
    removePlayer(id){
        const deletedPlayer = this.players.splice(id, 1);
        this.updatePositions(); 

        return deletedPlayer;
    }
    updatePositions(){
        this.players.sort((a, b) => a.score - b.score)
        this.players.forEach((player, index) => player.position = index + 1)
    }
    getRandomPlayer(){
        return this.players[Math.floor(Math.random() * this.players.length)]; 
    }
    increaseScore(position){
        const player = this.getPlayer(position - 1); 
        player.score++;
        this.updatePositions();  

        return player, this.players; 
    }
}
class QuestionsModel{
    constructor(){

    }
}