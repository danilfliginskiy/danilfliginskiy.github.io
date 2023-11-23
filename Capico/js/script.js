const menu = document.querySelector('.hamburger__nav')
const menuItems = document.querySelectorAll('.hamburger__nav-link')
const hamburger = document.querySelector('.hamburger')
const firstLine = document.querySelector('#firstLine')
const secondLine = document.querySelector('#secondLine')
const thirtyLine = document.querySelector('#thirtyLine')
const body = document.querySelector('#body')

function toggleMenu() {
	if (menu.classList.contains('showMenu')) {
		menu.classList.remove('showMenu')
		firstLine.classList.remove('firstLine')
		secondLine.classList.remove('secondLine')
		thirtyLine.classList.remove('thirtyLine')
		body.classList.remove('unScroll')
	} else {
		menu.classList.add('showMenu')
    firstLine.classList.add('firstLine')
		secondLine.classList.add('secondLine')
		thirtyLine.classList.add('thirtyLine')
		body.classList.add('unScroll')
	}
}

hamburger.addEventListener('click', toggleMenu)
