import { Component, OnInit } from '@angular/core';
import { CatService } from 'client/app/services/cat.service';
import PetitionCtrl from 'server/controllers/petition';
import { Petition } from 'client/app/shared/models/petition.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  petitions: Petition[] = [];

  constructor(private catService: CatService) { }

  ngOnInit() {
    //this.getPetitions();
    this.catService.getPetitions().subscribe(
      data => {
        this.petitions = data;
        console.log(this.petitions); 
      });
    
  }

  getPetitions(){
    this.catService.getPetitions().subscribe(
    data => {
      this.petitions = data;
      console.log(this.petitions);
    });
      // error => console.log(error)
    
    
  }

  calProgress(petition){
    console.log(petition.numberOfPeopleSigned);
     return petition.numberOfPeopleSigned;
      }
  


}
