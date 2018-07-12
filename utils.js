
const $btn = $('.nav-menu-mobile-drop')
const $menu = $('.nav-menu-mobile-links')

$btn.on('click', function(){
  $menu.toggleClass('nav-menu-mobile-links-visible')
});


$('.nav-home-picture, .nav-home-text, .nav-menu-mobile-links').on('click', function(){
  $menu.removeClass('nav-menu-mobile-links-visible')
})



$(':input, textarea').on('focus',function(){
  $(this).css('background-color','#e9e7ff')
}).on('blur', function(){
  $(this).css('background-color','#FFF')
})


$('.cont').on('click', function(){
  $('input[name="input-name"]').focus()
})