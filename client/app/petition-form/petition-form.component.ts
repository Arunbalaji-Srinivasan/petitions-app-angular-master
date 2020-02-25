import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { constructor } from 'connect';
import { CatService } from '../services/cat.service';
import { Petition } from '../shared/models/petition.model';
import { ToastComponent } from '../shared/toast/toast.component';
import { ActivatedRoute, Router } from "@angular/router";
import { DragdropService } from "../services/dragdrop.service";

import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-petition-form',
  templateUrl: './petition-form.component.html',
  styleUrls: ['./petition-form.component.scss']
})
export class PetitionFormComponent implements OnInit {
  

  userSignedIn = false;
fileArr=[];
fileObj =[];
  submitPetitionForm: FormGroup;
  petitions: Petition[] = [];
  title= new FormControl('', Validators.required);
  target= new FormControl('', Validators.required);
  description= new FormControl('', Validators.required);
  category=null;
  msg: string;
  progress: number = 0;
  image = null;
  constructor( private catService: CatService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent,
    private route: ActivatedRoute,private sanitizer: DomSanitizer,
    public dragdropService: DragdropService,
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get("petitionType")
    });
    console.log("category:" + this.category);
    this.submitPetitionForm = this.formBuilder.group(
    {
      title: this.title,
      target: this.target,
      description: this.description,
      username: this.auth.currentUser.email,
      category: this.category,
      //imgPath: this.image,
      dateOfFiling: new Date("2019-12-13"),
      numberOfPeopleSigned: 80,
      targetToBeAcheived: 100
     // imageFile: null
    });
  
  
  }

  upload(e) {
    const fileListAsArray = Array.from(e);
    fileListAsArray.forEach((item, i) => {
      const file = (e as HTMLInputElement);
      const url = URL.createObjectURL(file[i]);
      this.image = url;
      // this.imgArr.push(url);
      this.fileArr.push({ item, url: url });
      this.fileObj.push(item);
    })
    //const file = (e as HTMLInputElement).files[0];

    // this.fileArr.forEach((item) => {
    //   this.fileObj.push(item.item)
    // })

    // Set files form control
    this.submitPetitionForm.patchValue({
      //imgPath: this.image
      imageFile: this.fileObj
    })

    this.submitPetitionForm.get('imageFile').updateValueAndValidity()

    // Upload to server
    // this.dragdropService.addFiles(this.form.value.avatar)
    //   .subscribe((event: HttpEvent<any>) => {
    //     switch (event.type) {
    //       case HttpEventType.Sent:
    //         console.log('Request has been made!');
    //         break;
    //       case HttpEventType.ResponseHeader:
    //         console.log('Response header has been received!');
    //         break;
    //       case HttpEventType.UploadProgress:
    //         this.progress = Math.round(event.loaded / event.total * 100);
    //         console.log(`Uploaded! ${this.progress}%`);
    //         break;
    //       case HttpEventType.Response:
    //         console.log('File uploaded successfully!', event.body);
    //         setTimeout(() => {
    //           this.progress = 0;
    //           this.fileArr = [];
    //           this.fileObj = [];
    //           this.msg = "File uploaded successfully!"
    //         }, 3000);
    //     }
    //   })
  }

  // Clean Url for showing image preview
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  submitPetition(){
    if(this.auth.loggedIn){
      console.log("petition sent to save: " +this.submitPetitionForm.value);
    this.catService.submitPetition(this.submitPetitionForm.value).subscribe(
      res => {
        console.log("toast");
        this.petitions.push(res);
        this.submitPetitionForm.reset();
        this.toast.setMessage('Petition saved successfully!!','success');

      },
      error => console.log(error)
    );

    // this.dragdropService.addFiles(this.submitPetitionForm.value.title, this.submitPetitionForm.value.target,
    //   this.submitPetitionForm.value.description, this.submitPetitionForm.value.username,this.submitPetitionForm.value.category,
    //   this.submitPetitionForm.value.dateOfFiling,this.submitPetitionForm.value.numberOfPeopleSigned, this.submitPetitionForm.value.targetToBeAcheived,
    //   this.submitPetitionForm.value.imageFile).subscribe((event: HttpEvent<any>) => {
    //     switch (event.type) {
    //       case HttpEventType.Sent:
    //         console.log('Request has been made!');
    //         break;
    //       case HttpEventType.ResponseHeader:
    //         console.log('Response header has been received!');
    //         break;
    //       case HttpEventType.UploadProgress:
    //         this.progress = Math.round(event.loaded / event.total * 100);
    //         console.log(`Uploaded! ${this.progress}%`);
    //         break;
    //       case HttpEventType.Response:
    //         console.log('File uploaded successfully!', event.body);
    //         setTimeout(() => {
    //           this.progress = 0;
    //           this.fileArr = [];
    //           this.fileObj = [];
    //           this.msg = "File uploaded successfully!"
    //         }, 3000);
    //     }
    //   })
      

  // }
  // else{
  //   this.router.navigate(['/login']);
  // }
  }else{
    this.toast.setMessage('Please login to Start a Petition!!','danger');
    this.router.navigate(['/login']);

  }
}
}