import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent, MenuButtonComponent],
  exports: [
    IonicModule,
    MenuButtonComponent,
    MenuComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule
  ]
})
export class SharedModule { }
