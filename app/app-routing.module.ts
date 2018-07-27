import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerHomeComponent }      from './component/container-home/container-home.component';
import { ContainerLoginComponent }      from './component/container-login/container-login.component';
import { ContainerRegisterComponent }      from './component/container-register/container-register.component';
import { ContainerDetailComponent }      from './component/container-detail/container-detail.component';

// const routes: Routes = [
//   { path:'', redirectTo: './', pathMatch: 'full' },
//   { path: './', component: ContainerHomeComponent },
//   { path: 'login', component: ContainerLoginComponent },
//   { path: 'register', component: ContainerRegisterComponent },
//   { path: 'detail/:id', component: ContainerDetailComponent }
// ];
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}