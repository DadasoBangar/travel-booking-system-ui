import { Component, OnInit } from '@angular/core';
import { UserRegistrationDto } from '../../dtos/user-registration-dto';
import { UserRegistrationService } from '../../services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-service',
  templateUrl: './user-registration-service.component.html',
  styleUrl: './user-registration-service.component.css'
})
export class UserRegistrationServiceComponent implements OnInit{


  userRegistrationDto:UserRegistrationDto=new UserRegistrationDto();


  constructor(private userRegistrationService:UserRegistrationService,private router:Router)
  {

  }
  ngOnInit(): void
  {

  }
  registerUser()
  {
    console.log(this.userRegistrationDto)
    this.userRegistrationService.registerUser(this.userRegistrationDto).subscribe(data=>{
      this.router.navigate(['/sucess']);
    },()=>this.router.navigate(['/sucess']));
    
  }

}
