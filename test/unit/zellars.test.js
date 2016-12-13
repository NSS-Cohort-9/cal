var path = require('path');
var should = require('chai').should();

var zellars = require(path.join(process.cwd(), '/lib/zellars'));

describe("Zellar's Congruence", function () {
  describe('dayOfWeek()', function () {
    it('should calculate first day of the week', function () {
      zellars.dayOfWeek(2016, 3, 1).should.equal(1);
      zellars.dayOfWeek(1900, 3, 1).should.equal(2);
    });
  });

  describe('formula()', function () {
    it('should perform the base calculation', function () {
      zellars.formula(2015, 3, 1).should.equal(1);
      zellars.formula(2100, 3, 15).should.equal(2);
    });
  });

  describe('zellarsToSundayAsZeroDay()', function () {
    it('should convert zellars first day to sunday as zero-th day', function () {
      it('should modify Sat', function () {
        zellars.zellarsToSundayAsZeroDay(0).should.equal(7);
      });
      it('should not modify other days', function () {
        zellars.zellarsToSundayAsZeroDay(1).should.equal(0);
        zellars.zellarsToSundayAsZeroDay(2).should.equal(1);
      });
    });
  });
  describe('modifiedMonth()', function () {
    it('should modify Jan and Feb', function () {
      zellars.modifiedMonth(1).should.equal(13);
      zellars.modifiedMonth(2).should.equal(14);
    });
    it('should not modify other months', function () {
      zellars.modifiedMonth(3).should.equal(3);
    });
  });
  describe('modifiedYear()', function () {
    it('should modify Jan and Feb', function () {
      zellars.modifiedYear(2015, 1).should.equal(2014);
      zellars.modifiedYear(2015, 2).should.equal(2014);
    });
    it('should not modify other months', function () {
      zellars.modifiedYear(2015, 3).should.equal(2015);
    });
  });
});
