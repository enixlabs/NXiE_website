import {Route} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";

export const appRoutes: Route[] = [
  // PUBLIC ROUTES
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
      { path: 'creators', loadChildren: () => import('./public/creators/creators.module').then(m => m.CreatorsModule) },
      { path: 'categories', loadChildren: () => import('./public/categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'videos', loadChildren: () => import('./public/videos/videos.module').then(m => m.VideosModule) },
      { path: 'stores', loadChildren: () => import('./public/stores/stores.module').then(m => m.StoresModule) },
      { path: 'social', loadChildren: () => import('./public/social/social.module').then(m => m.SocialModule) },
      { path: 'support',
        children: [
          { path: '', loadChildren: () => import('./help-center/help-center.module').then(m => m.HelpCenterModule) },
          { path: 'started', loadChildren: () => import('./help-center/started/started.module').then(m => m.StartedModule) },
        ],}
    ]
  }
];
