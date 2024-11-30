import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import { UserLoginDto } from '../../dtos/user-login-dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-service',
  templateUrl: './login-service.component.html',
  styleUrl: './login-service.component.css'
})
export class LoginServiceComponent implements OnInit{

  userLoginDto:UserLoginDto=new UserLoginDto();
  isLogin!:String;


  constructor(private userLoginService:UserLoginService,private router:Router)
  {

  }
  ngOnInit(): void {
   // this.getLogin();
  }
  getLogin()
  {
    console.log(this.userLoginDto)
   
     this.userLoginService.getUserLogin(this.userLoginDto.userName,this.userLoginDto.password).subscribe((data)=>{
      console.log(data);

    
  }
  
  ,
  response=>{

console.log(response);
    if(response.status==200){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
  });

  }

}
