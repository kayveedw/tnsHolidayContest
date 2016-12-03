"use strict";
var core_1 = require("@angular/core");
var DayViewComponent = (function () {
    function DayViewComponent() {
        this.displayDate = new Date();
        this.onPreviousDate();
    }
    DayViewComponent.prototype.onPreviousDate = function () {
        this.displayDate.setDate(this.displayDate.getDate() - 1);
        console.log(this.displayDate);
    };
    DayViewComponent.prototype.onNextDate = function () {
        this.displayDate.setDate(this.displayDate.getDate() + 1);
        console.log(this.displayDate);
    };
    DayViewComponent = __decorate([
        core_1.Component({
            selector: "day-view",
            templateUrl: "day-view.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], DayViewComponent);
    return DayViewComponent;
}());
exports.DayViewComponent = DayViewComponent;
//# sourceMappingURL=day-view.component.js.map