import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search-price-details',
  templateUrl: './flight-search-price-details.component.html',
  styleUrl: './flight-search-price-details.component.css'
})
export class FlightSearchPriceDetailsComponent implements OnInit{

  constructor(private router:Router)
  {

  }
  ngOnInit(): void
  {

  }
  getFlightFareDetails()
  {
    console.log("Inside fare details");

      this.router.navigate(['/getFareDetails']);
   
    
  }

}
