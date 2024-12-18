'use strict'

// Constructor
const BugsDates = function() {}

/**
 * Gets the date of Easter Sunday for a given year using Gauss's Easter algorithm
 * @param {number} year - The year to calculate Easter Sunday for
 * @returns {string} ISO string of the Easter Sunday date or error object
 */
const getEasterSunday = function(year) {
    /*
    **  Calculate easter sunday by usage of the supplemented
    **  easter calculation by Gauss.
    **  (https://de.wikipedia.org/wiki/Gau%C3%9Fsche_Osterformel#Eine_erg.C3.A4nzte_Osterformel)
    */
    const a = year % 19
    const k = parseInt(year / 100)
    const m = (15 + parseInt((3 * k + 3) / 4) - parseInt((8 * k + 13) / 25))
    const d = ((19 * a + m) % 30)
    const s = (2 - parseInt((3 * k + 3) / 4))
    const r = parseInt(parseInt(d + a / 11) / 29)
    const og = (21 + d - r)
    const sz = (7 - (year + parseInt(year / 4) + s) % 7)
    const oe = (7 - (og - sz) % 7)

    // eastern is the (og+oe)th of march
    const os = og + oe
    const eastern = _normalizeDate(os, year)

    return eastern
}

const _normalizeDate = function(nthMarch, year) {
    let day = nthMarch
    let date

    if (day <= 31) {
        date = new Date(year, 2, day) // March is month 2 in JS Date
    } else {
        let aprilDay = day % 31
        date = new Date(year, 3, aprilDay) // April is month 3
    }

    return date.toISOString()
}

const _addDays = function (date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

const getNewYear = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const newYear = new Date(year, 0, 1)
    return newYear.toISOString()
}

const getEpiphany = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    const epiphany = new Date(year, 0, 6)
    return epiphany.toISOString()

}

const getRoseMonday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const roseMonday = _addDays(easterSunday, -48)
    return roseMonday.toISOString()
}

const getAshWednesday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const ashWednesday = _addDays(easterSunday, -46)
    return ashWednesday.toISOString()
}

const getGoodFriday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const goodFriday = _addDays(easterSunday, -2)
    return goodFriday.toISOString()
}

const getEasterMonday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const easterMonday = _addDays(easterSunday, 1)
    return easterMonday.toISOString()
}

const getMayDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }

    const mayDay = new Date(year, 4, 1)
    return mayDay.toISOString()

}

const getAscensionDay = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const ascensionDay = _addDays(easterSunday, 39)
    return ascensionDay.toISOString()
}

const getWhitsunSunday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const whitsunSunday = _addDays(easterSunday, 49)
    return whitsunSunday.toISOString()
}

const getWhitsunMonday = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const whitsunMonday = _addDays(easterSunday, 50)
    return whitsunMonday.toISOString()
}

const getCorpusChristi = function(year) {
    const easterSunday = new Date(getEasterSunday(year))
    const corpusChristi = _addDays(easterSunday, 60)
    return corpusChristi.toISOString()
}

const getAssumptionDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    const assumptionDay = new Date(year, 7, 15)
    return assumptionDay.toISOString()

}

const getGermanUnificationDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const germanUnificationDay = new Date(year, 9, 3)
    return germanUnificationDay.toISOString()
}

const getReformationDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const reformationDay = new Date(year, 9, 31)
    return reformationDay.toISOString()
}

const getAllHallows = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const allHallows = new Date(year, 10, 1)
    return allHallows.toISOString()
}

/*
**  Wednesday before the 23rd of November
**  https://de.wikipedia.org/wiki/Totensonntag
**  https://de.wikipedia.org/wiki/Bu%C3%9F-_und_Bettag
**  https://en.wikipedia.org/wiki/Bu%C3%9F-_und_Bettag
*/
const getDayOfRepentance = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }

    const nov23rd = new Date(year, 10, 22)
    const dayOfWeek = nov23rd.getDay()

    // Calculate days to subtract to reach the previous Wednesday
    const daysToSubtract = (dayOfWeek + 4) % 7
    const dayOfRepentance = new Date(year, 10, nov23rd.getDate() - daysToSubtract)

    if (dayOfRepentance.getDay() !== 3) {
        return {
            error: 'invalid day of week',
            errorCode: 2
        }
    }

    return dayOfRepentance.toISOString()
}

const getChristmasEve = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }

    const christmasEve = new Date(year, 11, 24)
    return christmasEve.toISOString()
}

const getChristmasDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const christmasDay = new Date(year, 11, 25)
    return christmasDay.toISOString()
}

const getStStephensDay = function(year) {
    if( typeof year !== "number") {
        return {
            error: 'invalid year',
            errorCode: 1
        }
    }
    
    const stStephensDay = new Date(year, 11, 26)
    return stStephensDay.toISOString()
}

const getAllHolidays = function(year) {
    const holidays = {
        newYear:                getNewYear(year),
        epiphany:               getEpiphany(year),
        roseMonday:             getRoseMonday(year),
        ashWednesday:           getAshWednesday(year),
        goodFriday:             getGoodFriday(year),
        easterSunday:           getEasterSunday(year),
        easterMonday:           getEasterMonday(year),
        mayDay:                 getMayDay(year),
        ascensionDay:           getAscensionDay(year),
        whitsunSunday:          getWhitsunSunday(year),
        whitsunMonday:          getWhitsunMonday(year),
        corpusChristi:          getCorpusChristi(year),
        assumptionDay:          getAssumptionDay(year),
        germanUnificationDay:   getGermanUnificationDay(year),
        reformationDay:         getReformationDay(year),
        allHallows:             getAllHallows(year),
        dayOfRepentance:        getDayOfRepentance(year),
        christmasEve:           getChristmasEve(year),
        christmasDay:           getChristmasDay(year),
        stStephensDay:          getStStephensDay(year)
    }

    return holidays
}

const isRoseMonday = function(date) {
    if( date === null || date === undefined || date === '') {
        return false
    }

    try {
        const inputDate = new Date(date)
        if (isNaN(inputDate.getTime())) {
            return false
        }

        const roseMondayOfYear = new Date(getRoseMonday(inputDate.getFullYear()))
        
        if(inputDate.getMonth() === roseMondayOfYear.getMonth() && 
           inputDate.getDate() === roseMondayOfYear.getDate()) {
            return true
        }
    } catch (err) {
        return false
    }

    return false
}

const isEasterSunday = function(date) {
    if (!date) return false

    try {
        const inputDate = new Date(date)
        if (isNaN(inputDate.getTime())) {
            return false
        }

        const year = inputDate.getFullYear()
        const easterSundayOfYear = new Date(getEasterSunday(year))

        if (easterSundayOfYear.getMonth() === inputDate.getMonth() &&
            easterSundayOfYear.getDate() === inputDate.getDate()) {
            return true
        }
    } catch(err) {
        return false
    }

    return false
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
    getAllHallows: getAllHallows,
    getDayOfRepentance: getDayOfRepentance,
    getChristmasEve: getChristmasEve,
    getChristmasDay: getChristmasDay,
    getStStephensDay: getStStephensDay,
    isRoseMonday: isRoseMonday,
    isEasterSunday: isEasterSunday
}

module.exports = BugsDates
