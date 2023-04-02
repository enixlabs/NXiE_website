import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {registerRoutes} from "./register.routes";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoutes)
  ]
})
export class RegisterModule { }
