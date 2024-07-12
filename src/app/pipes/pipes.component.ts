import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  public name:string = "Java Script";

  public today:any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
