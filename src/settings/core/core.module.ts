import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    }
  }
}
