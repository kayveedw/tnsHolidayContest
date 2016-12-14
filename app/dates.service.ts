import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

// Add the RxJS Observable operators.
import './rxjs-operators';

// import TimeZone from 'java.util.TimeZone';

import geolocation = require("nativescript-geolocation");


@Injectable()
export class DatesService {

    public constructor(private http: Http) { }

    private getHebCalConverterEvents(inputDate: Date): Promise<any> {

        let year: number = inputDate.getUTCFullYear();
        let month: number = inputDate.getUTCMonth() + 1;
        let day: number = inputDate.getUTCDate();

        let URL: string = "";
        URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year.toString() + "&gm=" + month.toString() + "&gd=" + day.toString() + "&g2h=1"
        return this.http.get(URL)
            .map(this.extractDataEvents)
            .toPromise()
            .catch(this.handleError);

    }

    public getChanukaDay(inputDate: Date): Promise<number> {

        let events: string[];
        let errorMessage: string;

        return this.getHebCalConverterEvents(inputDate).then(function (events: string[]) {

            let dayNumber: number = 0;

            // loop events to find a chanukah
            for (let i = 0; i < events.length; i++) {
                let event: string = events[i];

                if (event.search(/Chanukah: [1-8] Candle/) >= 0) {
                    // extract day 
                    dayNumber = Number(event[10]);
                    break;
                }

            }
            return Promise.resolve<number>(dayNumber);
        });

    }

    private extractDataEvents(res: Response) {
        let body = res.json();
        return body.events || {};
        // return body || {};
    }

    private extractDataItems(res: Response) {
        console.log(JSON.stringify(res));
        let body = res.json();
        return body.items || {};
        // return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private getHebCalCalendarItems(inputDate: Date, inputLocation: geolocation.Location): Promise<any> {

        let year: number = inputDate.getUTCFullYear();
        let month: number = inputDate.getUTCMonth() + 1;
        let day: number = inputDate.getUTCDate();

        let latitude: number = inputLocation.latitude;
        let longitude: number = inputLocation.longitude;

        // Always use UTC for timezone and then adjust times based on timezoneOffset
        let timezone: string = "UTC"; // "Europe/London";

        let URL: string = "";
        URL = "http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&year=" + year.toString() + "&month=" + month.toString() + "&c=on&geo=pos&latitude=" + latitude.toString() + "&longitude=" + longitude.toString() + "&tzid=" + timezone;

        return this.http.get(URL)
            // .map(this.extractDataItems)
            .map(response => response.json().items)
            .toPromise()
            .catch(this.handleError);

    }

    public getCandleLightingTime(inputDate: Date, location: geolocation.Location): Promise<Date> {

        let errorMessage: string;

        return this.getHebCalCalendarItems(inputDate, location).then(function (items: string[]) {

            // console.log(JSON.stringify(items));
            let candleLightingTime: Date;

            // loop events to find a chanukah   
            for (let i = 0; i < items.length; i++) {
                //console.log(items[i]);
                let item = JSON.parse(JSON.stringify(items[i]));
                // let item = items[i];
                //console.log(JSON.stringify(item));


                if ((item.link) && (item.link == "http://www.hebcal.com/holidays/chanukah")) {
                    console.log(item.title, " - ", item.date);
                }

                // if (item.search(/Chanukah: [1-8] Candle/) >= 0) {
                //     // extract day 
                //     candleLightingTime = Number(item[10]);
                //     break;
                // }

            }
            return Promise.resolve<Date>(candleLightingTime);
        });

    }


}