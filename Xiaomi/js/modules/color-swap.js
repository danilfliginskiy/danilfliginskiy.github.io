const promoImage = document.querySelector('.promo__image')
const buyImage = document.querySelector('.buy__img')
const body = document.querySelector('#body')
const colorSwapCheckbox = document.querySelector('#color-swap-checkbox')
const colorSwapCheckbox2 = document.querySelector('#color-swap-checkbox2')
const logo = document.querySelector(".logo__img")
const text = document.querySelectorAll(".text")
const textOrange = document.querySelectorAll('.text_orange')
const textLight = document.querySelectorAll('.text_light')

const tabFeaturesDescr = document.querySelectorAll('.tab-label-descr')
const tabFeaturesDescrDark = document.querySelectorAll('.tab-label-descr_dark')
const tabFeaturesTitle = document.querySelectorAll('.tab-label-title')
const tabFeaturesTitleDark = document.querySelectorAll('.tab-label-title_dark')

function colorSwap() {
  
  if (body.classList.contains('light')) {

    document.getElementById('color-swap-checkbox').checked = false
    document.getElementById('color-swap-checkbox2').checked = false

    body.classList.remove('light')
    promoImage.setAttribute('src', '../../img/promo/bike.png')
    buyImage.setAttribute('src', '../../img/buy/bike.png')
    logo.setAttribute('src', '../../img/logo.svg')

    for (var i = 0; i < text.length; i++) {
			text[i].classList.remove('dark-color')
		}

    for (var i = 0; i < textOrange.length; i++) {
			textOrange[i].classList.remove('orange-color')
		}

    for (var i = 0; i < textLight.length; i++) {
			textLight[i].classList.remove('light-color')
		}

    for (var i = 0; i < tabFeaturesDescr.length; i++) {
			tabFeaturesDescr[i].classList.remove('none')
			tabFeaturesDescrDark[i].classList.remove('block')
      tabFeaturesTitle[i].classList.remove('none')
			tabFeaturesTitleDark[i].classList.remove('block')
		}

	} else {

    document.getElementById('color-swap-checkbox').checked = true
    document.getElementById('color-swap-checkbox2').checked = true

    body.classList.add('light')
    promoImage.setAttribute('src', '../../img/promo/bike_dark.png')
    buyImage.setAttribute('src', '../../img/buy/bike_dark.png')
    logo.setAttribute('src', '../../img/logo_dark.svg')
    
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add('dark-color')
		}
    
    for (var i = 0; i < textOrange.length; i++) {
      textOrange[i].classList.add('orange-color')
    }

    for (var i = 0; i < textLight.length; i++) {
			textLight[i].classList.add('light-color')
		}

    for (var i = 0; i < tabFeaturesDescr.length; i++) {
			tabFeaturesDescr[i].classList.add('none')
			tabFeaturesDescrDark[i].classList.add('block')
      tabFeaturesTitle[i].classList.add('none')
			tabFeaturesTitleDark[i].classList.add('block')
		}
    
	}

}

colorSwapCheckbox.addEventListener('click', colorSwap)
colorSwapCheckbox2.addEventListener('click', colorSwap)

export default colorSwap