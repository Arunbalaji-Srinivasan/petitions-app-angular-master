import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../services/cat.service';
import { Petition } from 'client/app/shared/models/petition.model';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-petition-detail',
  templateUrl: './petition-detail.component.html',
  styleUrls: ['./petition-detail.component.scss']
})
export class PetitionDetailComponent implements OnInit {

  petitionId = null;
  petitions: Petition[] = [];
  petition: Petition;
  user= null;
  constructor(private route: ActivatedRoute, private catService: CatService,public toast: ToastComponent, public auth: AuthService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.petitionId = params.get("_id")
    });
    console.log("petitionId:" +this.petitionId);
    this.catService.getPetition(this.petitionId).subscribe(
      data =>{
        //this.petitions.push(data);
        this.petition = data;
        console.log("clicked petition: "+this.petition);
      }
    );
    this.user = this.auth.currentUser.username;
  }

  voteForPetition(petObj: Petition){
    console.log(petObj.numberOfPeopleSigned);
    //petObj.numberOfPeopleSigned = petObj.numberOfPeopleSigned++;
    this.petition.numberOfPeopleSigned +=1;  
    this.updatePetitionSigners(this.petition);
  }

  updatePetitionSigners(petObj: Petition) {
      this.catService.updatePetitionSigners(petObj).subscribe(
        (res) => {
          //this.isEditing = false;
          //this.cat = cat;
          this.toast.setMessage('Successfully signed!!','success')
        },
        error => console.log(error)
      );
    }

}
