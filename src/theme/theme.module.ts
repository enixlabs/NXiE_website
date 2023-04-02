import {ModuleWithProviders, NgModule} from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';
import { LibraryComponent } from './components/library/library.component';

const themeComponents = [
  ChatComponent,
  LibraryComponent,
];

@NgModule({
  imports: [
  ],
  exports: [
    ...themeComponents,
  ],
  declarations: [
    ...themeComponents,
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: []
    }
  }
}
