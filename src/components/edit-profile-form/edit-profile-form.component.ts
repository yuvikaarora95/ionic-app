import { Component, EventEmitter, Output } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { Subscription } from 'rxjs/Subscription';
import { User} from 'firebase/app';

import { DataServiceProvider } from '../../providers/data/data.service';
import { AuthServiceProvider}  from '../../providers/auth/auth.service';
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent {

  text: string;
  profile = {} as Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private data: DataServiceProvider, private auth: AuthServiceProvider) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user:User) => {
this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email
    const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
this.saveProfileResult.emit(result);
    }
  }

}
