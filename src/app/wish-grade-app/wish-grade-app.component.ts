import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-grade-app',
  templateUrl: './wish-grade-app.component.html',
  styleUrls: ['./wish-grade-app.component.css']
})
export class WishGradeAppComponent implements OnInit {
  public time:number = 0;
  public wishes:string = "";
  public marks:number = 0;
  public grades:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  wish(){
    if(this.time >= 5 && this.time <= 12){
        this.wishes = "Good Morning";
    }
    else if(this.time > 12 && this.time <= 17){
        this.wishes = "Good Afternoon";
    }
    else if(this.time > 17 && this.time <= 20){
        this.wishes = "Good Evening";
    }
    else{
        this.wishes = "Good Night";
    }
  }
  calc(){
    if(this.marks >= 90){
        this.grades = "Grade A";
    }
    else if(this.marks >= 75){
        this.grades = "Grade B";
    }
    else if(this.marks >= 55){
        this.grades = "Grade C";
    }
    else if(this.marks >= 35){
        this.grades = "Grade D";
    }
    else{
        this.grades = "You're failed!!!";
    }
  }
}
