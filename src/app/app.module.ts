import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {ExtraOptions, RouterModule} from "@angular/router";
import { appRoutes } from "./app.routes";
import { CoreModule } from "../settings/core/core.module";
import { ThemeModule } from "../theme/theme.module";
import { LayoutModule } from "../layout/layout.module";
import { CategoriesComponent } from './public/categories/categories.component';
import { CreatorsComponent } from './public/creators/creators.component';
import { VideosComponent } from './public/videos/videos.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SharedModule } from "../settings/shared/shared.module";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreatorsComponent,
    VideosComponent,
    HelpCenterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerOptions),
    CoreModule.forRoot(),
    LayoutModule.forRoot(),

    ThemeModule.forRoot(),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
