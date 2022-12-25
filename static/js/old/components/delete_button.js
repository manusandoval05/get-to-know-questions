export function initiateDeleteButton(targetClass, buttonClass){
    (document.querySelectorAll(buttonClass) || []).forEach( $delete => {
        const $target = $delete.closest(targetClass);

        $delete.addEventListener("click", () =>{
            $target.parentElement.removeChild($target);
        })
    });
}