export default class FormAlert{
    constructor(message, color){
        const $alert = document.createElement("p")
        $alert.classList.add(color, help);
        $alert.innerText = message;

        this.element = $alert;
    }
    hideAlert(){
        this.element.classList.add("is-hidden");
    }
    showAlert(){
        this.element.classList.remove("is-hidden");
    }
}