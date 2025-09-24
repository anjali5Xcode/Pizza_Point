//Get data 
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

//Validate data
function validateForm(){

    if(nameInput.value==""){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.style.border = "1px solid #f00";
        return false;
    }
    else{
        nameInput.nextElementSibling.style.display = "none";
        nameInput.style.border = "1px solid transparent";
        
    }
    if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value==""){
            errorNodes[1].innerText = "Invalid email address";
            email.style.border = "1px solid #f00";
            return false;
    }
    else {
            email.nextElementSibling.style.display = "none";
            email.style.border = "1px solid transparent";
        }
    if(message.value==""){
            errorNodes[0].innerText = "Message cannot be blank";
            message.style.border = "1px solid #f00";
            return false;
        }
    else{
            message.nextElementSibling.style.display = "none";
            message.style.border = "1px solid transparent";
            
        }
}