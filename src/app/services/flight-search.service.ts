import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FlightSearchDto } from '../dtos/flight-search-dto';
import { FlightSearchResultDto } from '../dtos/flight-search-result-dto';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  baseUrl!:"http://localhost:8080/api/v1/flights";

  //http://localhost:8080/api/v1/flights?journeyType=One%20Way&fromLocation=Mumbai&toLocation=Delhi&departureDate=2024-10-13&returnDate=2024-10-13&fareType=Regular&fareClassType=First%20Class

  constructor(private httpClient:HttpClient) {}

  
  getFlightDetails(flightSearchDto: FlightSearchDto):Observable<FlightSearchResultDto[]>{
  return this.httpClient.get<FlightSearchResultDto[]>("http://localhost:8080/api/v1/flights?journeyType="+flightSearchDto.journeyType
                                                                                        +"&fromLocation="+"Mumbai"
                                                                                        +"&toLocation="+"Delhi"
                                                                                        +"&departureDate="+"2024-11-18"
                                                                                        +"&returnDate="+"2024-11-18"
                                                                                        +"&fareType="+flightSearchDto.fareType
                                                                                        +"&fareClassType="+"First Class");

}
}
