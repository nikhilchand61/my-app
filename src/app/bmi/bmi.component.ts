import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  public height:number = 0;
  public weight:number = 0;
  public result:number = 0;
  public bmiRange:string = "";
  public weightToLose:number = 0;
  public gLN:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  calc(){
    this.result = ((this.weight * 10000) / (this.height * this.height));
    this.result = Number(this.result.toFixed(2));
    if(this.result > 35){
        this.bmiRange = "(Extremly Obese)";
    }
    else if(this.result >= 30){
        this.bmiRange = "(Obese)";
    }
    else if(this.result >= 25){
        this.bmiRange = "(Overweight)";
    }
    else if(this.result >= 18.5){
        this.bmiRange = "(Normal)";
    }
    else{
        this.bmiRange = "(Underweight)";
    }

    if(this.result >= 25){
      this.weightToLose = (this.weight - 24.9 * (this.height/100) * (this.height/100));
      this.weightToLose = Number(this.weightToLose.toFixed(1));
      this.gLN = "to lose";
    }
    else if(this.result < 18.5){
      this.weightToLose = (18.5 * (this.height/100) * (this.height/100) - this.weight);
      this.weightToLose = Number(this.weightToLose.toFixed(1));
      this.gLN = "to gain";
    }
    else{
      this.gLN = "";
      this.weightToLose = 0;
    }
  }
}
