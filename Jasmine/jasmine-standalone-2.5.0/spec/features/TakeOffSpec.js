describe("Take Off", function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    weather = {
      isStormy: function(){}
    };
    airport = new Airport(weather);
    plane = new Plane();
  });

  it("a plane can take off from an airport in good weather", function(){
    plane.land_at(airport);
    plane.take_off();
    expect(airport.planes()).toEqual([]);
  });

  it('prevents take off when weather is stormy', function () {
    spyOn(Math, 'random').and.returnValue(1);
    plane.land_at(airport);
    spyOn(weather,'isStormy').and.returnValue(true); // !!!!!!!
    expect(function() {plane.take_off();}).toThrow(new Error('cannot take off during storm'));
  });
});

// expect(parser.parse(raw)).toThrow(new Error("Parsing is not possible"));
//
//
// expect( function(){ parser.parse(raw); } ).toThrow(new Error("Parsing is not possible"));
