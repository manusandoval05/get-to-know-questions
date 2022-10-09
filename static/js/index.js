import { STARTERS, BASIC, FUN, EFFECTIVE, GOOD, INTERESTING, WORK, COUPLES, STUDENTS } from "./question_repository.js";

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
    all: [].concat(STARTERS, BASIC, FUN, EFFECTIVE, GOOD, INTERESTING, WORK, COUPLES, STUDENTS),
}

document.addEventListener("DOMContentLoaded", () => {
    const $buttonGenerator = document.getElementById("question-generator");
    const $dropdownFilter = document.getElementById("filter-dropdown");
    const $question = document.getElementById("current-question");
    $buttonGenerator.addEventListener("click", () => {
        const category = QUESTIONS[$dropdownFilter.value]; 
        const randomQuestion = category[Math.floor(Math.random() * category.length)];
        $question.innerText = randomQuestion; 
    })
})