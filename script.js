const icon = document.querySelector("#icon");
const popup = document.querySelector("#popup");
const nav = document.querySelector("#nav").cloneNode(1);
const body = document.body;

icon.addEventListener("click", iconHandler);

function iconHandler(e) {
	e.preventDefault();
	popup.classList.toggle("open");
	icon.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}

function renderPopup() {
	popup.appendChild(nav);
}