import { NgModule } from '@angular/core';
import { LoyaltyComponent } from './loyalty.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {loyaltyRoutes} from "./loyalty.routes";

@NgModule({
  declarations: [
    LoyaltyComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(loyaltyRoutes)
  ]
})
export class LoyaltyModule { }
