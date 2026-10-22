import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Login } from './features/auth/login/login';
import { Activity } from './features/activity/activity';
import { Overview } from './features/overview/overview';
import { Send } from './features/send/send';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Shell,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      { path: 'overview', component: Overview },
      { path: 'send', component: Send },
      { path: 'activity', component: Activity },
      { path: '**', redirectTo: 'overview' },
    ],
  },
];
