import { Component, OnInit } from "@angular/core";

import { DatesService } from "./dates.service";
// import { DatePicker } from "ui/date-picker";
import { LocationService } from "./location.service";


@Component({
    selector: "day-view",
    templateUrl: "day-view.component.html",
    providers: [
        DatesService,
        LocationService
    ]
})
export class DayViewComponent implements OnInit {

    public displayDate: Date;
    public displayHebrew: boolean;
    public displayTransliteration: boolean;
    public displayEnglish: boolean;
    public dayOfChanuka: number = 0;
    public candleLightingTime: Date;

    public constructor(private datesService: DatesService, private locationService: LocationService) {

        this.displayHebrew = true;
        this.displayTransliteration = false;
        this.displayEnglish = false; // true;

        this.displayDate = new Date();
    }

    ngOnInit(): void {
        this.loadDayOfChanuka(this.displayDate);


    }

    private loadDayOfChanuka(inputDate: Date) {

        let dvc = this;
        this.datesService.getChanukaDay(inputDate).then(
            function (day) {
                dvc.dayOfChanuka = day;
            },
            function (error) {
                console.log(error);

            }
        );

        this.locationService.getLocation().then(
            function (location): Promise<Date> {
                return dvc.datesService.getCandleLightingTime(inputDate, location)

            }
        ).then(
            function (candleLightingTime) {
                dvc.candleLightingTime = candleLightingTime;
            },
            function (error) {
                console.log(error);
            }
            );

    }

    public onPreviousDate() {

        this.displayDate.setDate(this.displayDate.getDate() - 1);
        this.loadDayOfChanuka(this.displayDate);

    }

    public onNextDate() {

        this.displayDate.setDate(this.displayDate.getDate() + 1);
        this.loadDayOfChanuka(this.displayDate);

    }

    public isFirstDay(): boolean {
        return this.dayOfChanuka == 1;
    }

}
