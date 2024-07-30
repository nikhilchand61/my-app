import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent implements OnInit {

  public num1:number = 0;
  public num2:number = 0;
  public result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  catch(value:number){
    this.result = value;
  }

}
