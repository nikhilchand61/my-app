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
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentCardDetailsComponent } from './student-card-details/student-card-details.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { OperationsComponent } from './operations/operations.component';

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
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentCardComponent,
    VehicleDetailsComponent,
    AccountDetailsComponent,
    StudentCardDetailsComponent,
    CreateStudentCardComponent,
    CreateUserComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    NewCalculatorComponent,
    OperationsComponent
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