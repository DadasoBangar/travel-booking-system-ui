import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FlightAirportsDto } from '../dtos/flight-airports-dto';

@Injectable({
  providedIn: 'root'
})
export class FlightAirportDetailsService {

  constructor(private httpClient:HttpClient) {}


  getFlightAirportsDetails():Observable<FlightAirportsDto[]>{
    return this.httpClient.get<FlightAirportsDto[]>("http://localhost:8092/flightAirports");
  
  }
  
}
