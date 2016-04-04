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
