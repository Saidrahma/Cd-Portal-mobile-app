import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ChangeAccountTabPage } from './change-account-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAccountTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChangeAccountTabPage]
})
export class ChangeAccountTabPageModule { }
