var oldSchoolDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);
};

oldSchoolDancer.prototype = Object.create(makeDancer.prototype);
oldSchoolDancer.prototype.constructor = oldSchoolDancer;
oldSchoolDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.addClass("modernDancer");
  this.$node.toggle();
  };