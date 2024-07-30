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
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentCardDetailsComponent } from './student-card-details/student-card-details.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { NotifyGuard } from './notify.guard';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
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
    {path: 'create-vehicle', component: CreateVehicleComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'student-card', component: StudentCardComponent},
    {path: 'vehicle-details/:id', component: VehicleDetailsComponent},
    {path: 'edit-vehicle/:id', component: CreateVehicleComponent},
    {path: 'account-details/:id', component: AccountDetailsComponent},
    {path: 'edit-account/:id', component: CreateAccountComponent},
    {path: 'student-card-details/:id', component: StudentCardDetailsComponent},
    {path: 'create-student-card', component: CreateStudentCardComponent},
    {path: 'edit-student-card/:id', component: CreateStudentCardComponent},
    {path: 'create-user',canDeactivate:[NotifyGuard] ,component: CreateUserComponent},
    {path: 'create-company',canDeactivate:[NotifyGuard], component: CreateCompanyComponent},
    {path: 'parent', component:ParentComponent},
    {path: 'new-calculator', component:NewCalculatorComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }