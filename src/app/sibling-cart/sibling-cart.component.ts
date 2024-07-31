import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-sibling-cart',
  templateUrl: './sibling-cart.component.html',
  styleUrls: ['./sibling-cart.component.css']
})
export class SiblingCartComponent implements OnInit {

  public counter:number = 0;

  constructor(private _siblingCommunicationService:SiblingCommunicationService) {
    _siblingCommunicationService.getCount().subscribe(
      (data:any)=>{
        this.counter = data;
      }
    )
  }

  ngOnInit(): void {
  }



}
