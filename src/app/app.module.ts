import { ProfilePageModule } from './../pages/profile/profile.module';
import { DownlinePageModule } from './../pages/downline/downline.module';
import { SettingsProvider } from './../providers/settings/settings';
import { CommonfunctionProvider } from './../providers/commonfunction/commonfunction';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { BonuspointPageModule } from '../pages/bonuspoint/bonuspoint.module';
import { ChangepasswordPageModule } from '../pages/changepassword/changepassword.module';
import { ForgotpasswordPageModule } from '../pages/forgotpassword/forgotpassword.module';
import { ContactusPageModule } from '../pages/contactus/contactus.module';
import { UphaarPageModule } from '../pages/uphaar/uphaar.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { PlanPageModule } from '../pages/plan/plan.module';
import { RulesPageModule } from '../pages/rules/rules.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ApiserviceProvider } from '../providers/apiservice/apiservice';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  console.log("settings provider setting setting");
  return new SettingsProvider(storage, {
    projectName: 'fmPilot',
    host: ''
  });
}
@NgModule({
	declarations: [
		MyApp,
		HomePage,

	],
	imports: [
		HttpClientModule,
		ChangepasswordPageModule,
		ProfilePageModule,
		IonicStorageModule.forRoot(),
		RegisterPageModule,
		LoginPageModule,
		RulesPageModule,
		PlanPageModule,
		DashboardPageModule,
		UphaarPageModule,
		ContactusPageModule,
		ChangepasswordPageModule,
		ForgotpasswordPageModule,
		BrowserModule,
		BonuspointPageModule,
		DownlinePageModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,

	],
	providers: [
		HttpClientModule,
		CommonfunctionProvider,
	  { provide: SettingsProvider, useFactory: provideSettings, deps: [Storage] },
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiserviceProvider
	]
})
export class AppModule { }
