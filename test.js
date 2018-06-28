$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
})


document.addEventListener("DOMContentLoaded", function () {
  var funcBox = document.querySelectorAll('.project-pics, .pics');
  function showFuncBoxes (){
    funcBox.forEach(function (element) {
      var elementRect = element.getBoundingClientRect();

      if (elementRect.top < window.innerHeight - (elementRect.height / 3)) {
        element.classList.add('project-pics-shown');
      }
      else {
        element.classList.remove('project-pics-shown');
      }
    });
  }

  showFuncBoxes();

  document.addEventListener("scroll", function () {
    showFuncBoxes();
  });
});