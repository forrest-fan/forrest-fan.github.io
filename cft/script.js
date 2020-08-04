window.onscroll = function resizeNav() {
	if (window.pageYOffset > 100) {
		let nav = document.getElementById('navbarTop');
		let logoImg = document.getElementById('logo-img');
		nav.style.height = 80;
		logoImg.style.height = '40px';
	} else {
		let nav = document.getElementById('navbarTop');
		let logoImg = document.getElementById('logo-img');
		nav.style.height = 120;
		logoImg.style.height = '60px';
	}
}


function openSidebar() {
	if (document.getElementById('navbarSide').style.marginLeft === '-210px') {
		document.getElementById('navbarSide').style.marginLeft = '0px';
	}
}

function closeSidebar() {
	if (document.getElementById('navbarSide').style.marginLeft === '0px') {
		document.getElementById('navbarSide').style.marginLeft = '-210px';
	}
}

let sections = document.getElementsByClassName('section');
for (let i = 0; i < sections.length; i++) {
	sections[i].addEventListener("click", function() {closeSidebar()});
}