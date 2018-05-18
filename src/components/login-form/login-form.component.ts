import { Component, EventEmitter, Output } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Account} from '../../models/account/account.interface';

import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthServiceProvider } from '../../providers/auth/auth.service';
import { FormsModule, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account
  text: string;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor( private auth: AuthServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

   async login() {

    const LoginResponse = await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(LoginResponse);
    
    //  try {
    //   const result: LoginResponse = {
    //      result: await this.ofAuth.auth.signInWithEmailAndPassword
    //     (this.account.email, this.account.password)
    //    }
    //    this.loginStatus.emit(result);     }  
    //   catch(e) {
    //    console.error(e);
    //   const error: LoginResponse={
    //        error: e
    //     }
    //     this.loginStatus.emit(error);
    //   }
     }
   

  //  navigateToPage(pageName: string){
  //    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  //  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }
 }
