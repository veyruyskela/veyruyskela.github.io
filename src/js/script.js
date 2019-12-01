

const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");
let flag = false;

hamburger.addEventListener("click", function () {
	if ( flag === false ) {
		menu.style.display = "flex";
		flag = true;
	} else if ( flag === true ) {
		menu.style.display = "none";
		flag = false;
	}
});
