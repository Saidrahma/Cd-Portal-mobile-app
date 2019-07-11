import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TradesTabPage } from './trades-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TradesTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TradesTabPage]
})
export class TradesTabPageModule { }
