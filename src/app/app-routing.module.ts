import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren:  './login/login.module#LoginPageModule'},
  { path: 'login', loadChildren:  './login/login.module#LoginPageModule'},


  //{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'history-tab', loadChildren: './history-tab/history-tab.module#HistoryTabPageModule' },

  { path: 'tabs/balance-tab', 
  canActivate: [AuthGuardService],
  loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
