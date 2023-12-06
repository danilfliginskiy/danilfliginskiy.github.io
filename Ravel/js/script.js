window.addEventListener('DOMContentLoaded', () => {
	$(document).ready(function () {
		
		const menu = document.querySelector('.hamburger__nav')
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

		//slider in reviews

		$(document).ready(function () {
			$('.carousel').slick({
				speed: 1000,
				slidesToShow: 1,
				centerMode: false,
			})
		})

		$(document).ready(function () {
			$('.carousel_about').slick({
				speed: 1000,
				slidesToShow: 1,
				centerMode: false,
				dots: true,
				arrows: false,
			})
		})

	});
});