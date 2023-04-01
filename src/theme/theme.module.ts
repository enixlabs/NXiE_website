import {ModuleWithProviders, NgModule} from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [
    ChatComponent
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
