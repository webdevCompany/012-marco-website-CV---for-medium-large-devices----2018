var educationIntro = document.querySelector('.education-intro')
var sectionLeft = document.querySelectorAll('.sectionLeft')
var sectionRight = document.querySelectorAll('.sectionRight')
var gallerybox = document.querySelector('.gallerybox')
var blockImage = document.querySelectorAll('.block_image')
var sectionLeft_ul_li = document.querySelectorAll('.sectionLeft_ul_li')
var sectionRight_ul_li = document.querySelectorAll('.sectionRight_ul_li')
var sidebuttonGoTop = document.querySelector('.sidebuttonGoTop')

function scrollwebsite() {
  var windowWin400 = window.pageYOffset + 400
  var windowWin = window.pageYOffset + 300

  if (windowWin > educationIntro.offsetTop) {
    educationIntro
      .querySelector('.education-intro-h2')
      .classList.add('opacityOnScroll')
    educationIntro
      .querySelector('.education-intro-p')
      .classList.add('opacityOnScroll')
  } else {
    educationIntro
      .querySelector('.education-intro-h2')
      .classList.remove('opacityOnScroll')
    educationIntro
      .querySelector('.education-intro-p')
      .classList.remove('opacityOnScroll')
  }

  for (var i = 0; i < sectionLeft_ul_li.length; i++) {
    if (windowWin400 > sectionLeft_ul_li[i].offsetTop) {
      sectionLeft_ul_li[i].classList.add('opacityOnScroll')
    }
  }

  for (var i = 0; i < sectionRight_ul_li.length; i++) {
    if (windowWin400 > sectionRight_ul_li[i].offsetTop) {
      sectionRight_ul_li[i].classList.add('opacityOnScroll')
    }
  }

  if (windowWin > gallerybox.offsetTop) {
    gallerybox.querySelector('.gallerybox_h2').classList.add('opacityOnScroll')
    gallerybox
      .querySelector('.open_gallery_text')
      .classList.add('opacityOnScroll')
  }

  for (var i = 0; i < blockImage.length; i++) {
    if (windowWin > blockImage[i].offsetTop) {
      blockImage[i].classList.add('opacityOnScroll')
    }
  }

  console.log(window.pageYOffset)
  if (windowWin > 1100) {
    sidebuttonGoTop.style.transition = 'all .5s'
    sidebuttonGoTop.style.opacity = 1
  } else {
    sidebuttonGoTop.style.transition = 'all .5s'
    sidebuttonGoTop.style.opacity = 0
  }
}

window.addEventListener('scroll', scrollwebsite)

// ================================
// sidebar menu slide onclick
// ================================

var sidebarM = document.querySelector('.sidebar_menu')
var sidebarTrigger = document.querySelector('.sidebar_menu_trigger')
function sidebarMenuSLIDE() {
  sidebarM.classList.toggle('sidebar_menu_active')
  sidebarTrigger.classList.toggle('sidebar_menu_trigger_active')
}

sidebarM.addEventListener('click', sidebarMenuSLIDE)

// ======================================================================================
// TO OPEN THE DESCARGAS WINDOW AND ALSO STARTS THE SVG ANIMATION
var descargasTrigger = document.querySelector('.descargasTrigger')
var descargas = document.querySelector('.descargas')
var pathBorderAnimation = document.querySelectorAll('.svg_links_bg_path')

function descargasActive() {
  descargas.classList.add('descargas_active')
  for (var i = 0; i < pathBorderAnimation.length; i++) {
    pathBorderAnimation[i].classList.add('svg_link_active')
    pathBorderAnimation[i].style.animationDelay = 0.5 + i / 2 + 's'
  }
}

descargasTrigger.addEventListener('click', descargasActive)

// ======================================================================================
// Close descargas_active window on click
// reset the svg active class to start animation everytime you open the descargas window

var descargas_ul = document.querySelector('.descargas_ul')

function removeclass2() {
  descargas.classList.remove('descargas_active')
  for (var i = 0; i < pathBorderAnimation.length; i++) {
    pathBorderAnimation[i].classList.remove('svg_link_active')
  }
}

descargas_ul.addEventListener('click', removeclass2)

// ======================================================================================
var oldwebsite = document.getElementById('oldwebsite')

function foo(e) {
  alert('hello foo')
  e.preventDefault()
  e.stopPropagation()
}

oldwebsite.addEventListener('click', foo)
