'use strict';

describe('plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('is initially not landed', function() {
    expect(plane.isLanded()).toEqual(false);
  });
  // it('can land planes', function() {
  //   expect(plane.land).not.toBeUndefined();
  // });
});
