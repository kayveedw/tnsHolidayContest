"use strict";
var core_1 = require("@angular/core");
var dates_service_1 = require("./dates.service");
// import { DatePicker } from "ui/date-picker";
var DayViewComponent = (function () {
    function DayViewComponent(datesService) {
        this.datesService = datesService;
        this.displayHebrew = true;
        this.displayTransliteration = false;
        this.displayEnglish = true;
        this.displayDate = new Date();
    }
    DayViewComponent.prototype.ngOnInit = function () {
        this.loadDayOfChanuka(this.displayDate);
    };
    DayViewComponent.prototype.loadDayOfChanuka = function (inputDate) {
        this.dayOfChanuka = this.datesService.getChanukaDay(inputDate);
    };
    DayViewComponent.prototype.onPreviousDate = function () {
        this.displayDate.setDate(this.displayDate.getDate() - 1);
        this.loadDayOfChanuka(this.displayDate);
    };
    DayViewComponent.prototype.onNextDate = function () {
        this.displayDate.setDate(this.displayDate.getDate() + 1);
        this.loadDayOfChanuka(this.displayDate);
    };
    DayViewComponent.prototype.isFirstDay = function () {
        return this.dayOfChanuka == 1;
    };
    DayViewComponent = __decorate([
        core_1.Component({
            selector: "day-view",
            templateUrl: "day-view.component.html",
            providers: [dates_service_1.DatesService]
        }), 
        __metadata('design:paramtypes', [dates_service_1.DatesService])
    ], DayViewComponent);
    return DayViewComponent;
}());
exports.DayViewComponent = DayViewComponent;
//# sourceMappingURL=day-view.component.js.map