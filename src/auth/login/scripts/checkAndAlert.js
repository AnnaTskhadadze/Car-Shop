import { authorize } from "./authorize.js";


export function checkAndAuthorize() {

    //gets email, password, and alerts elements
	const emailInput = document.getElementById("email");
	const passwordInput = document.getElementById("password");
	const alertWrongCredent = document.getElementsByClassName("alertAuth")[0];
	const emptyFieldsAlert = document.getElementsByClassName("alertAuth")[1];

    //gets user container from local storage
	const users = JSON.parse(localStorage.getItem("users"));

    //if both or any of them inputs are empty, then show inputs empty alert
	if (emailInput.value.trim() == "" || passwordInput.value.trim() == "") {

		emptyFieldsAlert.classList.remove("hidden"); //shows empty input alert
		alertWrongCredent.classList.add("hidden"); //hides wrong credentials alert
		return; //here stops logic/execution of codes
	}


	emptyFieldsAlert.classList.add("hidden"); //we hide empty field alert

    //if user container is filled
	if (localStorage.getItem("users")) {

        //here goes checking if email and password match
		let user = users.find(
			(user) =>
				user?.email == emailInput.value && user.password == passwordInput.value,
		);

        //if such user does not exists, then show wrong credential alert
		if (!user) {
			alertWrongCredent.classList.remove("hidden"); //shows wrong cred. alert 
			return; //here we stop logic
		}

		authorize(user.email, user.name);
		alertWrongCredent.classList.add("hidden"); //hides wrong credential alert
	} else {

        //if nobody is registered, then we show wrong credentianl alert
		alertWrongCredent.classList.remove("hidden");
	}
}
