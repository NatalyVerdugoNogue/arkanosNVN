import { RouterModule, Routes } from '@angular/router';

import { InitComponent } from './pages/init/init.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/dashboard/form/form.component';

const appRoutes: Routes = [
  {
    path: '', component: InitComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'form', component: FormComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
