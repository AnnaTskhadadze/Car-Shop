import { checkAndAuthorize } from "./checkAndAlert.js";

//if user logged in, not access to logn page
if (localStorage.getItem("activeUser")) {
	location.href = "../../landing/index.html";
}

function main(){
    const loginBtn = document.getElementsByClassName("loginBtn")[0];

    loginBtn.addEventListener("click", () => {
        checkAndAuthorize();
    });

}

main()