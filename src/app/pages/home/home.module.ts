import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { MatSharedModule } from '../../mat-shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSharedModule
  ]
})
export class HomeModule { }
