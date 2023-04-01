import {Route} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";

export const appRoutes: Route[] = [
  // PUBLIC ROUTES
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
    ]
  }
];
