import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { WishGradeAppComponent } from './wish-grade-app/wish-grade-app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponent } from './cart/cart.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmployeesDbComponent } from './employees-db/employees-db.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailsComponent } from './mails/mails.component';
import { ReloadComponent } from './reload/reload.component';
import { MemesComponent } from './memes/memes.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    WishGradeAppComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesTableComponent,
    EventRegistrationComponent,
    CartComponent,
    FlipkartComponent,
    EmployeesDbComponent,
    VehicleComponent,
    AccountComponent,
    AmazonComponent,
    MailsComponent,
    ReloadComponent,
    MemesComponent,
    CreateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }