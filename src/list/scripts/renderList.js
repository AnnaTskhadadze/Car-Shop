export function renderList(carList) {

    //to get container div of car lists
	const productsDiv = document.getElementsByClassName("container")[0];

	productsDiv.innerHTML = "";
	let html = ``;

    //to loop over all cars and build html
	for (let car of carList) {
		html += `
        <div class="item">
            <div class="item-img">
                        <img
                            src="${car.product.src}"
                            alt=""
                        />
            </div>
            <div class="list-item-info">
                    <p>Manufacturer: ${car.product.manufacturer}</p>
                    <p>Quantity: ${car.count}</p>
                    <button id="${car.product.id}" class="removeCar">Remove From Cart</button>
            </div>
        </div>
        `;
	}

	productsDiv.insertAdjacentHTML("beforeend", html);
}
