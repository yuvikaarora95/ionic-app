import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InboxPage } from '../inbox/inbox';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any
  tab2Root: string;
  tab3Root:string;
  constructor() {

    this.tab1Root = InboxPage
    this.tab2Root = 'ChannelsPage';
    this.tab3Root = 'ProfilePage';
  }

 

}
