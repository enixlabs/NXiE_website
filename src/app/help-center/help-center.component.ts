import {Component, OnInit} from '@angular/core';
import { trackByRoute } from 'src/theme/utils/trackBy';
import {Link} from "../../theme/interfaces/link.interface";

@Component({
  selector: 'enix-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent implements OnInit {
  links: (Link & { icon: string })[] = [
    {
      label: 'Getting Started',
      route: 'getting-started',
      icon: 'mat:flag'
    },
    {
      label: 'Community Guides',
      route: 'pricing',
      icon: 'mat:attach_money'
    },
    {
      label: 'User Guides',
      route: 'faq',
      icon: 'mat:contact_support'
    },
    {
      label: 'Other',
      route: 'guides',
      icon: 'mat:book'
    }
  ];

  trackByRoute = trackByRoute;

  constructor() { }

  ngOnInit() {
  }
}
