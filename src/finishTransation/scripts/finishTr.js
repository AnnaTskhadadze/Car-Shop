export function finishTransaction(carList) {
    
    //loop through all chosen cars to build url
	for (let car of carList) {
		let url = `http://localhost:5000/basket/${car.id}`;
		deleteData(url);
	}
}


//this function gets url and make api calls to delete cars
function deleteData(url) {
	fetch(url, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
}
