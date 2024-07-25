import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // alert(data.id);
        _vehicleService.getVehicleDetails(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          },
          (err:any)=>{
            alert("Vehicle Details not found!!!");
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
