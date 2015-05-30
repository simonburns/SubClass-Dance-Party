// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  //html templating/wrapper created here
  this.$node = $('<span class="dancer"></span>');
  //assign timeBetweenSteps param to a property
  this.timeBetweenSteps = timeBetweenSteps;
  //invokes step method to be called
  this.step();
  //invokes setPosition method and passes top and left params
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  //need to add binding here...
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};




