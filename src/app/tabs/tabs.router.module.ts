import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'balance-tab',
        children: [
          {
            path: '',
            loadChildren: '../balance-tab/balance-tab.module#BalanceTabPageModule'
          }
        ]
      },
      {
        path: 'trades-tab',
        children: [
          {
            path: '',
            loadChildren: '../trades-tab/trades-tab.module#TradesTabPageModule'
          }
        ]
      },
      {
        path: 'position-tab',
        children: [
          {
            path: '',
            loadChildren: '../position-tab/position-tab.module#PositionTabPageModule'
          }
        ]
      },
      {
        path: 'change-account-tab',
        children: [
          {
            path: '',
            loadChildren: '../change-account-tab/change-account-tab.module#ChangeAccountTabPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/balance-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/balance-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
