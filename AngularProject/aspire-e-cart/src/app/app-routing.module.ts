import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  { path: 'dashboard',  component: DashboardComponent },
  { path: 'products',     component: ProductListComponent },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full', 
  canActivate: [AuthGuard]
},
{ 
  path: 'login', component: LoginComponent 
 
},
{ path: 'signup',     component: SignupComponent },
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
