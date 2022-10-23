export const deleteElementButton = (target) => {
    const $removeButton = document.createElement("button"); 
    $removeButton.classList.add("button", "is-danger", "is-outlined");
    $removeButton.innerHTML = `
        <span class="icon is-medium">
            <i class="bi bi-trash"></i>
        </span>
    `;

    $removeButton.onclick =  () => target.parentElement.removeChild (target);

    return $removeButton;
}