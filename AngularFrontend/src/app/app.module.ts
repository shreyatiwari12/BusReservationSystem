import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { BookingsComponent } from './bookings/bookings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PaymentComponent } from './payment/payment.component';
import { BooknewticketComponent } from './booknewticket/booknewticket.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DefaultComponent } from './default/default.component';

import { LogoutComponent } from './logout/logout.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddbusComponent } from './addbus/addbus.component';
import { SearchComponent } from './search/search.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ToproutesComponent } from './toproutes/toproutes.component';
import { InactiveComponent } from './inactive/inactive.component';
import { ProfitsComponent } from './profits/profits.component';
import { SuccessComponent } from './success/success.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AdminbussearchComponent } from './adminbussearch/adminbussearch.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { DeleterouteComponent } from './deleteroute/deleteroute.component';
import { AddrouteComponent } from './addroute/addroute.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReceiptComponent } from './receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    
    BookingsComponent,
    ChangepasswordComponent,
    PaymentComponent,
    BooknewticketComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    DefaultComponent,
    
    LogoutComponent,
    
    AdminloginComponent,
    AddbusComponent,
    SearchComponent,
    AdmindashboardComponent,
    ToproutesComponent,
    InactiveComponent,
    ProfitsComponent,
    SuccessComponent,
    FeedbackComponent,
    UpdateprofileComponent,
    AdminbussearchComponent,
    DeletebusComponent,
    DeleterouteComponent,
    AddrouteComponent,
    HomeComponent,
    ContactusComponent,
    ReceiptComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
