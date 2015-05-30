// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  //html templating/wrapper created here
  this.$node = $('<span class="dancer"></span>');
  //invokes setPosition method and passes top and left params
  this.setPosition(top, left);
  //invokes method to be called
  this.step();
};

makeDancer.prototype.step = function () {
  //need to add binding here...
  setTimeout(this.step, this.timeBetweenSteps);
    };
};

makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };




