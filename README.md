## Usage
Just generate your little easter bunny and get the dates of the moveable
holidays of a given year.

``` js
const bugs        = require('bugs-dates')
const bunny       = new bugs()
```

The dates are generated as plain JavaScript Date objects and returned as ISO strings.

~~Easter related methods need a date as parameter, except
getEasterSunday. All the fix holidays get a year.~~

All methods are now called with a given year. Validation and tests are missing
for this change.

``` js
const eastersunday    = bunny.getEasterSunday(2016)          // 'Sun Mar 27 2016 00:00:00 GMT+0100'
const rosemonday      = bunny.getRoseMonday(2016)            // 'Mon Feb 08 2016 00:00:00 GMT+0100'
const isRoseMonday    = bunny.isRoseMonday('2016-02-08')     // true
const noRoseMonday    = bunny.isRoseMonday('2016-01-21')     // false
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
| Error Code  | Description   |
|--------------|--------------|
| 1  | invalid year as input  |
