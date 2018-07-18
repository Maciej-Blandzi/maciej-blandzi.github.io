$(function(){

  let $pics  = $('.pic-set')
  let $pic = $('.pic')
  let buttons  = []
  let currentIndex = 0
  let timeout;

  function slide(newIndex){
    let animateLeft
    let slideLeft

    cont()

    if ($pics.is(':animated') || currentIndex === newIndex){
      return;
    }

    buttons[currentIndex].removeClass('active')
    buttons[newIndex].addClass('active')

    newIndex > currentIndex
      ? (slideLeft = '100%', animateLeft = '-100%')
      :(slideLeft = '100%',  animateLeft = '-100%')


    $pic.eq(newIndex).css( {left: slideLeft, display: 'block'} )

    $pics.animate({left: animateLeft},function(){
      $pic.eq(currentIndex).css({display: 'none'})
      $pic.eq(newIndex).css({left: 0})
      $pics.css({left: 0});
      currentIndex = newIndex;
    });
  }

  function cont(){
    clearTimeout(timeout)
    timeout = setTimeout(function(){
      if (currentIndex < ($pic.length - 1)){
        slide(currentIndex + 1)
      }else
      {
        slide(0)
      }
    },3000)
  }

  $.each($pic, function(index){
    let $button = $('<button type="button" class="pic-btn">&bull;</button>')
    if (index === currentIndex){
      $button.addClass('active')
    }
    $button.on('click', function(){
      slide(index)
    }).appendTo('.pic-button')
    buttons.push($button)
  })

  cont()
})