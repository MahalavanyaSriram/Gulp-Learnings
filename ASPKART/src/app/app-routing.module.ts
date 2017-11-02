import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home',  component: DashboardComponent },
  { path: 'products',     component: ProductListComponent},
  { path: 'login',     component: LoginComponent},
  { path: 'signup',     component: SignupComponent},
  { path: 'cart',     component:  CartComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
