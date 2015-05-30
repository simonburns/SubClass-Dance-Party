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

  });
});

