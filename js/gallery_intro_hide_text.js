var openGalleryText = document.querySelector('.open_gallery_text')
var hiddenContent = document.querySelector('.content')

function maximize() {
  hiddenContent.classList.toggle('maximize')
}

openGalleryText.addEventListener('click', maximize)
