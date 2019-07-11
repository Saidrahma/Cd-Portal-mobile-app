import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() contentId: string;
  menuItems: MenuItem[] = [{
    item: 'History',
    path: '/history-tab'
  }, {
    item: 'Downloads'
  }, {
    item: 'Log out'
  }];

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() { }

  navigate(path: string) {
    this.router.navigate([path]);
    this.menu.close('menu');
  }
}
