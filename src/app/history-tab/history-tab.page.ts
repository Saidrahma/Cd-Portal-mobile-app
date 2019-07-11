import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.page.html',
  styleUrls: ['./history-tab.page.scss'],
})
export class HistoryTabPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onBack() {
    this.navController.back();
  }
}
