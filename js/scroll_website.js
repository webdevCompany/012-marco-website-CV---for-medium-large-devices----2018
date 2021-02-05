$(document).ready(function () {
  // HOW TO CREATE A SMOOTH SCROLLING WEBSITE
  // 1 Create a links with href value the same as the div id you want to scroll
  // 2 Create a a function on click for the class of all the top links
  // 2 Create a variable with the href values because JQuery takes the variable as ID
  // 3 It will work on click and the anonimous functions must have an "e" parameter
  // 4 Inside the click event anonimous function  you have to write this
  //   e.preventDefault();

  $('.navLinks').click(function (e) {
    var linkHref = $(this).attr('href')
    $('html, body').animate(
      {
        scrollTop: $(linkHref).offset().top,
      },
      400,
    )

    e.preventDefault()
  })

  // this works well, but it has animation speed by default and it is a bit harsh
  $('.sidebuttonGoTop').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.header').offset().top,
      },
      400,
    )
  })
})
