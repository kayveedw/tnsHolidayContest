import { Component } from "@angular/core";

@Component({
    selector: "day-view",
    templateUrl: "day-view.component.html",
})
export class DayViewComponent {
    public displayDate: Date;

    public constructor() {

        this.displayDate = new Date ();
        this.onPreviousDate();
     }

     public onPreviousDate () {

        this.displayDate.setDate(this.displayDate.getDate() - 1);
        console.log(this.displayDate);

     }

     public onNextDate () {

        this.displayDate.setDate(this.displayDate.getDate() + 1);
        console.log(this.displayDate);
     }

}
