import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { DayViewComponent } from "./day-view.component";

import geolocation = require("nativescript-geolocation");

@NgModule({
    declarations: [
        AppComponent,
        DayViewComponent
    ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptHttpModule]
})
export class AppModule { }

