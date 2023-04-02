import { NgModule } from '@angular/core';
import {SharedModule} from "../../../settings/shared/shared.module";
import {RouterModule} from "@angular/router";
import {categoriesRoutes} from "./categories.routes";



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(categoriesRoutes),
  ]
})
export class CategoriesModule { }
