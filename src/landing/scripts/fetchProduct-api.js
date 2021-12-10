//returns promise and gives cars from product array
export function fetchProducts() {
    //fetch method goes to local server and fetches cars data from product endpoint
    //request on the imitated backend server
	return fetch("http://localhost:5000/products").then((res) => res.json());
}


//cars that we have chosen
export function fetchBasket() {
	return fetch("http://localhost:5000/basket").then((res) => res.json());
}
