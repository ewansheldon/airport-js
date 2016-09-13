describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("Should be stormy roughly 1 in ten days", function () {
    var times_stormy = 0;
    var i = 0;
    var trials = 10000;

    while (i < trials) {
      if (weather.isStormy === true) {
        times_stormy += 1;
      }
      i += 1;
      weather = new Weather();
    }
    expect(times_stormy).toBeGreaterThan((trials / 10) * 0.9);
    expect(times_stormy).toBeLessThan((trials / 10) * 1.1);
    console.log(times_stormy)
  });
});
