var cp = require('child_process');

describe('CLI', function () {
  describe('Leap February', function () {
    it('should handle leap years', function () {
      testCal('2 2012');
    });
    it('should handle non leap years', function () {
      testCal('2 2014');
    });
  });
  describe('Month Lengths', function () {
    it ('should handle a 4 week month', function () {
      testCal('2 2015');
    });
    it ('should handle a 5 week month', function () {
      testCal('1 2015');
    });
    it ('should handle a 6 week month', function () {
      testCal('2 2015');
    });
  });
  describe('Year', function () {
    it('should handle printing a full year', function () {
      testCal('2015');
    });
  });
  describe('Current Month', function () {
    it('should handle no argument', function () {
      testCal();
    });
  });
  describe('Usage', function () {
    it('should print help for bad arguments', function () {
      testCal('1752');
      testCal('10000');
      testCal('13 2015');
      testCal('asdf');
    });
  });
});

function testCal(arg) {
  var sep = arg ? ' ' : '';

  var goal = cp.execSync('cal' + sep + arg).toString();
  var output = cp.execSync('./cal.js' + sep + arg).toString();
  output.should.equal(goal);

  // or (with the done argument)
  //
  // cp.exec('cal' + sep + arg, function (err, goal) {
  //   cp.exec('./cal.js' + sep + arg, function (err, output) {
  //     output.should.equal(goal);
  //     done();
  //   });
  // });
}









