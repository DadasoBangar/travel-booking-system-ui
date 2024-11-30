import { ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FlightDto } from '../../dtos/flight-dto';
import { FlightAirportsDto } from '../../dtos/flight-airports-dto';
import { FlightAirportDetailsService } from '../../services/flight-airport-details.service';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { TravelllerDetailsComponent } from '../travelller-details/travelller-details.component';
import { FlightSearchDto } from '../../dtos/flight-search-dto';
import { FlightSearchService } from '../../services/flight-search.service';
import { FlightSearchResultDto } from '../../dtos/flight-search-result-dto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit{


  fromLocationFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  toLocationFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  
  pokemonControl = new FormControl('');
  flightDto:FlightDto=new FlightDto();
  fromLocationInputValue!:String;
  toLocationInputValue!:String;

  flightAirportsDto:FlightAirportsDto[]=[];

  flightSearchDto:FlightSearchDto=new FlightSearchDto();
  flightSearchResult:FlightSearchResultDto[]=[];

  

  constructor(private flightAirportDetailsService:FlightAirportDetailsService,private flightSearchService:FlightSearchService, private router:Router)
  {

  }
  ngOnInit(): void {
  //this.searchFlight();
  }

  searchFlight(){
    console.log("Flight search details");
    console.log(this.flightSearchDto);
    const flightDiv=<HTMLElement>document.getElementById("fligtSearchRequest");
    flightDiv.style.display='block';

    const carDiv=<HTMLElement>document.getElementById("carSearchRequest");
    carDiv.style.display='none';

    const hotelDiv=<HTMLElement>document.getElementById("hotelSearchRequest");
    hotelDiv.style.display='none';

    console.log("Flight search request");


    this.flightSearchService.getFlightDetails(this.flightSearchDto).subscribe((data)=>{
      this.flightSearchResult=data;
      console.log(this.flightSearchResult);
      //this.router.navigate(['/flightSearchResult',this.flightSearchResult]);
     // this.router.navigate(['/flightSearchResult', this.flightSearchResult]);
      this.router.navigate(['/flightSearchResult'], { state: { searchResults: this.flightSearchResult } });

  },response=>{

   console.log(response.status);
    if(response.status==200){
      this.router.navigate(['/flightSearchResult'],{ state: { searchResults: this.flightSearchResult } });
      
    }
    else{
      console.log(response);
    } 
  });
}

  searchCar(){

    const carDiv=<HTMLElement>document.getElementById("carSearchRequest");
    carDiv.style.display='block';

    const hotelDiv=<HTMLElement>document.getElementById("hotelSearchRequest");
    hotelDiv.style.display='none';

    const flightDiv=<HTMLElement>document.getElementById("fligtSearchRequest");
    flightDiv.style.display='none';


    console.log("Car search request");
  }

  searchHotel(){

    const carDiv=<HTMLElement>document.getElementById("carSearchRequest");
    carDiv.style.display='none';

    const hotelDiv=<HTMLElement>document.getElementById("hotelSearchRequest");
    hotelDiv.style.display='block';

    const flightDiv=<HTMLElement>document.getElementById("fligtSearchRequest");
    flightDiv.style.display='none';

    console.log("Hotel search request");
  }

  getFlightAirportsDetails($event:Event,location:String){
       const input= $event.target as HTMLInputElement;
       console.log("Search location===>");
    console.log(input.value);


    searchTerm:! String;
    const searchTerm=input;
   
     this.flightAirportDetailsService.getFlightAirportsDetails().subscribe((data)=>{
      this.flightAirportsDto=data;
      this.flightAirportsDto=this.flightAirportsDto.filter((airports)=>airports.iata.toLowerCase().includes(input.value.toLowerCase()));
      console.log(this.flightAirportsDto);
      if(location==='fromLocation'){
        const fromSearchDiv=<HTMLElement>document.getElementById("matFromDiv");
        fromSearchDiv.style.display='block';
      }
       if(location==='toLocation'){
        const toSearchDiv=<HTMLElement>document.getElementById("matToDiv");
        toSearchDiv.style.display='block';
       }

      
      
  },
  response=>{

console.log(response);
    if(response.status==200){
      
      console.log(response);
    }
    else{
      console.log(response);
    } 
  });

  }

  disableFromLocationDiv(selectedValue: string){
    const fromSearchDiv=<HTMLElement>document.getElementById("fromIataCode");
    fromSearchDiv.style.display='none';

    const fromLocationInputDiv=<HTMLElement>document.getElementById("fromLocationDiv");
    fromLocationInputDiv.style.display='none';


    this.fromLocationInputValue=selectedValue;
    console.log("disabled from location");
  }

  disableToLocationDiv(selectedValue: string){
    const toSearchDiv=<HTMLElement>document.getElementById("iataCode");
    toSearchDiv.style.display='none';

    const toLocationInputDiv=<HTMLElement>document.getElementById("toLocationDiv");
    toLocationInputDiv.style.display='none';



    this.toLocationInputValue=selectedValue;
    console.log("disabled from location");

  }
  searchFromLocation(){
    const fromLocationDiv=<HTMLElement>document.getElementById("fromLocationDiv");
    fromLocationDiv.style.display='flex';

    const fromLocationInputDiv=<HTMLElement>document.getElementById("fromLocationInputDiv");
    fromLocationInputDiv.style.display='block';

    const fromSearchIcon=<HTMLElement>document.getElementById("fromSearchIcon");
    fromSearchIcon.style.display='block';

    const fromSearchDiv=<HTMLElement>document.getElementById("fromIataCode");
    fromSearchDiv.style.display='block';
    
    console.log("enabled search input");
  }

  searchToLocation(){
    const toLocationDiv=<HTMLElement>document.getElementById("toLocationDiv");
    toLocationDiv.style.display='flex';

    const toSearchDiv=<HTMLElement>document.getElementById("iataCode");
    toSearchDiv.style.display='block';

    const toLocationInputDiv=<HTMLElement>document.getElementById("toLocationInputDiv");
    toLocationInputDiv.style.display='block';

    const fromSearchIcon=<HTMLElement>document.getElementById("toSearchIcon");
    fromSearchIcon.style.display='block';


  }

  travellerClassDetails: string[] = [
    'Economy/Premium Economy',
    'Premium Economy',
    'Business',
    'First Class',
  ];

  readonly dialog = inject(MatDialog);
  displayTravellerDetails(){
    this.dialog.open(TravelllerDetailsComponent,{
      maxWidth:'50vw',
      maxHeight:'90vh',
      height:'90%',
      width:'50%',

    });


    
  }
}
