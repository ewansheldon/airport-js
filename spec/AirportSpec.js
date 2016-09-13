// 'use strict';

describe("airport during sunny weather", function() {
    var airport;
    var plane;

    beforeEach(function() {
      weather = {isStormy: function(){}};
      airport = new Airport(weather);
      plane = jasmine.createSpyObj('plane',['status']);
      spyOn(weather, 'isStormy').and.returnValue(false);
    });

    it('has no planes by default', function() {
      expect(airport.planes()).toEqual([]);
    });

    it("planes can land at airport", function() {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });

    it("allows planes to takeoff", function(){
      airport.land(plane);
      airport.takeoff(plane)
      expect(airport.planes()).not.toContain(plane);
    })

});

describe("airport when stormy", function() {
    var airport;
    var plane;

    beforeEach(function() {
      weather = {isStormy: function(){}};
      airport = new Airport(weather);
      plane = jasmine.createSpyObj('plane',['status']);
      spyOn(weather, 'isStormy').and.returnValue(true);
    });

    it('cannot land at airport when stormy', function() {
      airport.land(plane);
      expect(airport.planes()).not.toContain(plane);
    });

    it("doesnt planes to take off", function() {
      airport.containedPlanes.push(plane)
      airport.takeoff(plane)
      expect(airport.planes()).toContain(plane)

    })
  });
