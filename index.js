var BugsDates = {};


var _getEasterSunday = function(year) {
    var a   = year % 19;
    var k   = _getK(year);
    var m   = _getM(k);
    var d   = _getD(a, m);
    var s   = _getS(k);
    var r   = _getR(d, a);
    var og  = _getOG(d, r);
    var sz  = _getSZ(year, s);
    var oe  = _getOE(og, sz);

    // eastern is the (og+oe)th of march
    var os  = og + oe;
    var eastern = _normalizeDate(os, year);
    console.log(JSON.stringify(eastern, null, 2));
    console.log("easter sunday in " + year + " is the " );

    return eastern;
}

var _getK = function(year) {
    return year / 100;
}

var _getM = function(x) {
    return (15 + (3 * x + 3) / 4 - (8 * x + 13) / 25);
}

var _getD = function(a, m) {
    return ((19 * a + m) % 30);
}

var _getS = function(k) {
    return (2 - (3 * k + 3) / 4);
}

var _getR = function(d, a) {
    return ((d + a / 11) / 29);
}

var _getOG = function(d, r) {
    return (21 + d - r);
}

var _getSZ = function(x, s) {
    return (7 - (x + x / 4 + s) % 7);
}

var _getOE = function(og, sz) {
    return (7 - (og - sz) % 7);
}

var _normalizeDate = function(nthMarch, year) {
    var day = nthMarch;
    if(day < 31) {
        var date = new Date(year, 2, day);
    } else {
        var aprilDay = day % 31;
        var date = new Date(year, 3, aprilDay);
    }
    console.log("fooo")
    console.log( (new Date(date.getFullYear(), date.getMonth()+1, date.getDay() )) );
    return date;
}


var easterSunday = _getEasterSunday(2016);

BugsDates.easterSunday = easterSunday;

module.exports = BugsDates;
