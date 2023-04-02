import { ModuleWithProviders, NgModule} from '@angular/core';
import { IconModule } from "./icon/icon.module";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";

@NgModule({
  imports: [IconModule],
  exports: [IconModule],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        UserService,
      ]
    }
  }
}
