export function removeCar() {

    //get all lists buttons
	const cardBtns = [...document.getElementsByClassName("removeCar")];

    //add event lsteners - click event
	for (let btn of cardBtns) {
		btn.addEventListener("click", (event) => {
			deleteCar(event.target.id);
		});
	}
}

//to delete car from basket
function deleteCar(id) {

    //build url with car id to delete car from basket
	let url = `http://localhost:5000/basket/${id}`;
	fetch(url, {
		method: "DELETE", //request type is DELETE
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
}
