import { Component, OnInit } from '@angular/core';
import { CatService } from 'client/app/services/cat.service';
import { Petition } from 'client/app/shared/models/petition.model';

@Component({
  selector: 'app-victories',
  templateUrl: './victories.component.html',
  styleUrls: ['./victories.component.scss']
})
export class VictoriesComponent implements OnInit {

  petitions: Petition[] = [];

  constructor(private catService: CatService) { }

  ngOnInit() {
    //this.getPetitions();
    this.catService.getPetitions().subscribe(
      data => {
            
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