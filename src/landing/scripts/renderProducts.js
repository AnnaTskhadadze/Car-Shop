export function renderProducts(products) {

	//takes card-container div
	const productsDiv = document.getElementsByClassName("card-container")[0];
	
	//clears div and html div
	productsDiv.innerHTML = "";
	let html = ``;

	//we iterate each elemnt of products through for loop
	//and create html
	for (let car of products) {
		html += `
        <div class="flip-card">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img
						src="${car.src}"
						alt="Avatar"
						class="flip-img"
					/>
				</div>
				<div class="flip-card-back">
					<h2>Model: ${car.model}</h2>
					<p>Manufacturer: ${car.manufacturer}</p>
					<p>Wheel: ${car.wheel}</p>
					<p>Price: ${car.price}</p> 
					<button id="${car.id}" class='addToBasketBtn'>Buy</button>
				</div>
			</div>
 		</div>
        `;
	}

    //attach to car list container
	productsDiv.insertAdjacentHTML("beforeend", html);
}
