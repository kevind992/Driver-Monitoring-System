import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsPage } from './charts';

@NgModule({
  declarations: [
    ChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartsPage),
  ],
})
export class ChartsPageModule {}
