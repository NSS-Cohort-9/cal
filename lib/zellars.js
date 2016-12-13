function zellarsToSundayAsZeroDay(h) {
  // h is the day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
  if (h === 0) {
    return 7;
  } else {
    return h - 1;
  }
}

function modifiedYear(year, month) {
  // When using a computer, it is simpler to handle the modified year Y, which is Y - 1 during January and February than using decimal arithmetic.

  if (month < 3) {
    return year - 1;
  } else {
    return year;
  }
}

function modifiedMonth(month) {
  // In this algorithm January and February are counted as months 13 and 14 of the previous year.
  // 3 = March, 4 = April, 5 = May, ..., 14 = February

  if (month < 3) {
    return month + 12
  } else {
    return month;
  }
}

function formula(year, month, day) {
  // Julian calendar
  // ( q + floor( 26 * (m + 1) / 10 ) + Y + floor ( Y / 4 ) + 5 ) % 7
  // returns day of the week (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)

  var q = day;
  var m = modifiedMonth(month);
  var Y = modifiedYear(year, month);

  return (q + Math.floor(26/10 * (m + 1)) + Y + Math.floor(Y/4) + 5) % 7;
}

function dayOfWeek(year, month, day) {
  var zellars = formula(year, month, day);

  return zellarsToSundayAsZeroDay(zellars);
}

module.exports.zellarsToSundayAsZeroDay = zellarsToSundayAsZeroDay;
module.exports.modifiedYear = modifiedYear;
module.exports.modifiedMonth = modifiedMonth;
module.exports.formula = formula;
module.exports.dayOfWeek = dayOfWeek;
