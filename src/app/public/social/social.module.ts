import { NgModule } from '@angular/core';
import { SocialComponent } from './social.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {socialRoutes} from "./social.routes";

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(socialRoutes),
  ]
})
export class SocialModule { }
