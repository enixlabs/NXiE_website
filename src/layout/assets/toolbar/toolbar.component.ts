import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import {AuthService} from "../../../settings/core/auth/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    private sidenav: SidebarService,
    private authService: AuthService
  ) {}

  authenticated() {
    return this.authService.authenticated;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  logout() {
    this.authService.logout();
  }
}
