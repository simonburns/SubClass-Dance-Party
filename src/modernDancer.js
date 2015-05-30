var makeModernDancer = function(top, left, timeBetweenSteps){
  // var makeBlinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this,top, left, timeBetweenSteps);
  // this.$node.addClass("blinkyDancer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeModernDancer.prototype = Object.create(makeDancer.prototype);
makeModernDancer.prototype.constructor = makeModernDancer;
// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeModernDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  };