function Weather() {

}

Weather.prototype.isStormy = function() {
  var index = Math.floor((Math.random() * 10) + 1);
  if (index > 8) {
    return true;
  } else {
    return false;
  }
};
