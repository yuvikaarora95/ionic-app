import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataServiceProvider } from '../../providers/data/data.service';
import { User } from 'firebase/app';
import { Subscription }  from "rxjs/Subscription";
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor( private toast: ToastController, private data: DataServiceProvider,
    private navCtrl: NavController, 
    private navParams: NavParams) {
  }

  login(event){
    console.log(event);
      if(!event.error){
        this.toast.create({
          message: `Welcome to Beep, ${event.result.user.email}`,
          duration: 3000
        }).present();
         
        this.data.getProfile(<User>event.result.user).subscribe(profile => {
          console.log(profile);
          console.log(profile.payload.val());
          profile.payload.val() ? this.navCtrl.setRoot('TabsPage') :  this.navCtrl.setRoot('EditProfilePage');
        })

        // this.navCtrl.setRoot('EditProfilePage');
      } 
      else{
        this.toast.create({
          message: event.error.message,
          duration: 3000
        }).present();
      }
     }



}
