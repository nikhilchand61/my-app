import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() public max:number = 0;
  public chars:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
