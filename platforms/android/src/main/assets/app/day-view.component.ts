import { Component } from "@angular/core";
// import { DatePicker } from "ui/date-picker";

@Component({
    selector: "day-view",
    templateUrl: "day-view.component.html",
})
export class DayViewComponent {
    public displayDate: Date;
    public firstDay: Boolean;

    public constructor() {

        this.displayDate = new Date ();
        this.firstDay = true;
     }

     public onPreviousDate () {

        this.displayDate.setDate(this.displayDate.getDate() - 1);
        this.firstDay = true;

     }

     public onNextDate () {

        this.displayDate.setDate(this.displayDate.getDate() + 1);
        this.firstDay = false;
     }

}
