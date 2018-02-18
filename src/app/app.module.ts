import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HealthKitPage } from "../pages/health-kit/health-kit";
import { ReadPage } from "../pages/read/read";
import { GraphPage } from "../pages/graph/graph";
import { ImageReaderPage } from '../pages/image-reader/image-reader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HealthKitPage,
    ReadPage,
    GraphPage,
    ImageReaderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HealthKitPage,
    ReadPage,
    GraphPage,
    ImageReaderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
