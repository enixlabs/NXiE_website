import { NgModule } from '@angular/core';
import { SharedModule } from "../../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { creatorsRoutes } from "./creators.routes";

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(creatorsRoutes),
  ]
})
export class CreatorsModule { }
