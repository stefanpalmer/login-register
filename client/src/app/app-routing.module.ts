import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginConfirmComponent } from './login-confirm/login-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-confirm', component: LoginConfirmComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'register-confirm', component: RegisterConfirmComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
