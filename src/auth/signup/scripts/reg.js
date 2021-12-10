

export function signUp(
	firstNameInput,
	emailInput,
	passwordInput,
	alreadyExistSpan,
) {

    //we build new object for new user
	const newUser = {
		name: firstNameInput.value,
		email: emailInput.value,
		password: passwordInput.value,
	};


    //Checking if anybody is registered
	if (localStorage.getItem("users")) {

        //if any user is registered:...

        //Here we get all users from localStorage
		const users = JSON.parse(localStorage.getItem("users"));

        //Here we check/filter if already users' email is the same as new user
		const user = users?.find((user) => user?.email == newUser.email);

        //Checking if new user's email is the same as any of registered users:
		if (user) {
            //then show user already exists alert
			alreadyExistSpan.classList.remove("hidden");
			return; //stop execution of the code
		} else {
            //if user is not registered with new email:
			alreadyExistSpan.classList.add("hidden"); //hide already exist user alert

            //we push new user in existing users array:
			users.push(newUser);

            //we again set all users in localStorage
			localStorage.setItem("users", JSON.stringify(users));

            //after registration, we navigate to login page
			location.href = "../login/login.html";
		}
	} else {

        //if nobody is registered, then register new user directly:
        //then set new user object in localStorage
		localStorage.setItem("users", JSON.stringify([newUser]));

        //after registration, navigate to login page
		location.href = "../login/login.html";
	}
}
