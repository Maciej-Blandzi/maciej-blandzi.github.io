
var menu = document.querySelector('.nav-menu-mobile-drop')
menu.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links').classList.add('nav-menu-mobile-links-visible')
})

var menuIcon = document.querySelector('.nav-menu-mobile-icon')
menuIcon.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links').classList.add('nav-menu-mobile-links-visible')
})





var links = document.querySelector('.nav-menu-mobile-links')
links.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links-visible').classList.remove('nav-menu-mobile-links-visible')
})

var homeText = document.querySelector('.nav-home-text')
homeText.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links-visible').classList.remove('nav-menu-mobile-links-visible')
})

var homeIcon = document.querySelector('.nav-home-picture')
homeIcon.addEventListener('click', function(){
  document.querySelector('.nav-menu-mobile-links-visible').classList.remove('nav-menu-mobile-links-visible')
})

