const COLORS = ["is-primary", "is-link", "is-success", "is-warning", "is-danger"]
let currentColor = "is-danger"; 

export function changeBackgroundColor($background){
    $background.classList.remove(currentColor);
    currentColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    $background.classList.add(currentColor);
}