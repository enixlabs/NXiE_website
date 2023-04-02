import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {profileRoutes} from "./profile.routes";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
