const jobRoleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");

jobRoleInput.addEventListener("change", e => {
    //  how to get selected option 
    // https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    if ( jobRoleInput.options[jobRoleInput.selectedIndex].text == "Other" ) {
        otherJobRoleInput.type = "text";
    } else {
        otherJobRoleInput.type = "hidden";
    }
});