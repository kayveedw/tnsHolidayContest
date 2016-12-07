"use strict";
var core_1 = require('@angular/core');
require("rxjs/Rx");
var DatesService = (function () {
    function DatesService() {
    } //private http: Http) { }
    DatesService.prototype.getHebrewCalendarEvents = function (input) {
        var year = input.getFullYear();
        var month = input.getMonth();
        var day = input.getDay();
        var URL = "";
        URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year.toString() + "&gm=" + month.toString() + "&gd=" + day.toString() + "&g2h=1";
        /*this.http.get(URL)
            .do(result => console.log("RESULT2: ", JSON.stringify(result.json())))
            .map(result => JSON.parse(result.json()))
            //.do(result => console.log("RESULT: ", JSON.stringify(result)))
            .subscribe(result => {
            }, error => {
                console.log("ERROR: ", error);
            });
        */
    };
    DatesService.prototype.getChanukaDay = function (inputDate) {
        //this.getHebrewCalendarEvents(inputDate);
        var startDate = new Date();
        var dayNumber = inputDate.getDate() - startDate.getDate() + 1;
        return dayNumber;
    };
    DatesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DatesService);
    return DatesService;
}());
exports.DatesService = DatesService;
//# sourceMappingURL=dates.service.js.map