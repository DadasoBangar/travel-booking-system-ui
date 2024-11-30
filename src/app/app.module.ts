import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserRegistrationServiceComponent } from './components/user-registration-service/user-registration-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceComponent } from './components/login-service/login-service.component';
import { ForgotPasswordServiceComponent } from './components/forgot-password-service/forgot-password-service.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlightDetailsServiceComponent } from './components/flight-details-service/flight-details-service.component';
import { FlightServiceSuccessComponent } from './components/flight-service-success/flight-service-success.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TravelllerDetailsComponent } from './components/travelller-details/travelller-details.component';
import { FlightSearchResultComponent } from './components/flight-search-result/flight-search-result.component';
import { FlightSearchPriceDetailsComponent } from './components/flight-search-price-details/flight-search-price-details.component';
import { FlightFareDetailsComponent } from './components/flight-fare-details/flight-fare-details.component';
import { CancellationPolicyComponent } from './components/cancellation-policy/cancellation-policy.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationServiceComponent,
    LoginServiceComponent,
    ForgotPasswordServiceComponent,
    RegistrationSuccessComponent,
    DashboardComponent,
    ResetPasswordComponent,
    FlightDetailsServiceComponent,
    FlightServiceSuccessComponent,
    TravelllerDetailsComponent,
    FlightSearchResultComponent,
    FlightSearchPriceDetailsComponent,
    FlightFareDetailsComponent,
    CancellationPolicyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
     MatInputModule,
     MatDatepickerModule,
     MatTableModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
