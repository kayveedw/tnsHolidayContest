import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class DatesService {

    public constructor(private http: Http) { }

    private getHebrewCalendarEvents(input: Date): void {

        let year: number = input.getFullYear();
        let month: number = input.getMonth();
        let day: number = input.getDay();

        let URL: string = "";
        URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year.toString() + "&gm=" + month.toString() + "&gd=" + day.toString() + "&g2h=1"

        // this.http.get(URL)
        //     .do(result => console.log("RESULT2: ", JSON.stringify(result.json())));
        //     .map(result => JSON.parse(result.json()))
        //     // //.do(result => console.log("RESULT: ", JSON.stringify(result)))
        //     .subscribe(result => {
        //     }, error => {
        //         console.log("ERROR: ", error);
        //     });

    }

    public getChanukaDay(inputDate: Date): number {

        //this.getHebrewCalendarEvents(inputDate);
        // console.log(this.getHebrewCalendarEvents(inputDate));

        let startDate: Date = new Date(2016, 11, 24);

        let oneDay: number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let dayNumber: number = Math.floor(inputDate.getTime() / oneDay) - Math.floor(startDate.getTime() / oneDay) + 1;

        if ((dayNumber < 0) || (dayNumber > 8)) {
            dayNumber = 0;
        }

        return dayNumber;
    }


    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.events || {};
    // }

    // private handleError(error: Response | any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }

}