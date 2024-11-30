import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { UserRegistrationServiceComponent } from './components/user-registration-service/user-registration-service.component';
import { LoginServiceComponent } from './components/login-service/login-service.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundError } from 'rxjs';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlightDetailsServiceComponent } from './components/flight-details-service/flight-details-service.component';
import { FlightServiceSuccessComponent } from './components/flight-service-success/flight-service-success.component';
import { FlightSearchResultComponent } from './components/flight-search-result/flight-search-result.component';
import { FlightFareDetailsComponent } from './components/flight-fare-details/flight-fare-details.component';

const routes: Routes = [

  {path:'register',component:UserRegistrationServiceComponent},
  {path:'login',component:LoginServiceComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sucess',component:RegistrationSuccessComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'addFlight',component:FlightDetailsServiceComponent},
  {path:'flightSucess',component:FlightServiceSuccessComponent},
  {path:'flightSearchResult',component:FlightSearchResultComponent},
  {path:'getFareDetails',component:FlightFareDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
