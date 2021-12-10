import {signOutUser} from "../../landing/scripts/header.js"
import {fetchBasket} from "../../landing/scripts/fetchProduct-api.js"
import {renderList} from "./renderList.js";
import {removeCar} from "./removeCar.js";
import {calculatePrice} from "./calculatePrice.js"

async function main(){
    signOutUser(); //to handle headers button

    //to fetch and resolve chosen cars from basket
    let chosenCars = await fetchBasket();
    renderList(chosenCars);
    removeCar();
    calculatePrice(chosenCars);
    let count = 0;
	for (let c of chosenCars) {
		count += c.count;
	}
	document.getElementById("basket-count").innerText = count;

	//event listener added to finish button to navigate congratulation page
    document.getElementsByClassName("trBtn")[0].addEventListener("click", () => {
		location.href = "http://127.0.0.1:5501/src/finishTransation/finishTr.html";
	});
}

main();