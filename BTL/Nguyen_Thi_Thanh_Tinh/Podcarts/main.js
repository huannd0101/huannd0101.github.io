$(document).ready(function() {

  var stBoxImg = document.querySelector('.box_img');
  var isTweenMax = true;

  $('.box_img').css('visibility', 'hidden');
  $('.span').css('visibility', 'hidden');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if(st >= (stBoxImg.offsetTop - 500) && isTweenMax){
      $('.box_img').css('visibility', 'visible');
      $('.span').css('visibility', 'visible');
      TweenMax.staggerFrom($('.box'),2,{y:100,opacity:0},0.2);
      TweenMax.staggerFrom($('.span'),3.5,{y:100,opacity:0},0.2);
      isTweenMax = false;
    }
  });
});
//audio
