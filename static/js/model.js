import { STARTERS, BASIC, EFFECTIVE, GOOD, INTERESTING, WORK, COUPLES, STUDENTS, TRUTH, PHILOSOPHICAL, FUN } from "./db/question_repository.js";


class QuestionsModel{
    constructor(){
        this.questions = {
            STARTERS: STARTERS, 
            BASIC: BASIC, 
            FUN: FUN, 
            EFFECTIVE: EFFECTIVE, 
            GOOD: GOOD, 
            INTERESTING: INTERESTING, 
            WORK: WORK, 
            COUPLES: COUPLES, 
            STUDENTS: STUDENTS, 
            TRUTH: TRUTH,
            PHILOSOPHICAL: PHILOSOPHICAL,
        }
        this.questionBank = [];
    }
    randomQuestion(categories=["WORK", "BASIC", "EFFECTIVE", "GOOD", "INTERESTING", "WORK", "COUPLES", "STUDENTS", "TRUTH", "PHILOSOPHICAL"]){
        categories.forEach(category =>{
            this.questionBank = [];
            this.questionBank.push(...this.questions[category]);
        })
        const randomQuestion = this.questionBank[Math.floor(Math.random() * this.questionBank.length)]; 

        return randomQuestion; 
    }
}

export default class Model{
    constructor(){
        this.view = null; 

        this.currentPlayer = null; 
        this.currentQuestion = null; 

        this.players = [];
        this.questions = new QuestionsModel(); 

        this._currentCategory = "all";
    }

    set currentCategory(categoryName){
        this._currentCategory = categoryName; 
    }
    get currentCategory(){
        return this._currentCategory; 
    }
    getNewQuestion(categories){
        this.currentQuestion = this.questions.randomQuestion(categories); 
        return this.currentQuestion;
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
        }; 

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
        this.players.sort((a, b) => b.score - a.score)
        this.players.forEach((player, index) => player.position = index + 1)
    }
    getRandomPlayer(){
        return this.players[Math.floor(Math.random() * this.players.length)]; 
    }
    newCurrentPlayer(){
        const newCurrentPlayer = this.getRandomPlayer(); 
        this.currentPlayer = newCurrentPlayer; 
        return newCurrentPlayer; 
    }
    increaseScore(position=this.currentPlayer.position){
        const player = this.getPlayer(position); 
        
        player.score++;
        this.updatePositions();  

        return this.players; 
    }
}