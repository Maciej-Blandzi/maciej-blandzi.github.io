$(window).on('scroll', function (event) {
  document.querySelector('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';

  // $('.top-section').style.backgroundPositionY = (window.pageYOffset * 0.8) +'px';
})

// ================== menu items
$('a:not(".http")').on('click', function(){
  $(this).hide().fadeIn(500)
})


// =====    headline grow
$(function() {
  $('section.top-section').animate({
    fontSize: '+=32',
  }, 1500)
})


// ===================  headline display delay
const $head = $('span.head')

$head.hide().each(function(index){
  $(this)
    .delay(400 * index)
    .fadeIn(3000)})
    .on('click', function(){$(this).fadeOut(300).fadeIn(1200)
})



// =============== headline re-appearing & hiding nav menu
$('.top-section').on('click', function(){
  $('.headline').fadeOut(300).fadeIn(1200)
  $menu.removeClass('nav-menu-mobile-links-visible')
})


// ===================== smooth scroll ====

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

// ======================  images slide up
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
    showPictures()
  });
});


// logo icons animated
const $logo = $('.logos img')
$logo
  .on('click', function(){
  $(this).fadeOut(300).fadeIn(600)
  })
  .on('mouseover',function(){
    $(this).animate({
      height: '1rem',
      width: '+=0'
    },400,'swing',function(){
      $(this).animate({
        height: '4rem',
        maxWidth: '10%'
      })
    })})
  .on('mouseout', function(){
    $(this).animate({
      height: '4rem'
    })
    })

//accordion
const $accButton = $('.accBtn')

$('.accordion').on('click','.accBtn',function(){
  $(this)
    .next('.accTitle')
    .not(':animated')
    .slideToggle()
})