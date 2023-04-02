import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {settingsRoutes} from "./settings.routes";



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(settingsRoutes)
  ]
})
export class SettingsModule { }
