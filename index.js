document.querySelector("button").addEventListener("click", function(event){
    email = document.querySelector("input").value.trim();
    errorMessage = document.querySelector(".error-message");
    

    errorMessage.textContent = "";

    if( email === ""){
        errorMessage.textContent = "Oops! Please add your email";
        document.querySelector("input").style.border = "2px solid red";
        document.querySelector(".icon-error").style.display = "flex";
        event.preventDefault();
        
    } else if (! validateEmail(email)){
        errorMessage.textContent = "Oops! Please add a valid email";
        document.querySelector("input").style.border = "1px solid red";
        document.querySelector(".icon-error").style.display = "flex";
        event.preventDefault();
    }
})

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email);
}