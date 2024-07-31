import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingCommunicationService {

  public counter$:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  getCount(){
    return this.counter$;
  }

  setCount(value:any){
    this.counter$.next(value);
  }
}
