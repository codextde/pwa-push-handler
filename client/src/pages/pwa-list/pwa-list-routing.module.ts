import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaListPage } from './pwa-list.page';

const routes: Routes = [
  {
    path: '',
    component: PwaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwaListPageRoutingModule {}
