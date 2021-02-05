var allpics = document.getElementsByClassName('image_psd')
var slider = document.querySelector('.slider')
var sliderBG = document.querySelector('.slider_bg')
var sliderImage = document.querySelector('.slider_image')
var bigImage = document.querySelector('.big_image')
var imageNumber
var buttonNext = document.getElementById('buttonNext')

// SHOW THE SLIDER WHEN CLICK GALLERY IMAGES=====================
function seeIndex(e) {
  slider.classList.add('slider_active')

  imageNumber = e.target.index
  bigImage.src = 'images/myDesigns/' + (imageNumber + 1) + '.jpg'
}

for (var i = 0; i < allpics.length; i++) {
  allpics[i].index = i
  allpics[i].addEventListener('click', seeIndex)
}
// end SHOW THE SLIDER WHEN CLICK GALLERY IMAGES=================

// HIDE THE SLIDER WHEN CLICK SLIDER-BG==========================
function hideSlider() {
  slider.classList.remove('slider_active')
}

sliderBG.addEventListener('click', hideSlider)
// end HIDE THE SLIDER WHEN CLICK SLIDER-BG======================

// SLIDER BUTTON LEFT (TO CHANGE IMAGE TO NEXT)
var buttonNext = document.getElementById('buttonNext')

function changeImageToNext() {
  imageNumber++
  if (imageNumber >= allpics.length) {
    imageNumber = 0
    bigImage.src = 'images/myDesigns/' + (imageNumber + 1) + '.jpg'
  } else {
    bigImage.src = 'images/myDesigns/' + (imageNumber + 1) + '.jpg'
  }
}
buttonNext.addEventListener('click', changeImageToNext)

// SLIDER BUTTON RIGHT (TO CHANGE IMAGE TO LAST)
var buttonLast = document.getElementById('buttonLast')

function changeImageToLast() {
  if (imageNumber <= 0) {
    imageNumber = 20
    bigImage.src = 'images/myDesigns/' + imageNumber-- + '.jpg'
    console.log(bigImage.width())
  } else {
    bigImage.src = 'images/myDesigns/' + imageNumber-- + '.jpg'
    console.log(bigImage.width())
  }
}

buttonLast.addEventListener('click', changeImageToLast)
