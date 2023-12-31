import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserdataComponent } from './userdata/userdata.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TestingComponent } from './testing/testing.component';
import { DateComponent } from './date/date.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { YourComponentComponent } from './your-component/your-component.component';


const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:"signin", component:SignInComponent},
  {path:'signup', component:SignUpComponent}, 
  {path:'home', component:HomeComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'dropdown', component:DropdownComponent},
  {path:'testing', component:TestingComponent},
  {path:'date',component:DateComponent},
  {path:'formarray',component:YourComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
