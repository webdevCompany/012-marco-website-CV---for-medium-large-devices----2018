var elementtohover = document.querySelector('.slider_buttons')
var changeLast = document.getElementById('buttonLast')
var changeNext = document.getElementById('buttonNext')

function changeLastOnhover() {
  changeLast.style.transition = 'all .3s'
  changeLast.style.opacity = 0.7
  changeLast
    .querySelector('.buttonCircle')
    .classList.add('buttonCircle_showCircle')
  changeLast
    .querySelector('.buttonArrow')
    .classList.add('buttonArrow_showArrow')
}

function resetLastOnhover() {
  changeLast.style.transition = 'all .3s'
  changeLast.style.opacity = 0
  changeLast
    .querySelector('.buttonCircle')
    .classList.remove('buttonCircle_showCircle')
  changeLast
    .querySelector('.buttonArrow')
    .classList.remove('buttonArrow_showArrow')
}

function changeNextOnhover() {
  changeNext.style.transition = 'all .3s'
  changeNext.style.opacity = 0.7
  changeNext
    .querySelector('.buttonCircle')
    .classList.add('buttonCircle_showCircle')
  changeNext
    .querySelector('.buttonArrow')
    .classList.add('buttonArrow_showArrow')
}

function resetNextOnhover() {
  changeNext.style.transition = 'all .3s'
  changeNext.style.opacity = 0
  changeNext
    .querySelector('.buttonCircle')
    .classList.remove('buttonCircle_showCircle')
  changeNext
    .querySelector('.buttonArrow')
    .classList.remove('buttonArrow_showArrow')
}

elementtohover.addEventListener('mouseover', changeLastOnhover)
elementtohover.addEventListener('mouseout', resetLastOnhover)
elementtohover.addEventListener('mouseover', changeNextOnhover)
elementtohover.addEventListener('mouseout', resetNextOnhover)
