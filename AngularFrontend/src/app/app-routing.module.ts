import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { BooknewticketComponent } from './booknewticket/booknewticket.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { SignupComponent } from './signup/signup.component';

import { LogoutComponent } from './logout/logout.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ToproutesComponent } from './toproutes/toproutes.component';
import { InactiveComponent } from './inactive/inactive.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddbusComponent } from './addbus/addbus.component';
import { ProfitsComponent } from './profits/profits.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AdminbussearchComponent } from './adminbussearch/adminbussearch.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { AddrouteComponent } from './addroute/addroute.component';
import { DeleterouteComponent } from './deleteroute/deleteroute.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReceiptComponent } from './receipt/receipt.component';



const routes: Routes = [
  {path:'default', component:DefaultComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'profile', component:ProfileComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactusComponent},
  {path:'receipt',component:ReceiptComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'newticket/:id',component:BooknewticketComponent},
  
  
  {path:'adminlogin',component:AdminloginComponent},
  {path:'search',component:SearchComponent} ,
  {path:'top',component:ToproutesComponent},
  {path:'inactive',component:InactiveComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'addbus',component:AddbusComponent},
  {path:'profits',component:ProfitsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'update',component:UpdateprofileComponent},
  {path:'adminbussearch',component:AdminbussearchComponent},
  {path:'deletebus',component:DeletebusComponent},
  {path:'addroute',component:AddrouteComponent},
  {path:'deleteroute',component:DeleterouteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
