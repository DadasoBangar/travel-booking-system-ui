import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  timeFrame: string;
  cancellationAmount: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {timeFrame: '0 hours to 2 hours*', cancellationAmount: 'ADULT : Non Refundable'},
  {timeFrame: '2 hours to 24 hours*', cancellationAmount: 'ADULT : Non Refundable'},
  {timeFrame: '24 hours to 365 days*', cancellationAmount: 'ADULT : ₹ 6,000 + ₹ 700'},

 
];


@Component({
  selector: 'app-cancellation-policy',
  templateUrl: './cancellation-policy.component.html',
  styleUrl: './cancellation-policy.component.css',
  
  
})
export class CancellationPolicyComponent implements OnInit {
  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['timeFrame', 'cancellationAmount'];
  dataSource = ELEMENT_DATA;
  

  constructor(private router:Router){

  }
  openCancellationChargesPolicy(){

    console.log("insode openCancellationChargesPolicy method");
    var cancellationChargesDiv=<HTMLFormElement>document.getElementById('cancellationChargesDiv');
    cancellationChargesDiv.style.display='block';

    var cancellationChargesBtn=<HTMLFormElement>document.getElementById('cancellationChargesBtn');
    cancellationChargesBtn.style.backgroundColor='#2E1A66';
    cancellationChargesBtn.style.color='white';
    
    var dateChangeChargesDiv=<HTMLFormElement>document.getElementById('dateChangeChargesDiv');
    dateChangeChargesDiv.style.display='none';

    var dateChangeChargesBtn=<HTMLFormElement>document.getElementById('dateChangeChargesBtn');
    dateChangeChargesBtn.style.backgroundColor='white';
    dateChangeChargesBtn.style.color='#2E1A66';
    

  }

  openDateChangeChargesPolicy(){
    console.log("inside openDateChangeChargesPolicy method");
    var dateChangeChargesDiv=<HTMLFormElement>document.getElementById('dateChangeChargesDiv');
    dateChangeChargesDiv.style.display='none';
    dateChangeChargesDiv.style.display='block';

    var cancellationChargesDiv=<HTMLFormElement>document.getElementById('cancellationChargesDiv');
    cancellationChargesDiv.style.display='none';

    var cancellationChargesBtn=<HTMLFormElement>document.getElementById('cancellationChargesBtn');
    cancellationChargesBtn.style.backgroundColor='white';
    cancellationChargesBtn.style.color='#2E1A66';
    

    var dateChangeChargesBtn=<HTMLFormElement>document.getElementById('dateChangeChargesBtn');
    dateChangeChargesBtn.style.backgroundColor='#2E1A66';
    dateChangeChargesBtn.style.color='white';
    

  }



}
