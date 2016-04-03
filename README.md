## Usage
Just generate your little easter bunny and get the dates of the moveable
holidays of a given year.

``` js
var bugs        = require('bugs-dates');
var bunny       = new bugs();
```

The dates are generated with [moment](http://momentjs.com/docs/) and are returned
to you as strings.

``` js
var eastersunday = bunny.getEasterSunday(2016);   // 'Sun Mar 27 2016 00:00:00 GMT+0100'
```

### Methods
``` js
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
```
