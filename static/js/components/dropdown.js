export default class Dropdown{
    constructor(container, categories={}, dropdownName){
        const $dropdown = document.createElement("div");
        $dropdown.classList.add("dropdown");
        $dropdown.innerHTML = `
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>${dropdownName}</span>
                    <span class="icon is-small">
                        <i class="bi bi-chevron-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    
                </div>
            </div>
        `;

        const $trigger = $dropdown.querySelector(".dropdown-trigger");

        const $dropdownContent = $dropdown.querySelector(".dropdown-menu").querySelector(".dropdown-content");
    
        let categoryCheckboxList = [];
        let categoriesElements = Object.values(categories);

        categoriesElements = categoriesElements.map(category => {
            const $checkbox = document.createElement("label");
            $checkbox.classList.add("checkbox");

            const $label = document.createElement("p");
            $label.innerText = category

            const $input = document.createElement("input");
            $input.classList.add("category-checklist");
            $input.type = "checkbox";

            categoryCheckboxList.push($input);

            $checkbox.append($input, $label); 
            
            return $checkbox;
        });
    
        categoriesElements.forEach(category => $dropdownContent.appendChild(category));

        /*categoryCheckboxList.forEach(checkbox => {
            checkbox.onchange = () =>{
                c
            }
        })*/
        document.getElementById(container).append($dropdown);

        this._element = $dropdown;
        this._trigger = $trigger;
        this._dropdownContent = $dropdownContent;
        this._checkboxes = categoryCheckboxList;


        this._trigger.onclick = () => this._element.classList.add("is-active");
    }
}  