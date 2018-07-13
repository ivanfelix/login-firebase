import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'iniciar-sesion', component: LoginPageComponent},
  {path: 'registro', component: RegisterPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: '**', component: NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
