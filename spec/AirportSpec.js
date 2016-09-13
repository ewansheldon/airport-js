// 'use strict';

describe("airport during sunny weather", function() {
    var airport;
    // var plane;

    beforeEach(function() {
      weather = {isStormy: function(){}};
      airport = new Airport(weather);
      landedPlane = {status: function(){}};
      notLandedPlane = {status: function(){}};
      plane = {status: function(){}};
      spyOn(weather, 'isStormy').and.returnValue(false);
      spyOn(landedPlane, 'status').and.returnValue(true);
      spyOn(notLandedPlane, 'status').and.returnValue(false);
      spyOn(plane, 'status').and.returnValue(false);
    });

    it('has no planes by default', function() {
      expect(airport.planes()).toEqual([]);
    });

    it("planes can land at airport", function() {
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });

    it("allows planes to takeoff", function(){
      airport.containedPlanes.push(landedPlane);
      airport.takeoff(landedPlane);
      expect(airport.planes()).not.toContain(landedPlane);
    });

    it('does not allow planes to take off when they are not landed', function() {
      airport.containedPlanes.push(notLandedPlane);
      airport.takeoff(notLandedPlane);
      expect(airport.planes()).toContain(notLandedPlane);
    });

    it('does not allow planes to land when they are currently landed', function() {
      airport.land(landedPlane);
      expect(airport.planes()).not.toContain(landedPlane);
    });

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
      airport.containedPlanes.push(plane);
      airport.takeoff(plane);
      expect(airport.planes()).toContain(plane);

    });
  });
