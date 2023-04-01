import {ModuleWithProviders, NgModule} from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './assets/sidebar/sidebar.component';
import { ToolbarComponent } from './assets/toolbar/toolbar.component';
import {SharedModule} from "../settings/shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";


const LAYOUT_COMPONENTS = [
  LayoutComponent,
  SidebarComponent,
  ToolbarComponent
];
@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    ...LAYOUT_COMPONENTS
  ],
  declarations: [
    ...LAYOUT_COMPONENTS
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: []
    }
  }
}
