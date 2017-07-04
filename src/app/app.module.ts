import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrintahorasPage } from '../pages/trintahoras/trintahoras';
import { AprovadoPage } from '../pages/aprovado/aprovado';
import { RecuperacaoPage } from '../pages/recuperacao/recuperacao';
import { ReprovadoPage } from '../pages/reprovado/reprovado';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { Media } from '../providers/media';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrintahorasPage,
    AprovadoPage,
    RecuperacaoPage,
    ReprovadoPage,
    AjudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrintahorasPage,
    AprovadoPage,
    RecuperacaoPage,
    ReprovadoPage,
    AjudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
