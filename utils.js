
$('.nav-menu-mobile-drop').on('click', function(){
  $('.nav-menu-mobile-links').addClass('nav-menu-mobile-links-visible')
})


$('.nav-home-picture, .nav-home-text, .nav-menu-mobile-links').on('click', function(){
  $('.nav-menu-mobile-links-visible').removeClass('nav-menu-mobile-links-visible')
})


$(':input, textarea').on('focus',function(){
  $(this).css('background-color','#e9e7ff')
}).on('blur', function(){
  $(this).css('background-color','#FFF')
})

