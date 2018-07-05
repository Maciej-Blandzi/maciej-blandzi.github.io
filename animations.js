$(window).on('scroll', function (event) {
  document.querySelector('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';
})


$('a:not(".http")').on('click', function(){
  $(this).hide().fadeIn(500)
})
$('.headline').hide().fadeIn(2000)



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


$(document).ready(function() {
  var pics = document.querySelectorAll('.project-pics, .logos, .story-pics');
  function showPictures (){
    pics.forEach(function (element) {
      var elementRect = element.getBoundingClientRect();

      (elementRect.top < window.innerHeight - (elementRect.height / 3))
        ? element.classList.add('pics-shown')
        : element.classList.remove('pics-shown');
    });
  }

  showPictures();

  $(document).on("scroll", function () {
    showPictures();
  });
});