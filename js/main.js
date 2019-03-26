var links = document.querySelectorAll(".itemLinks");
var slider = document.querySelectorAll(".slContent");
var wrapper = document.querySelector(".slWrap");
var prev = document.querySelector('.left');
var next = document.querySelector('.right');
var left = 0;

var activeLink = 0;

for (var i = 0; i < links.length; i++) {
	var link = links[i];
	link.addEventListener('click', setClickedItem, false);
	link.itemID = i;

}
//всплытие с event индекс
var activeLink;
prev.addEventListener('click', function showPrev() {
	activeLink = (activeLink - 1) % slider.length;
	var widthSlContent = document.getElementsByClassName("img");
	// var positionInfo = widthSlContent[activeLink].getBoundingClientRect();
	var positionInfo = widthSlContent[0].getBoundingClientRect();
	var width = positionInfo.width;
	var position = (width - 133 - 26);
	var positionInfoWrapper = wrapper.getBoundingClientRect();
	possitionWrapper = positionInfoWrapper.left;
	console.log(possitionWrapper);
	removeActiveLinks();

	if (activeLink <= 0) {
		activeLink = 0;
		wrapper.style.left = 0;
		slider[0].classList.add("activeSl");
		links[0].classList.add("active");
	} else {

		leftW = (-possitionWrapper) - position;
		wrapper.style.left = -leftW + 'px';
		slider[activeLink].classList.add("activeSl");
		links[activeLink].classList.add("active");
	}

});

next.addEventListener('click', function showNext() {

	activeLink = (activeLink + 1) % slider.length;
	var widthSlContent = document.getElementsByClassName("img");
	// var positionInfo = widthSlContent[activeLink].getBoundingClientRect();
	var positionInfo = widthSlContent[0].getBoundingClientRect();
	var width = positionInfo.width;
	var position = (width + 133 + 292);
	var positionInfoWrapper = wrapper.getBoundingClientRect();
	possitionWrapper = positionInfoWrapper.left;
	console.log(possitionWrapper);
	removeActiveLinks();
	if (activeLink === 0) {
		activeLink = 0;
		wrapper.style.left = 0;
		console.log(wrapper.style.left);
		slider[0].classList.add("activeSl");
		links[0].classList.add("active");
	} else {

		leftW = possitionWrapper - position;
		wrapper.style.left = leftW + 'px';
		slider[activeLink].classList.add("activeSl");
		links[activeLink].classList.add("active");
	}

});

links[activeLink].classList.add("active");
slider[activeLink].classList.add("activeSl");

function setClickedItem(e) {
	removeActiveLinks();

	var clickedLink = e.target;
	activeLink = clickedLink.itemID;
	changePosition(clickedLink);
}

function removeActiveLinks() {
	for (var i = 0; i < links.length; i++) {
		links[i].classList.remove("active");
	}
	for (var i = 0; i < slider.length; i++) {
		slider[i].classList.remove("activeSl");
	}
}

var position;

function changePosition(link) {
	var widthSlContent = document.getElementsByClassName("slContent");
	var positionInfo = widthSlContent[widthSlContent.length - 1].getBoundingClientRect();
	link.classList.add("active");
	var sliderLink = link;
	slider[activeLink].classList.add("activeSl");
	var width = positionInfo.width;
	var position = ((width + 133) * -activeLink) + "px";
	wrapper.style.left = position;
}


var transforms = ["transform",
	"msTransform",
	"webkitTransform",
	"mozTransform",
	"oTransform"
];

var transformProperty = getSupportedPropertyName(transforms);

// управление вендорными префиксами
function getSupportedPropertyName(properties) {
	for (var i = 0; i < properties.length; i++) {
		if (typeof document.body.style[properties[i]] != "undefined") {
			return properties[i];
		}
	}
	return null;
}