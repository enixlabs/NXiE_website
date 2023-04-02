import { NgModule } from '@angular/core';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {videosRoutes} from "./videos.routes";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(videosRoutes),
  ]
})
export class VideosModule { }
