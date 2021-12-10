import {signOutUser } from './header.js'
import {fetchProducts} from './fetchProduct-api.js'
import {renderProducts} from './renderProducts.js'
import {filterByModel, filterByPrice} from './filter.js';
import { paginate, ITEM_COUNT } from "./paginate.js";
import {addToBasketProduct} from "./addToBasket.js";
import {fetchBasket} from "./fetchProduct-api.js";

let products = [];


async function main(){
    signOutUser();

    //through await we get products from api/server and save them in products
    //it is used instead fo then.
    products = await fetchProducts();
	renderProducts([...products].slice(0, ITEM_COUNT));
    filterByModel(products);
    filterByPrice(products);
    paginate(products)
    addToBasketProduct(products);

    let basket = await fetchBasket();
	let count = 0;
	for (let c of basket) {
		count += c.count;
	}
	document.getElementById("basket-count").innerText = count;
}


main();