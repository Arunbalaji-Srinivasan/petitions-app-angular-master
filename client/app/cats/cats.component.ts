import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { CatService } from "../services/cat.service";
import { ToastComponent } from "../shared/toast/toast.component";
import { Petition } from "../shared/models/petition.model";

@Component({
  selector: "app-cats",
  templateUrl: "./cats.component.html",
  styleUrls: ["./cats.component.scss"]
})
export class CatsComponent implements OnInit {
  cat = new Petition();
  cats: Petition[] = [];
  isLoading = true;
  isEditing = false;
  petitionType = [];

  //  'HumanRights','Local','Economic justice','Politics','Environment','Womens Rights'];

  // addCatForm: FormGroup;
  // name = new FormControl('', Validators.required);
  // age = new FormControl('', Validators.required);
  // weight = new FormControl('', Validators.required);
  //pet = ['Animals','health'];

 
  constructor(
    private catService: CatService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent
  ) {
    this.petitionType = [
      { type: "Animals", image: "../../assets/animals.jpg" },
      { type: "HumanRights", image: "../../assets/human-rights1.jpg" },
      { type: "Health", image: "../../assets/health2.jpg" },
      { type: "Economic justice", image: "../../assets/economic_justice1.jpg" },
      { type: "Politics", image: "../../assets/politics1.jpg" },
      { type: "Environment", image: "../../assets/environment.jpg" },
      { type: "Womens Rights", image: "../../assets/women_rights1.jpg" },
      { type: "Local", image: "../../assets/local1.jpg" }
    ];
    
    //console.log(this.pet[0]);
    console.log(this.petitionType[0].type);
    console.log(this.petitionType[0].image);
  }

  ngOnInit() {
    //this.getCats();
    // this.petitionType = [
    //   { type: "Animals", image: "../../assets/Animal_Paw_Red.jpg" }
    //   // { type: "HumanRights", image: "../../assets/0human-rights-pigeon3.jpg" },
    //   // { type: "Health", image: "../../assets/health.png" },
    //   // { type: "Economic justice", image: "../../assets/economic_justice.jpg" },
    //   // { type: "Politics", image: "../../assets/Animal_Paw_Red.jpg" },
    //   // { type: "Environment", image: "../../assets/Animal_Paw_Red.jpg" },
    //   // { type: "Womens Rights", image: "../../assets/Animal_Paw_Red.jpg" }
    // ];
    // console.log(this.petitionType[0].type);
    // // this.addCatForm = this.formBuilder.group({
    //   name: this.name,
    //   age: this.age,
    //   weight: this.weight
    // });

    //console.log(this.petitionType[0].type);
  }

  // getCats() {
  //   this.catService.getCats().subscribe(
  //     data => (this.cats = data),
  //     error => console.log(error),
  //     () => (this.isLoading = false)
  //   );
  // }

  // addCat() {
  //   this.catService.addCat(this.addCatForm.value).subscribe(
  //     res => {
  //       this.cats.push(res);
  //       this.addCatForm.reset();
  //       this.toast.setMessage("item added successfully.", "success");
  //     },
  //     error => console.log(error)
  //   );
  // }

  // enableEditing(cat: Petition) {
  //   this.isEditing = true;
  //   this.cat = cat;
  // }

  // cancelEditing() {
  //   this.isEditing = false;
  //   this.cat = new Petition();
  //   this.toast.setMessage("item editing cancelled.", "warning");
  //   // reload the cats to reset the editing
  //   this.getCats();
  // }

  // editCat(cat: Petition) {
  //   this.catService.editCat(cat).subscribe(
  //     () => {
  //       this.isEditing = false;
  //       this.cat = cat;
  //       this.toast.setMessage("item edited successfully.", "success");
  //     },
  //     error => console.log(error)
  //   );
  // }

  // deleteCat(cat: Petition) {
  //   if (
  //     window.confirm("Are you sure you want to permanently delete this item?")
  //   ) {
  //     this.catService.deleteCat(cat).subscribe(
  //       () => {
  //         const pos = this.cats.map(elem => elem._id).indexOf(cat._id);
  //         this.cats.splice(pos, 1);
  //         this.toast.setMessage("item deleted successfully.", "success");
  //       },
  //       error => console.log(error)
  //     );
  //   }
  // }
}
