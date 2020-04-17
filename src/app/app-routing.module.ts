import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'roles', component: RolesComponent },
  { path: 'normal_users', component: NormalUserComponent },
  { path: 'admin_users', component: AdminUserComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
