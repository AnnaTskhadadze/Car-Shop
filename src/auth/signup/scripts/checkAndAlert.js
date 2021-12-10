import { signUp } from "./reg.js";


export function checkandSignUp() {
	//inputs from DOM
	const firstNameInput = document.getElementById("firstName");
	const emailInput = document.getElementById("email");
	const passwordInput = document.getElementById("password");
	const confirmPassowrdInput = document.getElementById("confirmPassword");

    //gets three aler divs from dom
	const passwordMismatch = document.getElementsByClassName("alertAuth")[0];
	const alreadyExistSpan = document.getElementsByClassName("alertAuth")[1];
	const emptyFieldsAlert = document.getElementsByClassName("alertAuth")[2];
	

    //Checking if any input is empty
    if (
		firstNameInput.value.trim() == "" ||
		emailInput.value.trim() == "" ||
		passwordInput.value.trim() == "" ||
		confirmPassowrdInput.value.trim() == ""
	) {

        //then empty field alert is shown: removed hidden class:
		emptyFieldsAlert.classList.remove("hidden");
		return; //this stops execution of the code
	}

    //if all inputs are filled, then hide empty field alert
	emptyFieldsAlert.classList.add("hidden");

    //checking if password and confirm passwords input values are equal
	if (passwordInput.value !== confirmPassowrdInput.value) {
		//then show mimsatch alert div
        passwordMismatch.classList.remove("hidden");
		return; //stop execution of the code
	}

    //if password matched, then hide mismatch alert div
	passwordMismatch.classList.add("hidden");

    //and we start to sign up user
	signUp(firstNameInput, emailInput, passwordInput, alreadyExistSpan);
}
