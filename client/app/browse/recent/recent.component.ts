import { Component, OnInit } from '@angular/core';
import { CatService } from 'client/app/services/cat.service';
import { Petition } from 'client/app/shared/models/petition.model';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  petitions: Petition[] = [];
  todayDate = new Date().toDateString();
  constructor(private catService: CatService) { }

  ngOnInit() {
    //this.getPetitions();
    this.catService.getPetitions().subscribe(
      data => {
        this.petitions = data.filter(pet => pet.dateOfFiling.slice(0,15) == this.todayDate);
      console.log(this.petitions);
      });
    
  }

  // getPetitions(){
  //   this.catService.getPetitions().subscribe(
  //   data => {      
  //     this.petitions = data.filter(pet => pet.numberOfPeopleSigned>75);
  //     console.log(this.petitions);
  //   });
  //     // error => console.log(error)
    
    
  // }

  calProgress(petition){
    console.log(petition.numberOfPeopleSigned);
     return petition.numberOfPeopleSigned;
      }
  


}