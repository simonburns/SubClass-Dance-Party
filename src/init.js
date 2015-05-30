$(document).ready(function(){  
  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    $('.lineUp').on('click', function () {
      $('.oldSchoolDancer').css({left: 0});
      $('.modernDancer').css({left: 0});
      $('.blinkyDancer').css({left: 0});
    });

    $('.modernDancer').on('mouseenter', function () {
      $('.modernDancer').css({height: 150, width: 250});
      $('.modernDancer').css("background-image", "url('http://24.media.tumblr.com/tumblr_mcxr9gbzp71rpkcuro1_250.gif')");
    });
    $('.modernDancer').on('mouseleave', function () {
      $('.modernDancer').css({height: 498, width: 304});
      $('.modernDancer').css("background-image", "url('http://25.media.tumblr.com/17eaa64a6848369e1eea26bb08fe8d4c/tumblr_mfzeeyMiJD1rgpyeqo1_500.gif')");
    });
  });
});

