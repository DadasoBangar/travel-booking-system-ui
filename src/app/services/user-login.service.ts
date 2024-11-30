import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginDto } from '../dtos/user-login-dto';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  
  baseUrl!:"http://localhost:8081/register/userName/password";

  constructor(private httpClient:HttpClient) {}

  
getUserLogin(userName: String, password: String):Observable<String>{
  return this.httpClient.get<String>("http://localhost:8082/login/"+userName+"/"+password);

}


}
