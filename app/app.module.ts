import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { DayViewComponent } from "./day-view.component";

@NgModule({
    declarations: [
        AppComponent,
        DayViewComponent
    ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, HttpModule]
})
export class AppModule { }

