import { Component } from '@angular/core';
import { DataServiceProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  text: string;
  query: string;
  profileList: Profile[]

  constructor(private data: DataServiceProvider) {

  }

  //call into your page
  
  searchUser(query: string){
    // this.data.searchUser(query). subscribe(profiles =>{
    //   console.log(profiles);
    //   this.profileList
    // })
    this.data.searchUser(query).then(res => {
      //res is the list of your result
      console.log(res);
      //ab chla k dekh bs ek bar ionic serve kr lio
      
      // res.forEach(item => {
      //   this.resultList.push(item);
      //   //push every item to the your outcome result so u can user ngFor on "this.resultList"
      // });
    })
  }


}


