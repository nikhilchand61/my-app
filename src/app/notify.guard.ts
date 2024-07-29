import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyGuard implements CanDeactivate<unknown> {
  canDeactivate(
    // component: unknown,
    // link the create user component to component.
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return confirm("If you go back your progess will not be saved. Are you willing to go back?");
    // confirm message will come even though form in not touched. 

    // if(component.userForm.dirty){
    //   return confirm("If you go back your progess will not be saved. Are you willing to go back?");
    // } 
    // else{
    //   return true;
    // }
    
  }
  
}
