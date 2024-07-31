import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create
  public countSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  // get
  getCount(){
    return this.countSub$;
  }

  // set
  setCount(value:any){
    this.countSub$.next(value);
  }
}
