var makeOldSchoolDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);
};

makeOldSchoolDancer.prototype = Object.create(makeDancer.prototype);
makeOldSchoolDancer.prototype.constructor = makeOldSchoolDancer;
makeOldSchoolDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.addClass("oldSchoolDancer");
  this.$node.toggle();
  };