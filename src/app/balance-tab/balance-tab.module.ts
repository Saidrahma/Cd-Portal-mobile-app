import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BalanceTabPage } from './balance-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalanceTabPage]
})
export class BalanceTabPageModule {}
