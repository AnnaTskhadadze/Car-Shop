import { checkandSignUp } from "./checkAndAlert.js";

//checking if user is logged in, navigate to landing page directly
if (localStorage.getItem("activeUser")) {
	location.href = "../../landing/index.html";
}

//if user is not logged in...
function main(){

    //gett sign Up button
    const signUpBtn = document.getElementsByClassName("signUpBtn")[0];

    //add event listener to sign up button
    signUpBtn.addEventListener("click", () => {

        //every click on sign up button, we call this method
        checkandSignUp();
    });
}

main();