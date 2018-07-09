$(window).on('scroll', function (event) {
  document.querySelector('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';

  // $('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';
})


$('a:not(".http")').on('click', function(){
  $(this).hide().fadeIn(500)
})

const $head = $('span.head')

$head.hide().each(function(index){
  $(this)
    .delay(500 * index)
    .fadeIn(3000)})
    .on('click', function(){$(this).fadeOut(300).fadeIn(1200)
})


// =====    headline grow
$(function(){
  $('section.top-section').animate({
    fontSize: '+=32',
  },1500)
})



$('.top-section').on('click', function(){
  $('.headline').fadeOut(300).fadeIn(1200)
})



$(function () {
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


$(function() {
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