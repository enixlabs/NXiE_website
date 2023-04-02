import { NgModule } from '@angular/core';
import { LegalComponent } from './legal.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {legalRoutes} from "./legal.routes";

@NgModule({
  declarations: [
    LegalComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(legalRoutes)
  ]
})
export class LegalModule { }
