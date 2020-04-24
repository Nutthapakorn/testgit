import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test001Page } from './test001.page';

const routes: Routes = [
  {
    path: '',
    component: Test001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test001PageRoutingModule {}
