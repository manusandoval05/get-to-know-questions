const openModal = $element => {
    $element.classList.add("is-active");
};

export const closeModal = $element => {
    $element.classList.remove("is-active");
};

export const closeAllModals = () => {
    (document.querySelectorAll(".modal") || []).forEach($modal => {
        closeModal($modal);
    });
};

export const initiateModals = () => {
    (document.querySelectorAll(".modal-trigger") || []).forEach( $trigger => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal); 

        $trigger.addEventListener("click", () => {
            openModal($target);
        });
    });

    (document.querySelectorAll(".modal-background, .modal-close, modal-card-head .delete, modal-card-foot .button") || []).forEach( $close => {
        const $target = $close.closest(".modal");

        $close.addEventListener("click", () => {
            closeModal($target);
        });
    });
}; 
