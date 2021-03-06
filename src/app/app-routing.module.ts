import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
const routes : Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'admin' , component : AdminComponent}
];


@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
