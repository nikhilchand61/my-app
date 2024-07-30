import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  @Input() public num1:number = 0;
  @Input() public num2:number = 0;

  @Output() public result:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  sum(){
    this.result.emit(this.num1+this.num2);
  }
  mul(){
    this.result.emit(this.num1*this.num2);
  }
}
