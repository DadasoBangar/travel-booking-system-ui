import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelller-details',
  templateUrl: './travelller-details.component.html',
  styleUrl: './travelller-details.component.css'
})
export class TravelllerDetailsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  adultsList=[1,2,3,4,5,6,7,8,9,10];
  childrenList=[0,1,2,3,4,5,6];
  infantList=[0,1,2,3,4,5,6];
  travellerClassDetails: string[] = [
    'Economy/Premium Economy',
    'Premium Economy',
    'Business',
    'First Class',
  ];


}
