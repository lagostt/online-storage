import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSpaceRoutingModule } from './client-space-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ClientSpaceRoutingModule
  ]
})
export class ClientSpaceModule { }
