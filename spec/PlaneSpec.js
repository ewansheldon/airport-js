'use strict';

describe('plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('is initially not landed', function() {
    expect(plane.isLanded).toBe(false);
  });
  it('can land planes', function() {
    expect(plane.land).not.toBeUndefined();
  });
});
