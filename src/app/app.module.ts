import { GustregistrationPageModule } from './../pages/gustregistration/gustregistration.module';
import { PinrequestPageModule } from "./../pages/pinrequest/pinrequest.module";
import { PintransferreportPageModule } from "./../pages/pintransferreport/pintransferreport.module";
import { PintransferPageModule } from "./../pages/pintransfer/pintransfer.module";
import { PindetailsPageModule } from "./../pages/pindetails/pindetails.module";
import { ProfilePageModule } from "./../pages/profile/profile.module";
import { DownlinePageModule } from "./../pages/downline/downline.module";
import { SettingsProvider } from "./../providers/settings/settings";
import { CommonfunctionProvider } from "./../providers/commonfunction/commonfunction";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MenuController } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { File } from "@ionic-native/file";

import { BonuspointPageModule } from "../pages/bonuspoint/bonuspoint.module";
import { ChangepasswordPageModule } from "../pages/changepassword/changepassword.module";
import { ForgotpasswordPageModule } from "../pages/forgotpassword/forgotpassword.module";
import { ContactusPageModule } from "../pages/contactus/contactus.module";
import { UphaarPageModule } from "../pages/uphaar/uphaar.module";
import { DashboardPageModule } from "../pages/dashboard/dashboard.module";
import { PlanPageModule } from "../pages/plan/plan.module";
import { RulesPageModule } from "../pages/rules/rules.module";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { ApiserviceProvider } from "../providers/apiservice/apiservice";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  console.log("settings provider setting setting");
  return new SettingsProvider(storage, {
    projectName: "fmPilot",
    host: ""
  });
}
@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
  
    GustregistrationPageModule,
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
    PindetailsPageModule,
    DownlinePageModule,
    PintransferPageModule,
    PintransferreportPageModule,
    PinrequestPageModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    File,
    HttpClientModule,
    CommonfunctionProvider,
    { provide: SettingsProvider, useFactory: provideSettings, deps: [Storage] },
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiserviceProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
