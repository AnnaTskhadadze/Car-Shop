import { fetchBasket } from "./fetchProduct-api.js";


export function addToBasketProduct(products) {

    //take as an array buttons of cars
	const cardBtns = [...document.getElementsByClassName("addToBasketBtn")];

    //loop through all btns and add event listener click
	for (let btn of cardBtns) {

		btn.addEventListener("click", (event) => {
            //filter which products id equals to emitted event's id
			const product = products.filter((p) => p.id == event.target.id)[0];

            //we already know whichc product is clicked and
            //which product we need to add to basket
			addToBasket(product);
		});
	}
}


async function addToBasket(product) {

    //api to make a save call
	let url = `http://localhost:5000/basket`;

    //fetch chosen cars
	const basket = await fetchBasket(url);
	
    //build new object/car to save on database
    const p = {
		id: product.id,
		product,
		count: 1,
	};

    //filtering if chosen car already exists in database
	const filtered = basket.filter((c) => c.id == product.id);
	
    //if exists, cound property is updated by 1
    if (filtered.length > 0) {
		p.count = filtered[0].count + 1;
		url += `/${product.id}`;
        
        //after that, we make patch request and give data,
        //patch re;quest to update data
		saveData("PATCH", p, url)

	} else { //if car not exists, we make post request to create new object in database
		saveData("POST", p, url);
	}
}

//this function handles create or update data on the database
function saveData(method, product, url) {
	fetch(url, {
		method: method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	}).then((res) => res.json());
}
