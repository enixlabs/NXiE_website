import {Route} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";
import {AuthGuard} from "../settings/core/auth/guards/auth.guard";

export const appRoutes: Route[] = [
  { path: '',   // PUBLIC ROUTES
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule) },
      { path: 'creators', loadChildren: () => import('./public/creators/creators.module').then(m => m.CreatorsModule) },
      { path: 'categories', loadChildren: () => import('./public/categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'videos', loadChildren: () => import('./public/videos/videos.module').then(m => m.VideosModule) },
      { path: 'stores', loadChildren: () => import('./public/stores/stores.module').then(m => m.StoresModule) },
      { path: 'social', loadChildren: () => import('./public/social/social.module').then(m => m.SocialModule) },
      { path: 'blog', loadChildren: () => import('./public/blog/blog.module').then(m => m.BlogModule) },
      { path: 'support',
        children: [
          { path: '', loadChildren: () => import('./help-center/help-center.module').then(m => m.HelpCenterModule) },
          { path: 'started', loadChildren: () => import('./help-center/started/started.module').then(m => m.StartedModule) },
        ],
      },
      { path: 'legal',
        children: [
          { path: '', loadChildren: () => import('./public/legal/legal.module').then(m => m.LegalModule) },
          { path: 'terms', loadChildren: () => import('./public/legal/terms/terms.module').then(m => m.TermsModule) },
          { path: 'privacy', loadChildren: () => import('./public/legal/privacy/privacy.module').then(m => m.PrivacyModule) },
          { path: 'cookies', loadChildren: () => import('./public/legal/cookies/cookies.module').then(m => m.CookiesModule) },
          { path: 'copyright', loadChildren: () => import('./public/legal/copyright/copyright.module').then(m => m.CopyrightModule) },
          { path: 'trademark', loadChildren: () => import('./public/legal/trademark/trademark.module').then(m => m.TrademarkModule) },
          { path: 'sales', loadChildren: () => import('./public/legal/sales/sales.module').then(m => m.SalesModule) },
          { path: 'data', loadChildren: () => import('./public/legal/data/data.module').then(m => m.DataModule) },
        ]
      },
    ]
  },
  { path: '',   // AUTH ROUTES
    component: LayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('../settings/core/auth/assets/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../settings/core/auth/assets/register/register.module').then(m => m.RegisterModule) },
    ]
  },
  {  path: '', // PRIVATE ROUTES
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', loadChildren: () => import('./private/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'settings', loadChildren: () => import('./private/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'loyalty', loadChildren: () => import('./private/loyalty/loyalty.module').then(m => m.LoyaltyModule) },
      {
        path: 'apps',
        children: [
          { path: 'discord', loadChildren: () => import('./private/apps/discord/discord.module').then(m => m.DiscordModule) },
          { path: 'twitch', loadChildren: () => import('./private/apps/twitch/twitch.module').then(m => m.TwitchModule) },
        ]
      }
    ]
  }
];
