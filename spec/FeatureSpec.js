'use strict';

describe('Feature test', function() {
  var airport;
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can land at airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
