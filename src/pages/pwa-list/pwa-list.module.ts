import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwaListPageRoutingModule } from './pwa-list-routing.module';

import { PwaListPage } from './pwa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwaListPageRoutingModule
  ],
  declarations: [PwaListPage]
})
export class PwaListPageModule {}
