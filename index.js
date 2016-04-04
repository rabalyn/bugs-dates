var moment      = require('moment');

// Constructor
var BugsDates = function() {};


var getEasterSunday = function(year) {
    /*
    **  Calculate easter sunday by usage of the supplemented
    **  easter calculation by Gauss.
    **  (https://de.wikipedia.org/wiki/Gau%C3%9Fsche_Osterformel#Eine_erg.C3.A4nzte_Osterformel)
    */
    var a   = year % 19;
    var k   = parseInt(year / 100);
    var m   = (15 + parseInt((3 * k + 3) / 4) - parseInt((8 * k + 13) / 25));
    var d   = ((19 * a + m) % 30);
    var s   = (2 - parseInt((3 * k + 3) / 4));
    var r   = parseInt(parseInt(d + a / 11) / 29);
    var og  = (21 + d - r);
    var sz  = (7 - (year + parseInt(year / 4) + s) % 7);
    var oe  = (7 - (og - sz) % 7);

    // eastern is the (og+oe)th of march
    var os      = og + oe;
    var eastern = _normalizeDate(os, year);

    return eastern;
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

var getNewYear = function(year) {
    if( typeof year == "number") {
        try {
            var newYear = new moment({
                year: year,
                day: 1,
                month: 0
            });

            return newYear.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
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

var getCorpusChristi = function(easterSunday) {
    var corpusChristi = _addDays(easterSunday, 60);

    return moment(corpusChristi).toString();
}

var _setDaysOfYear = function(date) {

    if( date === null || date === undefined || date === '') {
        return false;
    }

    if( ! date._isAMomentObject) {
        try {
            date = new Date(date);
            date = new moment(date)
        } catch (err) {
            return false;
        }

        var roseMondayOfYear = new Date(getRoseMonday(date.year()));
        roseMondayOfYear = new moment(roseMondayOfYear);

        if(date.month() === roseMondayOfYear.month() && date.day() === roseMondayOfYear.day()) {
            return true;
        }
    }

    return false;
}

var isRoseMonday = function(date) {
    if( date === null || date === undefined || date === '') {
        return false;
    }

    if( ! date._isAMomentObject) {
        try {
            date = new Date(date);
            date = new moment(date)
        } catch (err) {
            return false;
        }

        var roseMondayOfYear = new Date(getRoseMonday(date.year()));
        roseMondayOfYear = new moment(roseMondayOfYear);

        if(date.month() === roseMondayOfYear.month() && date.day() === roseMondayOfYear.day()) {
            return true;
        }
    }

    return false;
}

var isEasterSunday = function(date) {
    if( date !== null && date !== undefined && ! date._isAMomentObject) {
        try {
            date = new moment(date, "YYYY-MM-DD");
        } catch(err) {
            return false;
        }
    }

    if(date && date._isAMomentObject) {
        var year                = date.year();
        var foo                 = new Date(getEasterSunday(year));
        var easterSundayOfYear  = new moment(foo);

        if( easterSundayOfYear.month() === date.month() &&
            easterSundayOfYear.day() === date.day() )
        {
                return true;
        }
    }

    return false;
}

BugsDates.prototype = {
    getNewYear : getNewYear,
    getRoseMonday: getRoseMonday,
    getAshWednesday: getAshWednesday,
    getEasterSunday: getEasterSunday,
    getEasterMonday: getEasterMonday,
    getGoodFriday: getGoodFriday,
    getAscensionDay: getAscensionDay,
    getWhitsunSunday: getWhitsunSunday,
    getWhitsunMonday: getWhitsunMonday,
    getCorpusChristi: getCorpusChristi,
    isRoseMonday: isRoseMonday,
    isEasterSunday: isEasterSunday
}

module.exports = BugsDates;
