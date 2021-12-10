import { renderProducts } from "./renderProducts.js";

export function filterByModel(products) {

    //takes input
	const modelSearchInput = document.getElementById("name-search");

    //we add event listener fro keyup event
    //keyup event is on keyboard click
	modelSearchInput.addEventListener("keyup", () => {
		//save input value in value variable
        let value = modelSearchInput.value.toLowerCase();

        //filters all products based on input value
		let filteredProducts = products.filter((e) =>
			e.model.toLowerCase().includes(value),
		);

        //we render filtered products again
		renderProducts(filteredProducts);
	});
}

export function filterByPrice(products) {

    //adding event listener on go button, event - click
	document.getElementById("searchNumber").addEventListener("click", () => {
		
        //takes to and from inputs
        const from = document.getElementById("from");
		const to = document.getElementById("to");

        //when from is filled and to is empty
		if (from.value.trim() && !to.value.trim()) {
			const filteredProducts = products.filter(
				(product) => product.price >= from.value,
			);
            //render again filtered products
			renderProducts(filteredProducts);

            //from is empty and to is filled
		} else if (!from.value.trim() && to.value.trim()) {
			const filteredProducts = products.filter(
				(product) => product.price >= 0 && product.price <= to.value,
			);

            //redner again filtered products
			renderProducts(filteredProducts);

            //when both is filled
		} else if (from.value.trim() && to.value.trim()) {
			const filteredProducts = products.filter(
				(product) => product.price >= from.value && product.price <= to.value,
			);
            //redners again
			renderProducts(filteredProducts);

            //when both is empty
		} else if (!from.value.trim() && !to.value.trim()) {
			renderProducts(products);
		}
	});
}
