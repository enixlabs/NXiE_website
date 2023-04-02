import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {loginRoutes} from "./login.routes";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
