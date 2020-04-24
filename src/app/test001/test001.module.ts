import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test001PageRoutingModule } from './test001-routing.module';

import { Test001Page } from './test001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test001PageRoutingModule
  ],
  declarations: [Test001Page]
})
export class Test001PageModule {}
