import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestdashboardPage } from './guestdashboard';

@NgModule({
  declarations: [
    GuestdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestdashboardPage),
  ],
})
export class GuestdashboardPageModule {}
