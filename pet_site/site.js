$(document).ready(function(){
  var animationReset = false;
  $("#animation img").click(function(){
    if (animationReset === false) {
      $(this).animate({right: '1000px'}, 5000, "swing", function(){
        $(this).toggleClass('flipped');
        animationReset = true;
      });
    }else {
      $(this).animate({left: '5px'}, 5000, "swing", function(){
        $(this).toggleClass('flipped');
        animationReset = false;
      });
    }
  });
}); //doc ready function
