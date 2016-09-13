'use strict';

describe('plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('is initially not landed', function() {
    expect(plane.status()).toEqual(false);
  });

  it('changes is status to landed', function() {
    plane.changeStatus();
    expect(plane.status()).toEqual(true);
  });
});
