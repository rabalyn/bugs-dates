'use strict';

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

var getEpiphany = function(year) {
    if( typeof year == "number") {
        try {
            var epiphany = new moment({
                year: year,
                day: 6,
                month: 0
            });

            return epiphany.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getRoseMonday = function(year) {
    var easterSunday = getEasterSunday(year);
    var roseMonday = _addDays(easterSunday, -48);

    return moment(roseMonday).toString();
}

var getAshWednesday = function(year) {
    var easterSunday = getEasterSunday(year);
    var ashWednesday = _addDays(easterSunday, -46);

    return moment(ashWednesday).toString();
}

var getGoodFriday = function(year) {
    var easterSunday = getEasterSunday(year);
    var goodFriday = _addDays(easterSunday, -2);

    return moment(goodFriday).toString();
}

var getEasterMonday = function(year) {
    var easterSunday = getEasterSunday(year);
    var easterMonday = _addDays(easterSunday, 1);
    return moment(easterMonday).toString();
}

var getMayDay = function(year) {
    if( typeof year == "number") {
        try {
            var mayDay = new moment({
                year: year,
                day: 1,
                month: 4
            });

            return mayDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getAscensionDay = function(year) {
    var easterSunday = getEasterSunday(year);
    var ascensionDay = _addDays(easterSunday, 39);

    return moment(ascensionDay).toString();
}

var getWhitsunSunday = function(year) {
    var easterSunday = getEasterSunday(year);
    var whitsunSunday = _addDays(easterSunday, 49);

    return moment(whitsunSunday).toString();
}

var getWhitsunMonday = function(year) {
    var easterSunday = getEasterSunday(year);
    var whitsunMonday = _addDays(easterSunday, 50);

    return moment(whitsunMonday).toString();
}

var getCorpusChristi = function(year) {
    var easterSunday = getEasterSunday(year);
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

        if(date.month() === roseMondayOfYear.month() && date.date() === roseMondayOfYear.date()) {
            return true;
        }
    }

    return false;
}

var getAssumptionDay = function(year) {
    if( typeof year == "number") {
        try {
            var assumptionDay = new moment({
                year: year,
                day: 15,
                month: 7
            });

            return assumptionDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getGermanUnificationDay = function(year) {
    if( typeof year == "number") {
        try {
            var germanUnificationDay = new moment({
                year: year,
                day: 3,
                month: 9
            });

            return germanUnificationDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getReformationDay = function(year) {
    if( typeof year == "number") {
        try {
            var reformationDay = new moment({
                year: year,
                day: 31,
                month: 9
            });

            return reformationDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getAllHallows = function(year) {
    if( typeof year == "number") {
        try {
            var allHallows = new moment({
                year: year,
                day: 1,
                month: 10
            });

            return allHallows.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

/*
**  Wednesday before the 23rd of November
**  https://de.wikipedia.org/wiki/Totensonntag
**  https://de.wikipedia.org/wiki/Bu%C3%9F-_und_Bettag
**  https://en.wikipedia.org/wiki/Bu%C3%9F-_und_Bettag
*/
var getDayOfRepentance = function(year) {
    if( typeof year == "number") {
        try {
            var nov23rd = new moment({
                year: year,
                day: 23,
                month: 10
            });

            do {
                var dayOfRepentance = nov23rd.add(-1, "d");

            } while (dayOfRepentance.day() !== 3);

            return dayOfRepentance.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getChristmasEve = function(year) {
    if( typeof year == "number") {
        try {
            var christmasEve = new moment({
                year: year,
                day: 24,
                month: 11
            });

            return christmasEve.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getChristmasDay = function(year) {
    if( typeof year == "number") {
        try {
            var christmasDay = new moment({
                year: year,
                day: 25,
                month: 11
            });

            return christmasDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getStStephensDay = function(year) {
    if( typeof year == "number") {
        try {
            var stStephensDay = new moment({
                year: year,
                day: 26,
                month: 11
            });

            return stStephensDay.toString();

        } catch (err) {
            console.log(err);
        }
    }

    return {
        error: 'invalid year',
        errorCode: 1
    }
}

var getAllHolidays = function(year) {
    var holidays = {
        newYear:                getNewYear(2016),
        epiphany:               getEpiphany(2016),
        roseMonday:             getRoseMonday(2016),
        ashWednesday:           getAshWednesday(2016),
        goodFriday:             getGoodFriday(2016),
        easterSunday:           getEasterSunday(2016),
        easterMonday:           getEasterMonday(2016),
        mayDay:                 getMayDay(2016),
        ascensionDay:           getAscensionDay(2016),
        whitsunSunday:          getWhitsunSunday(2016),
        whitsunMonday:          getWhitsunMonday(2016),
        corpusChristi:          getCorpusChristi(2016),
        assumptionDay:          getAssumptionDay(2016),
        germanUnificationDay:   getGermanUnificationDay(2016),
        reformationDay:         getReformationDay(2016),
        allHallows:             getAllHallows(2016),
        dayOfRepentance:        getDayOfRepentance(2016),
        christmasEve:           getChristmasEve(2016),
        christmasDay:           getChristmasDay(2016),
        stStephensDay:          getStStephensDay(2016)
    };

    return holidays;
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

        if(date.month() === roseMondayOfYear.month() && date.date() === roseMondayOfYear.date()) {
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

    if(date && moment.isMoment(date)) {
        var year                = date.year();
        var foo                 = new Date(getEasterSunday(year));
        var easterSundayOfYear  = new moment(foo);

        if( easterSundayOfYear.month() === date.month() &&
            easterSundayOfYear.date() === date.date() )
        {
                return true;
        }
    }

    return false;
}

/*
**  list of dates I wanna implement:
**  https://de.wikipedia.org/wiki/Gesetzliche_Feiertage_in_Deutschland
**  https://en.wikipedia.org/wiki/Public_holidays_in_Germany
*/
BugsDates.prototype = {
    getAllHolidays: getAllHolidays,
    getNewYear : getNewYear,
    getEpiphany: getEpiphany,
    getRoseMonday: getRoseMonday,
    getAshWednesday: getAshWednesday,
    getEasterSunday: getEasterSunday,
    getEasterMonday: getEasterMonday,
    getGoodFriday: getGoodFriday,
    getMayDay: getMayDay,
    getAscensionDay: getAscensionDay,
    getWhitsunSunday: getWhitsunSunday,
    getWhitsunMonday: getWhitsunMonday,
    getCorpusChristi: getCorpusChristi,
    getAssumptionDay: getAssumptionDay,
    getGermanUnificationDay: getGermanUnificationDay,
    getReformationDay: getReformationDay,
    getAllHallows, getAllHallows,
    getDayOfRepentance: getDayOfRepentance,
    getChristmasEve: getChristmasEve,
    getChristmasDay: getChristmasDay,
    getStStephensDay: getStStephensDay,
    isRoseMonday: isRoseMonday,
    isEasterSunday: isEasterSunday
}

module.exports = BugsDates;
