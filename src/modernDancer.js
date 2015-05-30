var makeModernDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);
};

makeModernDancer.prototype = Object.create(makeDancer.prototype);
makeModernDancer.prototype.constructor = makeModernDancer;
makeModernDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  };