'use strict';

function Plane() {
  this._status = false;
}

Plane.prototype = {
  status: function() {
    return this._status;
  },

  changeStatus: function() {
    this._status = !this.status();
  }
};
