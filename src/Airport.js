function Airport (weatherClass) {
  this.containedPlanes = []
  this.weather = weatherClass || new Weather()
}

Airport.prototype.planes = function () {
  return this.containedPlanes
}
Airport.prototype.land = function(aPlane) {
  if (!this.weather.isStormy() && !aPlane.status()) {
    this.containedPlanes.push(aPlane)
  }
Airport.prototype.takeoff = function (aPlane) {
  if (!this.weather.isStormy() && aPlane.status()) {
    var index = this.containedPlanes.indexOf(aPlane)
    this.containedPlanes.splice(index, 1)
  }
}
}
