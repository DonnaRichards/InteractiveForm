const jobRoleInput = document.getElementById("title");
const otherJobRoleInput = document.getElementById("other-job-role");
const shirtDesign = document.getElementById("design");
const divShirtColors = document.getElementById("shirt-colors");
const shirtColorOptions = document.querySelectorAll("#color option");
const registerForActivitiesSection = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
const payment = document.getElementById("payment");
const paymentOptions = document.querySelectorAll("#payment option");
const creditcard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const form = document.querySelector("form");

function setVisibilityOtherJobInput() {
    //  how to get selected option 
    // https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    if ( jobRoleInput.options[jobRoleInput.selectedIndex].text == "Other" ) {
        otherJobRoleInput.type = "text";
    } else {
        otherJobRoleInput.type = "hidden";
    };
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
    };
};

function calculateUpdatedCost( currentTotalStr, activityCostStr ) {
    const currentTotal = parseInt(currentTotalStr);
    const activityCost = parseInt(activityCostStr);
    let newTotal = currentTotal + activityCost;
    return newTotal.toString();
};


jobRoleInput.addEventListener("change", setVisibilityOtherJobInput);
divShirtColors.style.display = "none";
shirtDesign.addEventListener("change", setVisShirtColors);
registerForActivitiesSection.addEventListener("change", e => {
    const activitiesCostSplit = activitiesCost.textContent.split('$');
    let activitiesTotalCostStr = activitiesCostSplit[activitiesCostSplit.length - 1];
    let activityCostStr = e.target.dataset.cost;
    if ( ! e.target.checked ) {
        activityCostStr = '-' + activityCostStr;
    }
    activitiesTotalCostStr = calculateUpdatedCost(activitiesTotalCostStr, activityCostStr);
    activitiesCostSplit[activitiesCostSplit.length - 1] = activitiesTotalCostStr;
    activitiesCost.textContent = activitiesCostSplit.join('$');
});
paypal.style.display = "none";
bitcoin.style.display = "none";
payment.addEventListener("change", e => {
    for (let i = 1; i < paymentOptions.length; i++ ) {
        if ( paymentOptions[i].selected ) {
            document.getElementById(paymentOptions[i].value).style.display = "block";
        } else {
            document.getElementById(paymentOptions[i].value).style.display = "none";
        }
    }
});

function validateForm() {

    function isVsalidName(name) {

    }

}

form.addEventListener("submit", validateForm );