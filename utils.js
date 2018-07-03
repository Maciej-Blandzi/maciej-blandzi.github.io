var menu = document.querySelector('.nav-menu-mobile-drop')
menu.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links').classList.add('nav-menu-mobile-links-visible')
})

var links = document.querySelector('.nav-menu-mobile-links')
links.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links-visible').classList.remove('nav-menu-mobile-links-visible')
})

var home = document.querySelector('.nav-home')
home.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links-visible').classList.remove('nav-menu-mobile-links-visible')
})
