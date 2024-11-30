import { Component, Inject, OnInit } from '@angular/core';
import { FlightDto } from '../../dtos/flight-dto';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';
import { FlightServiceSuccessComponent } from '../flight-service-success/flight-service-success.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-flight-details-service',
  templateUrl: './flight-details-service.component.html',
  styleUrl: './flight-details-service.component.css'
})
export class FlightDetailsServiceComponent implements OnInit{


  flightDto:FlightDto=new FlightDto();



  constructor(private flightService:FlightService,private router:Router)
  {

  }
  ngOnInit(): void
  {

  }
  addFlightDetails()
  {
    console.log(this.flightDto)
    this.flightService.addFlightDetails(this.flightDto).subscribe(data=>{
      console.log("inside add flight details");
      console.log(data)

      this.router.navigate(['/flightSucess']);
    },()=>this.router.navigate(['/flightSucess']));
    
  }
}
