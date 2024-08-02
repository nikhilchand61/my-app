import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  public count:number = 0;

  constructor(private _commonService:CommonService) { }

  ngOnInit(): void {
  }
  countChange(){
    this._commonService.setCount(this.count);
  }

}
