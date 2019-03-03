import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PindetailsPage } from './pindetails';

@NgModule({
  declarations: [
    PindetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PindetailsPage),
  ],
})
export class PindetailsPageModule {}
