
export function calculatePrice(carList) {
	let price = 0;
	let quantity = 0;

	for (let car of carList) {
		price += car.product.price * car.count;
		quantity += car.count;
	}

	let trDiv = document.getElementsByClassName("trans-info-div")[0];
	 
	trDiv.innerHTML = "";
	
    let html = `
			<span><strong>Car Quantity:</strong> ${quantity}</span>
			<span><strong>Whole Price:</strong> ${price}</span>
			<button class="btn btn-primary trBtn">Finish Transaction</button>
	`;

	trDiv.insertAdjacentHTML("beforeend", html);
}
