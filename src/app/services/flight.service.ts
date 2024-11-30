import { Injectable } from '@angular/core';
import { FlightDto } from '../dtos/flight-dto';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  baseUrl!:"http://localhost:8081/register";
  constructor(private httpClient:HttpClient) {}


  addFlightDetails(flightDto: FlightDto):Observable<Object> {
    return this.httpClient.post("http://localhost:8080/api/v1/flights",flightDto);

  }

 
}
