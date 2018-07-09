
const $btn = $('.nav-menu-mobile-drop')
const $menu = $('.nav-menu-mobile-links')


$btn.on('click', function(){

  $menu.hasClass('nav-menu-mobile-links-visible')
    ? $menu.removeClass('nav-menu-mobile-links-visible').slideUp(600)
    :$menu.addClass('nav-menu-mobile-links-visible').slideDown(600)
});


$('.nav-home-picture, .nav-home-text, .nav-menu-mobile-links').on('click', function(){

  $('.nav-menu-mobile-links-visible').slideUp()
  $menu.removeClass('nav-menu-mobile-links-visible')

})



$(':input, textarea').on('focus',function(){
  $(this).css('background-color','#e9e7ff')
}).on('blur', function(){
  $(this).css('background-color','#FFF')
})

