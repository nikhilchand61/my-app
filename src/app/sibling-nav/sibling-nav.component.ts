import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-sibling-nav',
  templateUrl: './sibling-nav.component.html',
  styleUrls: ['./sibling-nav.component.css']
})
export class SiblingNavComponent implements OnInit {

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
