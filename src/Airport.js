// 'use strict';
// var weatherClass = new Weather();
function Airport(weatherClass){
  this.containedPlanes = [];
  this.weather = weatherClass || new Weather();
}

Airport.prototype.planes = function(){
  return this.containedPlanes;
};

Airport.prototype.land = function(aPlane) {
  if (!this.weather.isStormy()) {
    this.containedPlanes.push(aPlane);
  } else {
    console.log('string')
  }
};
