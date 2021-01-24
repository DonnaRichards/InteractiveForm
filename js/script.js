const jobRoleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");
const shirtDesign = document.getElementById("design");
const divShirtColors = document.getElementById("shirt-colors");
const shirtColorOptions = document.querySelectorAll("#color option");

function setVisibilityOtherJobInput() {
    //  how to get selected option 
    // https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    if ( jobRoleInput.options[jobRoleInput.selectedIndex].text == "Other" ) {
        otherJobRoleInput.type = "text";
    } else {
        otherJobRoleInput.type = "hidden";
    }
};

function setVisShirtColors() {
    if ( shirtDesign.selectedIndex > 0 ) {
        divShirtColors.style.display = "initial";
        shirtColorOptions[0].textContent = "Select a color";
        for (let i = 1; i < shirtColorOptions.length; i++) {
            if ( shirtColorOptions[i].dataset.theme == shirtDesign.options[shirtDesign.selectedIndex].value ) {
                shirtColorOptions[i].hidden = false;
            } else {
                shirtColorOptions[i].hidden = true;  
            }
        }
    } else {
        divShirtColors.style.display = "none";
        shirtColorOptions[0].textContent = "Select a design theme above";
    }

}

jobRoleInput.addEventListener("change", setVisibilityOtherJobInput);
divShirtColors.style.display = "none";
shirtDesign.addEventListener("change", setVisShirtColors);