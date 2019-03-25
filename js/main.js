var links = document.querySelectorAll('.itemLinks');
var slider = document.querySelectorAll('.slContent');
var wrapper = document.querySelector('.slWrap');
document.querySelector('.left').onclick = sliderLeft;
document.querySelector('.right').onclick = sliderRight;
var left = 0;

function sliderLeft() {
	left = left - 1234;
	if (left < -11187) {
		left = 0;
	}
	wrapper.style.left = left + 'px';
}

function sliderRight() {
	left = left + 1234;
	if (left > 11187) {
		left = 0;
	}
	wrapper.style.left = left + 'px';
}

var activeLink = 0;

for (var i = 0; i < links.length; i++) {
	var link = links[i];
	link.addEventListener('click', setClickedItem, false);
	link.itemID = i;
}
for (var i = 0; i < slider.length; i++) {
	var sliderLink = slider[i];
	sliderLink.addEventListener('click', setClickedItem, false);
	sliderLink.itemID = i;
}

links[activeLink].classList.add('active');
slider[activeLink].classList.add('activeSl');

function setClickedItem(e) {
	removeActiveLinks();

	var clickedLink = e.target;
	activeLink = clickedLink.itemID;
	changePosition(clickedLink);
}

function removeActiveLinks() {
	for (var i = 0; i < links.length; i++) {
		links[i].classList.remove('active');
	}
	for (var i = 0; i < slider.length; i++) {
		slider[i].classList.remove('activeSl');
	}
}

function changePosition(link) {
	var widthSlContent = document.getElementsByClassName('slContent');
	var positionInfo = widthSlContent[widthSlContent.length - 1].getBoundingClientRect();
	link.classList.add('active');
	var sliderLink = link;
	slider[activeLink].classList.add('activeSl');
	var width = positionInfo.width;

	var position = (width + 133) * -activeLink;

	var translateValue = 'translate3d(' + position + 'px' + ', 0px, 0)';
	wrapper.style[transformProperty] = translateValue;
}

var transforms = ['transform', 'msTransform', 'webkitTransform', 'mozTransform', 'oTransform'];

var transformProperty = getSupportedPropertyName(transforms);

// управление вендорными префиксами
function getSupportedPropertyName(properties) {
	for (var i = 0; i < properties.length; i++) {
		if (typeof document.body.style[properties[i]] != 'undefined') {
			return properties[i];
		}
	}
	return null;
}