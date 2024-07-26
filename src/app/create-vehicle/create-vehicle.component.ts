import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl()
  })

  public id:string = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // alert(data.id);
        this.id = data.id;
        _vehicleService.getVehicleDetails(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue( data );
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.id){
      // edit
      this._vehicleService.updateVehicle(this.vehicleForm.value, this.id).subscribe(
        (data:any)=>{
          alert("Updated Successfully!!!");
          this.vehicleForm.reset();
        },
        (err:any)=>{
          alert("Update failed")
        }
      )
    }
    else{
      // create
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Created Successfully!!!");
          this.vehicleForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
  }
}
