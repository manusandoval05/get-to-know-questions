export default class Alert{
    constructor(message, color){
        const $notification = document.createElement("div");
        $notification.classList.add("notification", color, "mb-2");

        const $deleteButton = document.createElement("button");
        $deleteButton.classList.add("delete");
        
        const $message = document.createElement("p");
        $message.innerText = message;

        $notification.append($deleteButton, $message);
        
        this._element = $notification;
        this._button = $deleteButton;
        this._message = $message;
        
        this._button.onclick = () => this.destroySelf(); 
    }
    get element(){
        return this._element;
    }
    get message(){
        return this._message.innerText;
    }
    set message(message){
        this._message.innerText = message;
    }

    destroySelf(){
        this._element.parentElement.removeChild(this._element);
    }
}