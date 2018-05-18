import { IMPORTSTATEMENT_VARIABLE } from '@ionic/app-scripts/dist/generators/constants';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { MyApp } from './app.component';
import { InboxPage } from '../pages/inbox/inbox';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AuthServiceProvider } from '../providers/auth/auth.service';
import { DataServiceProvider } from '../providers/data/data.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    InboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataServiceProvider,
    NativeStorage
  ]
})
export class AppModule {}
