//
// $('.nav-menu-mobile-drop').on('click', function(){
//   $('.nav-menu-mobile-links').addClass('nav-menu-mobile-links-visible').slideToggle(600)
// })

$('.nav-menu-mobile-drop').on('click', function(){
  $('div.mobile').hasClass('.nav-menu-mobile-links-visible')
    ? $(this).remove('.nav-menu-mobile-links-visible')
    : $(this).addClass('nav-menu-mobile-links-visible')
})

$('.nav-home-picture, .nav-home-text, .nav-menu-mobile-links').on('click', function(){
  $('.nav-menu-mobile-links-visible').slideUp('nav-menu-mobile-links-visible')
})


$(':input, textarea').on('focus',function(){
  $(this).css('background-color','#e9e7ff')
}).on('blur', function(){
  $(this).css('background-color','#FFF')
})

