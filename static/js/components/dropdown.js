export default class Dropdown{
    constructor(container, categories={}, dropdownName){
        const $dropdown = document.createElement("div");
        $dropdown.classList.add("dropdown", "mx-3", "my-3");
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
                <div class="dropdown-content px-2">
                    
                </div>
            </div>
        `;

        const $trigger = $dropdown.querySelector(".dropdown-trigger");

        const $dropdownContent = $dropdown.querySelector(".dropdown-menu").querySelector(".dropdown-content");
    
        let categoryCheckboxList = [];
        let categoryMap = {}; 
        
        for(const key in categories){
            const value = categories[key];

            const $checkboxContainer = document.createElement("div");

            const $checkbox = document.createElement("label");
            $checkbox.classList.add("checkbox");
            $checkboxContainer.append($checkbox);

            $checkbox.innerText = value + " ";

            const $input = document.createElement("input");
            $input.classList.add("category-checklist");
            $input.type = "checkbox";
            $input.dataset.category = key; 
            $input.checked = true; 
            $input.onchange = () => {
                categoryMap[key] = $input.checked ? true:false;
                console.table(this._selectedCategories);
            }; 

            categoryCheckboxList.push($input);

            $checkbox.append($input); 
            
            categoryMap[key] = false; 
            $dropdownContent.appendChild($checkboxContainer); 
        }

        document.getElementById(container).append($dropdown);

        this._element = $dropdown;
        this._trigger = $trigger;
        this._dropdownContent = $dropdownContent;
        this._selectedCategories = categoryMap;
        this._checkboxes = categoryCheckboxList;


        this._trigger.onclick = () => this._element.classList.toggle("is-active");
    }
    get selectedCategories(){
        let selectedCategories = [];
        for (let key in this._selectedCategories){
            if(this._selectedCategories[key]){
                selectedCategories.push(key);
            }
        } 
        return selectedCategories;
    }
}  