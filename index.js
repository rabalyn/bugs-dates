var moment      = require('moment');

// Constructor
var BugsDates = function(year) {};


var getEasterSunday = function(year) {
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
    var os      = og + oe;
    var eastern = _normalizeDate(os, year);

    return eastern;
}

var _getK = function(year) {
    return parseInt(year / 100);
}

var _getM = function(x) {
    return (15 + parseInt((3 * x + 3) / 4) - parseInt((8 * x + 13) / 25));
}

var _getD = function(a, m) {
    return ((19 * a + m) % 30);
}

var _getS = function(k) {
    return (2 - parseInt((3 * k + 3) / 4));
}

var _getR = function(d, a) {
    return parseInt(parseInt(d + a / 11) / 29);
}

var _getOG = function(d, r) {
    return (21 + d - r);
}

var _getSZ = function(x, s) {
    return (7 - (x + parseInt(x / 4) + s) % 7);
}

var _getOE = function(og, sz) {
    return (7 - (og - sz) % 7);
}

var _normalizeDate = function(nthMarch, year) {
    var day     = nthMarch;
    var date    = '';

    if (day <= 31) {
        date = new moment(year+"-03-"+day, "YYYY-MM-DD");
    } else {
        var aprilDay = day % 31;
        if(aprilDay < 10) aprilDay = "0"+aprilDay;
        date = new moment(year+"-04-"+aprilDay, "YYYY-MM-DD");
    }

    return date.toString();
}

var _addDays = function (date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

var getRoseMonday = function(easterSunday) {
    var roseMonday = _addDays(easterSunday, -48);

    return moment(roseMonday).toString();
}

var getAshWednesday = function(easterSunday) {
    var ashWednesday = _addDays(easterSunday, -46);

    return moment(ashWednesday).toString();
}

var getGoodFriday = function(easterSunday) {
    var goodFriday = _addDays(easterSunday, -2);

    return moment(goodFriday).toString();
}

var getEasterMonday = function(date) {
    var easterMonday = _addDays(date, 1);
    return moment(easterMonday).toString();
}

var getAscensionDay = function(easterSunday) {
    var ascensionDay = _addDays(easterSunday, 39);

    return moment(ascensionDay).toString();
}

var getWhitsunSunday = function(easterSunday) {
    var whitsunSunday = _addDays(easterSunday, 49);

    return moment(whitsunSunday).toString();
}

var getWhitsunMonday = function(easterSunday) {
    var whitsunMonday = _addDays(easterSunday, 50);

    return moment(whitsunMonday).toString();
}

var getCorpusChrisi = function(easterSunday) {
    var corpusChristi = _addDays(easterSunday, 60);

    return moment(corpusChristi).toString();
}

BugsDates.prototype = {
    getRoseMonday: getRoseMonday,
    getAshWednesday: getAshWednesday,
    getEasterSunday: getEasterSunday,
    getEasterMonday: getEasterMonday,
    getGoodFriday: getGoodFriday,
    getAscensionDay: getAscensionDay,
    getWhitsunSunday: getWhitsunSunday,
    getWhitsunMonday: getWhitsunMonday,
    getCorpusChrisi: getCorpusChrisi
}

module.exports = BugsDates;
