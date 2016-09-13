// 'use strict';

function Airport(){
  this.containedPlanes = [];
}

Airport.prototype.planes = function(){
  return this.containedPlanes;
};

Airport.prototype.land = function(aPlane) {
  this.containedPlanes.push(aPlane)
  
};
