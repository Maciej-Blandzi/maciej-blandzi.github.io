window.addEventListener('scroll', function (event) {
  document.querySelector('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';
})


document.addEventListener("DOMContentLoaded", function () {
  var funcBox = document.querySelectorAll('.story-pics');
  function showFuncBoxes (){
    funcBox.forEach(function (element) {
      var elementRect = element.getBoundingClientRect();

      if (elementRect.top < window.innerHeight - (elementRect.height / 3)) {
        element.classList.add('story-pics-shown');
      }
      else {
        element.classList.remove('story-pics-shown');
      }
    });
  }

  showFuncBoxes();

  document.addEventListener("scroll", function () {
    showFuncBoxes();
  });
});