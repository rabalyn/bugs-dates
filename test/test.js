'use strict'

const chai = require('chai')
const should = chai.should()

const bugs = require('../index.js')
const bunny = new bugs(2016)


describe('#newYear', function() {
    it('verifies new year date for 2010', function() {
        bunny.getNewYear(2010)
            .should.equal(new Date(2010, 0, 1).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getNewYear('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getNewYear(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#epiphany', function() {
    it('verifies Epiphany date for 2010', function() {
        bunny.getEpiphany(2010)
            .should.equal(new Date(2010, 0, 6).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getEpiphany('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getEpiphany(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#roseMonday', function() {

    it('verifies date of rose monday for 1923', function() {
        bunny.getRoseMonday(1923)
            .should.equal(new Date(1923, 1, 12).toISOString())
    })

    it('verifies date of rose monday for 1954', function() {
        bunny.getRoseMonday((1954))
            .should.equal(new Date(1954, 2, 1).toISOString())
    })

    it('verifies date of rose monday for 1981', function() {
        bunny.getRoseMonday((1981))
            .should.equal(new Date(1981, 2, 2).toISOString())
    })

    it('verifies date of rose monday for 2014', function() {
        bunny.getRoseMonday((2014))
            .should.equal(new Date(2014, 2, 3).toISOString())
    })

    it('verifies date of rose monday for 2015', function() {
        bunny.getRoseMonday((2015))
            .should.equal(new Date(2015, 1, 16).toISOString())
    })

    it('verifies date of rose monday for 2016', function() {
        bunny.getRoseMonday((2016))
            .should.equal(new Date(2016, 1, 8).toISOString())
    })
})

describe('#ashWednesday', function() {

    it('verifies date of ash wednesday for 1923', function() {
        bunny.getAshWednesday((1923))
        .should.equal(new Date(1923, 1, 14).toISOString())
    })

    it('verifies date of ash wednesday for 1954', function() {
        bunny.getAshWednesday((1954))
        .should.equal(new Date(1954, 2, 3).toISOString())
    })

    it('verifies date of ash wednesday for 1981', function() {
        bunny.getAshWednesday((1981))
        .should.equal(new Date(1981, 2, 4).toISOString())
    })

    it('verifies date of ash wednesday for 2016', function() {
        bunny.getAshWednesday((2016))
        .should.equal(new Date(2016, 1, 10).toISOString())
    })
})

describe('#goodFriday', function() {

    it('verifies date of good friday for 1923', function() {
        bunny.getGoodFriday((1923))
            .should.equal(new Date(1923, 2, 30).toISOString())
    })

    it('verifies date of good friday for 2016', function() {
        bunny.getGoodFriday((2016))
            .should.equal(new Date(2016, 2, 25).toISOString())
    })
})

describe('#easterSunday', function() {

    it('verifies date for 1923', function() {
        bunny.getEasterSunday(1923)
        .should.equal((new Date(1923, 3, 1).toISOString()))
    })

    it('verifies date for 1954', function() {
        bunny.getEasterSunday(1954)
        .should.equal((new Date(1954, 3, 18).toISOString()))
    })

    it('verifies date for 1981', function() {
        bunny.getEasterSunday(1981)
        .should.equal((new Date(1981, 3, 19).toISOString()))
    })

    it('verifies date for 2014', function() {
        bunny.getEasterSunday(2014)
            .should.equal((new Date(2014, 3, 20).toISOString()))
    })

    it('verifies date for 2015', function() {
        bunny.getEasterSunday(2015)
            .should.equal((new Date(2015, 3, 5).toISOString()))
    })

    it('verifies date for 2016', function() {
        bunny.getEasterSunday(2016)
            .should.equal((new Date(2016, 2, 27).toISOString()))
    })


})

describe('#easterMonday', function() {

    it('verifies date of easter monday for 2016', function() {
        bunny.getEasterMonday((2016))
            .should.equal(new Date(2016, 2, 28).toISOString())
    })
})

describe('#mayDay', function() {
    it('verifies May Day date for 2010', function() {
        bunny.getMayDay(2010)
            .should.equal(new Date(2010, 4, 1).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getMayDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getMayDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#ascensionDay', function() {

    it('verifies date of ascension day for 2016', function() {
        bunny.getAscensionDay((2016))
            .should.equal(new Date(2016, 4, 5).toISOString())
    })
})

describe('#whitsunSunday', function() {

    it('verifies date of whitsun sunday for 2016', function() {
        bunny.getWhitsunSunday((2016))
            .should.equal(new Date(2016, 4, 15).toISOString())
    })
})

describe('#whitsunMonday', function() {

    it('verifies date of whitsun monday for 2016', function() {
        bunny.getWhitsunMonday((2016))
            .should.equal(new Date(2016, 4, 16).toISOString())
    })
})

describe('#corpusChristi', function() {

    it('verifies date of corpus Christi for 2016', function() {
        bunny.getCorpusChristi((2016))
            .should.equal(new Date(2016, 4, 26).toISOString())
    })
})

describe('#isEasterSunday', function() {

    it('verifies if a given date is eastersunday (date string, false)', function() {
        bunny.isEasterSunday("2000-04-13")
            .should.equal(false)
    })

    it('verifies if a given date is eastersunday (Date object, false)', function() {
        const date = new Date(2000, 3, 13)
        bunny.isEasterSunday(date)
            .should.equal(false)
    })

    it('verifies if a given date is eastersunday (date string, true)', function() {
        bunny.isEasterSunday("2000-04-23")
            .should.equal(true)
    })

    it('verifies if a given date is eastersunday (Date object, true)', function() {
        const date = new Date(2000, 3, 23)
        bunny.isEasterSunday(date)
            .should.equal(true)
    })

    it('verifies if a given date is eastersunday (undefined)', function() {
        bunny.isEasterSunday(undefined)
            .should.equal(false)
    })

    it('verifies if a given date is eastersunday (null)', function() {
        bunny.isEasterSunday(null)
            .should.equal(false)
    })

    it('verifies if a given date is eastersunday ("foo")', function() {
        bunny.isEasterSunday("foo")
        .should.equal(false)
    })

    it('verifies if a given date is eastersunday ("")', function() {
        bunny.isEasterSunday('')
        .should.equal(false)
    })

})

describe('#isRoseMonday', function() {

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday("01.03.1927")
            .should.equal(false)
    })

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday(undefined)
            .should.equal(false)
    })

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday(null)
            .should.equal(false)
    })

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday('')
            .should.equal(false)
    })
})

describe('#assumptionDay', function() {
    it('verifies Assumption Day date for 2010', function() {
        bunny.getAssumptionDay(2010)
            .should.equal(new Date(2010, 7, 15).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getAssumptionDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getAssumptionDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#germanUnificationDay', function() {
    it('verifies German Unification Day date for 2010', function() {
        bunny.getGermanUnificationDay(2010)
            .should.equal(new Date(2010, 9, 3).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getGermanUnificationDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getGermanUnificationDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#reformationDay', function() {
    it('verifies Reformation Day date for 2010', function() {
        bunny.getReformationDay(2010)
            .should.equal(new Date(2010, 9, 31).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getReformationDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getReformationDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#allHallows', function() {
    it('verifies All Hallows date for 2010', function() {
        bunny.getAllHallows(2010)
            .should.equal(new Date(2010, 10, 1).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getAllHallows('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getAllHallows(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#dayOfRepentance', function() {
    it('verifies Day Of Repentance date for 2005', function() {
        bunny.getDayOfRepentance(2005)
            .should.equal(new Date(2005, 10, 16).toISOString())
    })

    it('verifies Day Of Repentance date for 2015', function() {
        bunny.getDayOfRepentance(2015)
            .should.equal(new Date(2015, 10, 18).toISOString())
    })

    it('verifies Day Of Repentance date for 2016', function() {
        bunny.getDayOfRepentance(2016)
            .should.equal(new Date(2016, 10, 16).toISOString())
    })

    it('verifies Day Of Repentance date for 2017', function() {
        bunny.getDayOfRepentance(2017)
            .should.equal(new Date(2017, 10, 22).toISOString())
    })

    it('verifies Day Of Repentance date for 2018', function() {
        bunny.getDayOfRepentance(2018)
            .should.equal(new Date(2018, 10, 21).toISOString())
    })

    it('verifies Day Of Repentance date for 2019', function() {
        bunny.getDayOfRepentance(2019)
            .should.equal(new Date(2019, 10, 20).toISOString())
    })

    it('verifies Day Of Repentance date for 2020', function() {
        bunny.getDayOfRepentance(2020)
            .should.equal(new Date(2020, 10, 18).toISOString())
    })

    it('verifies Day Of Repentance date for 2021', function() {
        bunny.getDayOfRepentance(2021)
            .should.equal(new Date(2021, 10, 17).toISOString())
    })

    it('verifies Day Of Repentance date for 2022', function() {
        bunny.getDayOfRepentance(2022)
            .should.equal(new Date(2022, 10, 16).toISOString())
    })

    it('verifies Day Of Repentance date for 2023', function() {
        bunny.getDayOfRepentance(2023)
            .should.equal(new Date(2023, 10, 22).toISOString())
    })

    it('verifies Day Of Repentance date for 2024', function() {
        bunny.getDayOfRepentance(2024)
            .should.equal(new Date(2024, 10, 20).toISOString())
    })

    it('verifies Day Of Repentance date for 2025', function() {
        bunny.getDayOfRepentance(2025)
            .should.equal(new Date(2025, 10, 19).toISOString())
    })

    it('verifies Day Of Repentance date for 2026', function() {
        bunny.getDayOfRepentance(2026)
            .should.equal(new Date(2026, 10, 18).toISOString())
    })

    it('verifies Day Of Repentance date for 2027', function() {
        bunny.getDayOfRepentance(2027)
            .should.equal(new Date(2027, 10, 17).toISOString())
    })

    it('verifies Day Of Repentance date for 2028', function() {
        bunny.getDayOfRepentance(2028)
            .should.equal(new Date(2028, 10, 22).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getDayOfRepentance('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getDayOfRepentance(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#christmaseve', function() {
    it('verifies Christmas Eve date for 2010', function() {
        bunny.getChristmasEve(2010)
            .should.equal(new Date(2010, 11, 24).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getChristmasEve('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getChristmasEve(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#christmasDay', function() {
    it('verifies Christmas Day date for 2010', function() {
        bunny.getChristmasDay(2010)
            .should.equal(new Date(2010, 11, 25).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getChristmasDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getChristmasDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#stStephensDay', function() {
    it('verifies Christmas Eve date for 2010', function() {
        bunny.getStStephensDay(2010)
            .should.equal(new Date(2010, 11, 26).toISOString())
    })

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getStStephensDay('foo')
            .should.have.all.keys('error', 'errorCode')
    })

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getStStephensDay(null)
            .should.have.all.keys('error', 'errorCode')
    })
})

describe('#allHolidaysOfYear', function() {
    it('verifies all holidays of 2016', function() {
        const holidays2016 = {
            newYear:                new Date(2016, 0, 1).toISOString(),
            epiphany:               new Date(2016, 0, 6).toISOString(),
            roseMonday:             new Date(2016, 1, 8).toISOString(),
            ashWednesday:           new Date(2016, 1, 10).toISOString(),
            goodFriday:             new Date(2016, 2, 25).toISOString(),
            easterSunday:           new Date(2016, 2, 27).toISOString(),
            easterMonday:           new Date(2016, 2, 28).toISOString(),
            mayDay:                 new Date(2016, 4, 1).toISOString(),
            ascensionDay:           new Date(2016, 4, 5).toISOString(),
            whitsunSunday:          new Date(2016, 4, 15).toISOString(),
            whitsunMonday:          new Date(2016, 4, 16).toISOString(),
            corpusChristi:          new Date(2016, 4, 26).toISOString(),
            assumptionDay:          new Date(2016, 7, 15).toISOString(),
            germanUnificationDay:   new Date(2016, 9, 3).toISOString(),
            reformationDay:         new Date(2016, 9, 31).toISOString(),
            allHallows:             new Date(2016, 10, 1).toISOString(),
            dayOfRepentance:        new Date(2016, 10, 16).toISOString(),
            christmasEve:           new Date(2016, 11, 24).toISOString(),
            christmasDay:           new Date(2016, 11, 25).toISOString(),
            stStephensDay:          new Date(2016, 11, 26).toISOString()
        }

        bunny.getAllHolidays(2016).should.deep.equal(holidays2016)
    })
})
