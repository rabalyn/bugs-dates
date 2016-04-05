var chai        = require('chai');
var should      = chai.should();
var moment      = require('moment');

var bugs        = require('../index.js');
var bunny       = new bugs(2016);


describe('#newYear', function() {
    it('verifies new year date for 2010', function() {
        bunny.getNewYear(2010)
            .should.equal(new moment("2010-01-01", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getNewYear('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getNewYear(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#epiphany', function() {
    it('verifies Epiphany date for 2010', function() {
        bunny.getEpiphany(2010)
            .should.equal(new moment("2010-01-06", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getEpiphany('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getEpiphany(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#roseMonday', function() {

    it('verifies date of rose monday for 1923', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(1923))
            .should.equal(moment("1923-02-12", "YYYY-MM-DD").toString());
    });

    it('verifies date of rose monday for 1954', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(1954))
            .should.equal(moment("1954-03-01", "YYYY-MM-DD").toString());
    });

    it('verifies date of rose monday for 1981', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(1981))
            .should.equal(moment("1981-03-02", "YYYY-MM-DD").toString());
    });

    it('verifies date of rose monday for 2014', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(2014))
            .should.equal(moment("2014-03-03", "YYYY-MM-DD").toString());
    });

    it('verifies date of rose monday for 2015', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(2015))
            .should.equal(moment("2015-02-16", "YYYY-MM-DD").toString());
    });

    it('verifies date of rose monday for 2016', function() {
        bunny.getRoseMonday(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-02-08", "YYYY-MM-DD").toString());
    });
});

describe('#ashWednesday', function() {

    it('verifies date of ash wednesday for 1923', function() {
        bunny.getAshWednesday(bunny.getEasterSunday(1923))
        .should.equal(moment("1923-02-14", "YYYY-MM-DD").toString());
    });

    it('verifies date of ash wednesday for 1954', function() {
        bunny.getAshWednesday(bunny.getEasterSunday(1954))
        .should.equal(moment("1954-03-03", "YYYY-MM-DD").toString());
    });

    it('verifies date of ash wednesday for 1981', function() {
        bunny.getAshWednesday(bunny.getEasterSunday(1981))
        .should.equal(moment("1981-03-04", "YYYY-MM-DD").toString());
    });

    it('verifies date of ash wednesday for 2016', function() {
        bunny.getAshWednesday(bunny.getEasterSunday(2016))
        .should.equal(moment("2016-02-10", "YYYY-MM-DD").toString());
    });
});

describe('#goodFriday', function() {

    it('verifies date of good friday for 1923', function() {
        bunny.getGoodFriday(bunny.getEasterSunday(1923))
            .should.equal(moment("1923-03-30", "YYYY-MM-DD").toString());
    });

    it('verifies date of good friday for 2016', function() {
        bunny.getGoodFriday(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-03-25", "YYYY-MM-DD").toString());
    });
});

describe('#easterSunday', function() {

    it('verifies date for 1923', function() {
        bunny.getEasterSunday(1923)
        .should.equal((moment("1923-04-01", "YYYY-MM-DD").toString()));
    });

    it('verifies date for 1954', function() {
        bunny.getEasterSunday(1954)
        .should.equal((moment("1954-04-18", "YYYY-MM-DD").toString()));
    });

    it('verifies date for 1981', function() {
        bunny.getEasterSunday(1981)
        .should.equal((moment("1981-04-19", "YYYY-MM-DD").toString()));
    });

    it('verifies date for 2014', function() {
        bunny.getEasterSunday(2014)
            .should.equal((moment("2014-04-20", "YYYY-MM-DD").toString()));
    });

    it('verifies date for 2015', function() {
        bunny.getEasterSunday(2015)
            .should.equal((moment("2015-04-05", "YYYY-MM-DD").toString()));
    });

    it('verifies date for 2016', function() {
        bunny.getEasterSunday(2016)
            .should.equal((moment("2016-03-27", "YYYY-MM-DD").toString()));
    });


});

describe('#easterMonday', function() {

    it('verifies date of easter monday for 2016', function() {
        bunny.getEasterMonday(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-03-28", "YYYY-MM-DD").toString());
    });
});

describe('#mayDay', function() {
    it('verifies May Day date for 2010', function() {
        bunny.getMayDay(2010)
            .should.equal(new moment("2010-05-01", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getMayDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getMayDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#ascensionDay', function() {

    it('verifies date of ascension day for 2016', function() {
        bunny.getAscensionDay(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-05-05", "YYYY-MM-DD").toString());
    });
});

describe('#whitsunSunday', function() {

    it('verifies date of whitsun sunday for 2016', function() {
        bunny.getWhitsunSunday(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-05-15", "YYYY-MM-DD").toString());
    });
});

describe('#whitsunMonday', function() {

    it('verifies date of whitsun monday for 2016', function() {
        bunny.getWhitsunMonday(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-05-16", "YYYY-MM-DD").toString());
    });
});

describe('#corpusChristi', function() {

    it('verifies date of corpus Christi for 2016', function() {
        bunny.getCorpusChristi(bunny.getEasterSunday(2016))
            .should.equal(moment("2016-05-26", "YYYY-MM-DD").toString());
    });
});

describe('#isEasterSunday', function() {

    it('verifies if a given date is eastersunday (date string, false)', function() {
        bunny.isEasterSunday("2000-04-13")
            .should.equal(false);
    });

    it('verifies if a given date is eastersunday (moment object, false)', function() {
        var date = new moment("2000-04-13", "YYYY-MM-DD");
        bunny.isEasterSunday(date)
            .should.equal(false);
    });

    it('verifies if a given date is eastersunday (date string, true)', function() {
        bunny.isEasterSunday("2000-04-23")
            .should.equal(true);
    });

    it('verifies if a given date is eastersunday (moment object, true)', function() {
        var date = new moment("2000-04-23", "YYYY-MM-DD");
        bunny.isEasterSunday(date)
            .should.equal(true);
    });

    it('verifies if a given date is eastersunday (undefined)', function() {
        bunny.isEasterSunday(undefined)
            .should.equal(false);
    });

    it('verifies if a given date is eastersunday (null)', function() {
        bunny.isEasterSunday(null)
            .should.equal(false);
    });

    it('verifies if a given date is eastersunday ("foo")', function() {
        bunny.isEasterSunday("foo")
        .should.equal(false);
    });

    it('verifies if a given date is eastersunday ("")', function() {
        bunny.isEasterSunday('')
        .should.equal(false);
    });

});

describe('#isRoseMonday', function() {

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday("01.03.1927")
            .should.equal(false);
    });

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday(undefined)
            .should.equal(false);
    });

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday(null)
            .should.equal(false);
    });

    it('verifies if date is roseMonday', function() {
        bunny.isRoseMonday('')
            .should.equal(false);
    });
});

describe('#assumptionDay', function() {
    it('verifies Assumption Day date for 2010', function() {
        bunny.getAssumptionDay(2010)
            .should.equal(new moment("2010-08-15", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getAssumptionDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getAssumptionDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#germanUnificationDay', function() {
    it('verifies German Unification Day date for 2010', function() {
        bunny.getGermanUnificationDay(2010)
            .should.equal(new moment("2010-10-03", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getGermanUnificationDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getGermanUnificationDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#reformationDay', function() {
    it('verifies Reformation Day date for 2010', function() {
        bunny.getReformationDay(2010)
            .should.equal(new moment("2010-10-31", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getReformationDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getReformationDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#allHallows', function() {
    it('verifies All Hallows date for 2010', function() {
        bunny.getAllHallows(2010)
            .should.equal(new moment("2010-11-01", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getAllHallows('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getAllHallows(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#dayOfRepentance', function() {
    it('verifies Day Of Repentance date for 2015', function() {
        bunny.getDayOfRepentance(2015)
            .should.equal(new moment("2015-11-18", "YYYY-MM-DD").toString());
    });

    it('verifies Day Of Repentance date for 2016', function() {
        bunny.getDayOfRepentance(2016)
            .should.equal(new moment("2016-11-16", "YYYY-MM-DD").toString());
    });

    it('verifies Day Of Repentance date for 2017', function() {
        bunny.getDayOfRepentance(2017)
            .should.equal(new moment("2017-11-22", "YYYY-MM-DD").toString());
    });

    it('verifies Day Of Repentance date for 2018', function() {
        bunny.getDayOfRepentance(2018)
            .should.equal(new moment("2018-11-21", "YYYY-MM-DD").toString());
    });

    it('verifies Day Of Repentance date for 2019', function() {
        bunny.getDayOfRepentance(2019)
            .should.equal(new moment("2019-11-20", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getDayOfRepentance('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getDayOfRepentance(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#christmaseve', function() {
    it('verifies Christmas Eve date for 2010', function() {
        bunny.getChristmasEve(2010)
            .should.equal(new moment("2010-12-24", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getChristmasEve('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getChristmasEve(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#christmasDay', function() {
    it('verifies Christmas Day date for 2010', function() {
        bunny.getChristmasDay(2010)
            .should.equal(new moment("2010-12-25", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getChristmasDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getChristmasDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});

describe('#stStephensDay', function() {
    it('verifies Christmas Eve date for 2010', function() {
        bunny.getStStephensDay(2010)
            .should.equal(new moment("2010-12-26", "YYYY-MM-DD").toString());
    });

    it('verifies correct error object for invalid year (some string)', function() {
        bunny.getStStephensDay('foo')
            .should.have.all.keys('error', 'errorCode');
    });

    it('verifies correct error object for invalid year (null)', function() {
        bunny.getStStephensDay(null)
            .should.have.all.keys('error', 'errorCode');
    });
});
