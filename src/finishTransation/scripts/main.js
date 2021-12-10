import {signOutUser} from "../../landing/scripts/header.js"
import {fetchBasket} from "../../landing/scripts/fetchProduct-api.js"
import {finishTransaction} from "./finishTr.js"
async function main(){
    signOutUser();

    //to assign 0 to basket
    document.getElementById("basket-count").innerText = 0;
    let carList = await fetchBasket();
    finishTransaction(carList)

}

main();