function validate() {
    // Get the values of the fields
    let fname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let emojis = document.querySelector('input[name="Terrible 😠"]:checked') ||
                 document.querySelector('input[name="Bad 😔"]:checked') ||
                 document.querySelector('input[name="Okay 😐"]:checked') ||
                 document.querySelector('input[name="Good 😊"]:checked') ||
                 document.querySelector('input[name="Excellent 😄"]:checked');

    // Sequential custom alert validation logic

    // Name validation
    if (fname == "") {
        alert("Please, enter your name");
        return false; // Stop here until name is filled
    }else if (!isNaN(fname)) {
        alert("Please, enter characters only");
        return false;
    }else if (fname.length < 2) {
        alert("Please, enter more than one character");
        return false;
    } 

    // Email validation
    if (email == "") {
        alert("Please, enter your email");
        return false;
    } else if (email.search(/[A-Z]/) == 0) {
        alert("Email should be in lowercase");
        return false;
    } else if (email.search(/[0-9]/) == -1) {
        alert("Email should contain some numeric values");
        return false;
    } else if (email.search(/[@]/) == -1) {
        alert("Email should contain '@' symbol");
        return false;
    } else if (email.charAt(email.length - 4) != ".") {
        alert("Email should end with .com");
        return false;
    }

    // Comment/Suggestion validation
    if (comment == "") {
        alert("Please, enter your suggestion");
        return false;
    }

    // Emoji validation
    if (!emojis) {
        alert("Please rate us by selecting an emoji");
        return false;
    }

    // If all validations pass, allow the form submission
    return true;
}
