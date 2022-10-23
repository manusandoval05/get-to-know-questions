import { STARTERS, BASIC, FUN, EFFECTIVE, GOOD, INTERESTING, WORK, COUPLES, STUDENTS, TRUTH, PHILOSOPHICAL } from "./question_repository.js";
import { changeBackgroundColor } from "./background_color.js";

const QUESTIONS = {
    starters: STARTERS, 
    basic: BASIC, 
    fun: FUN, 
    effective: EFFECTIVE, 
    good: GOOD, 
    interesting: INTERESTING, 
    work: WORK, 
    couples: COUPLES, 
    students: STUDENTS, 
    truth: TRUTH,
    philosophical: PHILOSOPHICAL,
    all: [].concat(STARTERS, BASIC, FUN, EFFECTIVE, GOOD, INTERESTING, WORK, COUPLES, STUDENTS, TRUTH, PHILOSOPHICAL),
}

document.addEventListener("DOMContentLoaded", () => {
    const $buttonGenerator = document.getElementById("question-generator");
    const $background = document.getElementById("game-screen"); 
    const $dropdownFilter = document.getElementById("filter-dropdown");
    const $question = document.getElementById("current-question");
    $buttonGenerator.addEventListener("click", () => {
        const category = QUESTIONS[$dropdownFilter.value]; 
        const randomQuestion = category[Math.floor(Math.random() * category.length)];
        $question.innerText = randomQuestion; 
        changeBackgroundColor($background);
        
    });
});

export const generateRandomQuestion = () => {
    const $dropdownFilter = document.getElementById("filter-dropdown");
    const category = QUESTIONS[$dropdownFilter.value]; 
    const randomQuestion = category[Math.floor(Math.random() * category.length)];

    return randomQuestion;
}
