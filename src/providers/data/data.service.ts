import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireDatabaseModule} from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import "rxjs/add/operator/take";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profileObject: AngularFireObject<any>
  profileList: AngularFireList<any>

  constructor(private database: AngularFireDatabase) {
  }

  // searchUser(firstName: string) {
  //   const query = this.database.list('/profiles', ref => ref.orderByChild('firstName').equalTo(firstName))
  //     .snapshotChanges().map(profiles => {
  //       return profiles.map(profile => ( { $key: profile.key, data:profile.payload.val() }));
  //     });

  //   return query.take(1);
  // }

  searchUser(query: any) {
    return new Promise((resolve, reject) => {
      let docRef = this.database.list<Profile>('/profiles', ref => ref.orderByChild('firstName').equalTo(query)).snapshotChanges()
      docRef.subscribe((data) => {
        if (data) {
          resolve(data);
        }
      })
    });
  }

  // searchUser(firstName: string) {
  //   const query = this.database.list<Profile>('/profiles', ref => ref.orderByChild('firstName').equalTo(firstName))
  //     .snapshotChanges().map(profiles => {
  //       return profiles.map(profile => ( { $key: profile.key, ...profile.payload.val() }));
  //     });

  //   return query.take(1);
  // }

  getProfile(user:User ) {
    console.log('user.uid',user.uid);
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    console.log('get profile',this.profileObject);
     //return this.profileObject.valueChanges().take(1);
    return this.profileObject.snapshotChanges();
    
  }

  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {
     await this.profileObject.set(profile);
     return true;
    }
    catch(e) {
      console.error(e);
      return false;
    }
  }
}