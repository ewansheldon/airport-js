'use strict';

describe("airport", function() {
    var airport;
    var plane;

    beforeEach(function() {
      airport = new Airport();
      plane = new Plane();
    });

    it('has no planes by default', function() {
      console.log("this.containedPlanes " + this.containedPlanes)
      expect(airport.planes()).toEqual([]);
    });

    it("planes can land at airport", function() {
      airport.land(plane);
      console.log(airport.containedPlanes)
      expect(airport.planes()).toContain(plane);
    });
});
