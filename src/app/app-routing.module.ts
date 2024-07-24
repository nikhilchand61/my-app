import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
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
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailsComponent } from './mails/mails.component';
import { ReloadComponent } from './reload/reload.component';
import { MemesComponent } from './memes/memes.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, children:[
    {path: 'welcome', component: WelcomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'rectangle', component: RectangleComponent},
    {path: 'circle', component: CircleComponent},
    {path: 'bmi', component: BmiComponent},
    {path: 'wish_grade_app', component: WishGradeAppComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'employees_table', component: EmployeesTableComponent},
    {path: 'event_registration', component: EventRegistrationComponent},
    {path: 'cart', component: CartComponent},
    {path: 'flipkart', component: FlipkartComponent},
    {path: 'employees_db', component: EmployeesDbComponent},
    {path: 'vehicle', component: VehicleComponent},
    {path: 'account', component: AccountComponent},
    {path: 'amazon', component: AmazonComponent},
    {path: 'mails', component: MailsComponent},
    {path: 'reload', component: ReloadComponent},
    {path: 'memes', component: MemesComponent},
    {path: 'create-vehicle', component: CreateVehicleComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }