## Usage
Just generate your little easter bunny and get the dates of the moveable
holidays of a given year.

``` js
var bugs        = require('bugs-dates');
var bunny       = new bugs();
```

The dates are generated with [moment](http://momentjs.com/docs/) and are returned
to you as strings.

~~Easter related methods need a date as parameter, except
getEasterSunday. All the fix holidays get a year.~~
~~Inconsistence, that will be fixed in one of the next updates.~~

All methods are now called with a given year. Validation and tests are missing
for this change.

``` js
var eastersunday    = bunny.getEasterSunday(2016);          // 'Sun Mar 27 2016 00:00:00 GMT+0100'
var rosemonday      = bunny.getRoseMonday(2016);            // 'Mon Feb 08 2016 00:00:00 GMT+0100'
var isRoseMonday    = bunny.isRoseMonday('2016-02-08');     // true
var noRoseMonday    = bunny.isRoseMonday('2016-01-21');     // false
```

### Methods
``` js
/*
**  list of dates I wanna implement:
**  https://de.wikipedia.org/wiki/Gesetzliche_Feiertage_in_Deutschland
**  https://en.wikipedia.org/wiki/Public_holidays_in_Germany
*/
BugsDates.prototype = {
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
```

### Error Codes
| Error Code  | Description  |
|---|---|
| 1  | invalid year as input |
