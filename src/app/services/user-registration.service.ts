import { Injectable, OnInit } from '@angular/core';
import { UserRegistrationDto } from '../dtos/user-registration-dto';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService{

  baseUrl!:"http://localhost:8081/register";
  constructor(private httpClient:HttpClient) {}
  
  registerUser(userRegistrationDto:UserRegistrationDto):Observable<Object>
    {
        console.log(userRegistrationDto);
        return this.httpClient.post('http://localhost:8081/register',userRegistrationDto);
       // return this.httpClient.get('http://localhost:8080/fullfillmentsection');
    }

}