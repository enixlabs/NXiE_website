import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from "../../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routes";
import { FeaturedComponent } from './assets/featured/featured.component';
import { CategoriesComponent } from './assets/categories/categories.component';
import { ContentComponent } from './assets/content/content.component';


const homeComponents = [
  FeaturedComponent,
  CategoriesComponent,
  ContentComponent
];
@NgModule({
  declarations: [
    HomeComponent,
    ...homeComponents,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    HomeComponent,
    ...homeComponents
  ]
})
export class HomeModule { }
