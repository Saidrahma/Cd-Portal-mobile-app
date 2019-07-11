import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() { }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
}
