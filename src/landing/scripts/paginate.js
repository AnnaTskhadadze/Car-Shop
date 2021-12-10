import { renderProducts } from "./renderProducts.js";
import { addToBasketProduct } from "./addToBasket.js";

//how many item to be shown
export const ITEM_COUNT = 8;
let products = [];

//current pgae on 1
let currentPage = 1;

let pageCount = 0;

export function paginate(p) {
	products = p;
	const paginationElement = document.getElementsByClassName("pagination")[0];
	pageCount = Math.trunc(p.length / ITEM_COUNT);

	if (p.length % ITEM_COUNT > 0) {
		++pageCount;
	}
	let html = "";
	for (let i = 1; i <= pageCount; ++i) {
		html += `<li class="page-item ${
			i == 1 ? "active" : null
		}"><a class="page-link">${i}</a></li>`;
	}


    //builds previous, numbers and next buttons
	html =
		`<li class="page-item disabled"><a class="page-link">Previous</a></li>` +
		html +
		`<li class="page-item"><a class="page-link">Next</a></li>`;
        //injects these buttons in html
	paginationElement.insertAdjacentHTML("beforeend", html);

    //loop through on buttons of paginations and adds event listener - clciks
	const itemEls = [...document.getElementsByClassName("page-item")];
	for (let page of itemEls) {
		page.addEventListener("click", (e) => {
			changePage(e.target.innerText, itemEls);
		});
	}
}


//handles page changing
function changePage(page, itemEls) {
	if (page === "Next") {
		if (currentPage !== pageCount) {
			navigateTo(currentPage + 1, itemEls);
		}
	} else if (page === "Previous") {
		if (currentPage !== 1) {
			navigateTo(currentPage - 1, itemEls);
		}
	} else {
		navigateTo(page, itemEls);
	}
}

function navigateTo(page, itemEls) {
	const p = +page;
	if (p == currentPage) {
		return;
	}
	currentPage = p;
	const prods = ITEM_COUNT * (p - 1);
	renderProducts(products.slice(prods, prods + ITEM_COUNT));
	itemEls.map((p) => p.classList.remove("active"));
	itemEls.map((p) => {
		if (p.innerText == currentPage) {
			p.classList.add("active");
		}
	});

	if (currentPage == 1) {
		itemEls[0].classList.add("disabled");
	} else {
		itemEls[0].classList.remove("disabled");
	}

	if (pageCount == p) {
		itemEls[itemEls.length - 1].classList.add("disabled");
	} else {
		itemEls[itemEls.length - 1].classList.remove("disabled");
	}

	addToBasketProduct(products);
}
