import { NgModule } from '@angular/core';
import {SharedModule} from "../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {helpCenterRoutes} from "./help-center.routes";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(helpCenterRoutes)
  ]
})
export class HelpCenterModule { }
