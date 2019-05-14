import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase  from 'firebase';
import { LoginComponent } from '../components/login/login';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyAWSfs_jSrprwPOTcxAg2k40wjvkJrtdBo",
  authDomain: "fir-ionic-6dd6c.firebaseapp.com",
  databaseURL: "https://fir-ionic-6dd6c.firebaseio.com",
  projectId: "fir-ionic-6dd6c",
  storageBucket: "fir-ionic-6dd6c.appspot.com",
  messagingSenderId: "986398417786",
  appId: "1:986398417786:web:e1ae0435304b4f21"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LoginComponent),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
