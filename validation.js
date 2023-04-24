//Hidden all error elements on the page
function hiddenErrors() {
    let error = document.getElementsByClassName("error");

    for (let i = 0; i < error.length; i++) {
        error[i].style.display = "none";
    }

}

//Check all input errors on the page
function formHasErrors() {
    // Determin name input
    let name = document.getElementById("name");
    if (name.value == "") {
        document.getElementById("nameError").style.display = "block";
        name.focus();
        return true;
    }

    // Determin phone input
    let phone = document.getElementById("phone");
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value)) {
        document.getElementById("phoneError").style.display = "block";
        phone.focus();
        return true;
    }

    // Determin email input
    let email = document.getElementById("email");
    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    if (email.value == "" || !emailPattern.test(email.value)) {
        document.getElementById("emailError").style.display = "block";
        email.focus();
        return true;
    }
    document.getElementById("emailError").style.display = "none";
}

// Handles submit events
function validate(e) {
	// Hides all error elements on the page
    hiddenErrors();

    // Determines if the form is valid
    if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();
        
        return false;
    }
    return true;
}

//Handles reset events
function resetForm (e){
    if (confirm("Clear form?")){
        hiddenErrors();
        return true;
    }
    e.preventDefault();
    return false;
}

// Handles the load event of the document
function load() {
    // Hides all error elements on the page
    hiddenErrors();

    // Add event listener for the form submit
    document.getElementById("contract-form").addEventListener("submit", validate);
    document.getElementById("contract-form").addEventListener("reset", resetForm);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
