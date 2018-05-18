import { Component, OnInit } from '@angular/core';
import { DataServiceProvider } from '../../providers/data/data.service';
import { AuthServiceProvider } from '../../providers/auth/auth.service';
import { User } from '@firebase/auth-types';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';


@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{

  text: string;
  userProfile: Profile;
  loader: Loading;

  constructor( private loading: LoadingController ,
    private data: DataServiceProvider, 
    private auth: AuthServiceProvider) {

    this.loader = this.loading.create({
      content: 'Loading profile...'
  })
  }
  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user:User) => {
      this.data.getProfile(user).subscribe(profile =>{
        this.userProfile = <Profile>profile.payload.val();
          this.loader.dismiss();
      })
    })
  }

  

}
