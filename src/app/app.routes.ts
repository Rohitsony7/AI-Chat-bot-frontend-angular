import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'AI_GPT',
    pathMatch: 'full',
  },
  {
    path: 'AI_GPT',
    //   canActivate: [AuthguardGuard], // we can do this via token
    component: LayoutComponent,
  },
  { path: '**', redirectTo: 'AI_GPT' },
];
