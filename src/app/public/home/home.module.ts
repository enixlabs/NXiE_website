import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from "../../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routes";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
