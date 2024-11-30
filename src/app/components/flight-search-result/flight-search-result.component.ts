import { Component, inject, OnInit } from '@angular/core';
import { FlightSearchService } from '../../services/flight-search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FlightSearchResultDto } from '../../dtos/flight-search-result-dto';
import { MatDialog } from '@angular/material/dialog';
import { FlightSearchPriceDetailsComponent } from '../flight-search-price-details/flight-search-price-details.component';

interface RouterState {
  searchResults: FlightSearchResultDto[];  // Expected state structure
}
@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrl: './flight-search-result.component.css'
})
export class FlightSearchResultComponent implements OnInit{
  flightSearchResult: FlightSearchResultDto[] = [];

  constructor(private location: Location) {}

  ngOnInit(): void {
    // Get the state passed via the router
    const navigation = this.location.getState() as RouterState;

    // Ensure that the searchResults are available in the state
    if (navigation && Array.isArray(navigation.searchResults)) {
      this.flightSearchResult = navigation.searchResults;  // Assign the result to the component
      console.log('Received flight search results:', this.flightSearchResult);
    } else {
      console.log('No valid flight search result data found.');
    }
  }


  readonly dialog = inject(MatDialog);
  viewPriceDetails(){
    this.dialog.open(FlightSearchPriceDetailsComponent,{
      maxWidth:'100vw',
      maxHeight:'100vh',
      height:'98%',
      width:'80%',

    });


    
  }

  
}
