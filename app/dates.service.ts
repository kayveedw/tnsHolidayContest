import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Injectable()
export class DatesService {

    public constructor(private http: Http) { }

    private getHebrewCalendarEvents(input: Date): Promise<any> {

        let year: number = input.getUTCFullYear();
        let month: number = input.getUTCMonth() + 1;
        let day: number = input.getUTCDate();

        let URL: string = "";
        URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year.toString() + "&gm=" + month.toString() + "&gd=" + day.toString() + "&g2h=1"
        return this.http.get(URL)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);

    }

    public getChanukaDay(inputDate: Date): Promise<number> {

        let events: string[];
        let errorMessage: string;


        return this.getHebrewCalendarEvents(inputDate).then(function (events: string[]) {

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

    private

    private extractData(res: Response) {
        let body = res.json();
        return body.events || {};
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

}