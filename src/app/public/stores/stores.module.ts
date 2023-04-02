import { NgModule } from '@angular/core';
import { StoresComponent } from './stores.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {storesRoutes} from "./stores.routes";


@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(storesRoutes)
  ]
})
export class StoresModule { }
