import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownlinePage } from './downline';

@NgModule({
  declarations: [
    DownlinePage,
  ],
  imports: [
    IonicPageModule.forChild(DownlinePage),
  ],
})
export class DownlinePageModule {}
