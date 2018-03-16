import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public settings: SettingsService,
  ) {
  }

  listname: string;
  theme: string;

  ionViewWillEnter(){
    this.listname = this.settings.getListName();
    this.theme = this.settings.getTheme();
  }

  ionViewWillLeave(){
    this.settings.setListName(this.listname);
    this.settings.setTheme(this.theme);
  }

}
