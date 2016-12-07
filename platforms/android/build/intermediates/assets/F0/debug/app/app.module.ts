import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { DayViewComponent } from "./day-view.component"

@NgModule({
    declarations: [
        AppComponent,
        DayViewComponent
    ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule]
})
export class AppModule { }

