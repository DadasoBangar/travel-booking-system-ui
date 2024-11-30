import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CancellationPolicyComponent } from '../cancellation-policy/cancellation-policy.component';

@Component({
  selector: 'app-flight-fare-details',
  templateUrl: './flight-fare-details.component.html',
  styleUrl: './flight-fare-details.component.css'
})
export class FlightFareDetailsComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private router:Router){

  }
  
  readonly dialog = inject(MatDialog);
  openCancellationPolicy(){
    this.dialog.open(CancellationPolicyComponent,{
      maxWidth:'85vw',
      maxHeight:'85vh',
      height:'85%',
      width:'85%',

    });


    
  }


}
