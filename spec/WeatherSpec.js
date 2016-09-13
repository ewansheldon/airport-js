describe('weather', function() {
    var weather;

    beforeEach(function() {
      weather = new Weather();
      spyOn(Math, 'random').and.returnValue(0.9);
    }
);

it('can respond to stormy method', function() {
  expect(weather.isStormy()).toEqual(true);
  });
});
