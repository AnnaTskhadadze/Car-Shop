// className returns array and we need [0] to get first element of the array
const loginBtn = document.getElementsByClassName("signInBtn")[0];
const signUpBtn = document.getElementsByClassName("signUpBtn")[0];
const profileBtn = document.getElementsByClassName("profileBtn")[0];
const signOutBtn = document.getElementsByClassName("signOutBtn")[0];


//gets active user container
let activeUser = localStorage.getItem("activeUser");

//ifuser is logged in, then do some operations
if (activeUser) {
    //save active user's name in variable - name
	let name = JSON.parse(activeUser).name;

    //assign active user's name in profileBtn
	profileBtn.innerHTML = `<span>${name}</span>`;

    //hides or shows some buttons
	loggedIn();
} else {
	loggedOut();
}

export function signOutUser() {
    //attachs sign out functionwhen signout btn is clicked
	signOutBtn.addEventListener("click", signOut);
}

//this function is called when sign out button is clicked
function signOut() {

    //clears active user container in local storage
	localStorage.removeItem("activeUser");

    //changes buttons visibility
	loggedOut();

    //refreshes page
	location.reload();
}

//if user logged in, then hide some buttons
function loggedIn() {
	loginBtn.style.display = "none";
	signUpBtn.style.display = "none";
	profileBtn.style.display = "inline";
	signOutBtn.style.display = "inline";
}

//uf user loggedOut, then some buttons hide
function loggedOut() {
	loginBtn.style.display = "inline";
	signUpBtn.style.display = "inline";
	profileBtn.style.display = "none";
	signOutBtn.style.display = "none";
}
