import { Component } from '@angular/core';

@Component({
  selector: 'enix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}