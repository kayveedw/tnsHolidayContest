import { Injectable } from '@angular/core';
import geolocation = require("nativescript-geolocation");

@Injectable()
export class LocationService {
    public enableLocation(): Promise<void> {
        if (!geolocation.isEnabled()) {
            return geolocation.enableLocationRequest();
        }
    }
    public getLocation(): Promise<geolocation.Location> {

        // return this.enableLocation().then(() => {

        return geolocation.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).then(function (loc): Promise<geolocation.Location> {
            if (loc) {
                console.log("Current location is: " + JSON.stringify(loc));
            }
            return Promise.resolve(loc);
        }, function (error) {
            console.log("Error: " + error.message);
            return Promise.reject(error);
        });

        // });

    }
}