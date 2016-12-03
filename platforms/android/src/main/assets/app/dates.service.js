"use strict";
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require("rxjs/Rx");
var DatesService = (function () {
    function DatesService(http) {
        this.http = http;
    }
    DatesService.prototype.getHebrewCalendarEvents = function (input) {
        var year = input.getFullYear();
        var month = input.getMonth();
        var day = input.getDay();
        var URL = "";
        URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year.toString() + "&gm=" + month.toString() + "&gd=" + day.toString() + "&g2h=1";
        this.http.get(URL)
            .do(function (result) { return console.log("RESULT2: ", JSON.stringify(result.json())); })
            .map(function (result) { return JSON.parse(result.json()); })
            .subscribe(function (result) {
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    DatesService.prototype.getChanukaDay = function (input) {
        this.getHebrewCalendarEvents(input);
        return 0;
    };
    DatesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DatesService);
    return DatesService;
}());
exports.DatesService = DatesService;
//# sourceMappingURL=dates.service.js.map