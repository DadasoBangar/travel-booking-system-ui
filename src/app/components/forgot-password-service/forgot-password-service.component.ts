import { Component, OnInit } from '@angular/core';
import { ForgotPasswordDto } from '../../dtos/forgot-password-dto';

@Component({
  selector: 'app-forgot-password-service',
  templateUrl: './forgot-password-service.component.html',
  styleUrl: './forgot-password-service.component.css'
})

export class ForgotPasswordServiceComponent implements OnInit {


  forgotPasswordDto: ForgotPasswordDto = new ForgotPasswordDto();
  constructor() {

  }
  ngOnInit(): void {

  }
  forgotPassword() {
    console.log("hey");

  }
}
