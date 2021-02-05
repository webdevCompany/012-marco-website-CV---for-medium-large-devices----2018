var educationTop = document.querySelector('.education-intro')
var educationIntroHeader = document.querySelector('.education-intro-h2')
var educationIntroP = document.querySelector('.education-intro-p')

function educationIntroAnimationOnScroll() {
  var winTop = window.pageYOffset + 200
  var winTop1 = window.pageYOffset + 300
  var winTop2 = window.pageYOffset + 350
  var winTop3 = window.pageYOffset + 800

  // education intro animation on scroll========================================
  if (winTop1 > educationTop.offsetTop) {
    educationIntroHeader.classList.add('education-intro-h2-active')
  }

  if (winTop2 > educationTop.offsetTop) {
    educationIntroP.classList.add('education-intro-p-active')
  }
  // end education intro animation on scroll====================================
}

window.addEventListener('scroll', educationIntroAnimationOnScroll)
