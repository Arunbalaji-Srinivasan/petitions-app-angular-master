import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Petition } from '../shared/models/petition.model';

@Injectable({
  providedIn: 'root'
})

export class DragdropService {

  constructor(private http: HttpClient) { }

  addFiles(title: string, target: string, description: string, username: string, category: string, 
    dateOfFiling: Date, numberOfPeopleSigned: number, targetToBeAcheived: number, images: File) {
    //var arr = []
    var formData: any = new FormData();
      formData.append("title", title);
      formData.append("target",target);
      formData.append("description",description);
      formData.append("username",username);
      formData.append("category",category);
      formData.append("dateOfFiling",dateOfFiling);
      formData.append("numberOfPeopleSigned",numberOfPeopleSigned);
      formData.append("targetToBeAcheived",targetToBeAcheived);    
      formData.append("images", images);  

    //arr.push(images);

    // arr[0].forEach((item, i) => {
    //   formData.append('avatar', arr[0][i]);
    // })
      return this.http.post<Petition>(`/api/insertPetition`, formData,{
        reportProgress: true,
        observe: 'events'
      })
    // return this.http.post('/api/create-user', formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).pipe(
    //   catchError(this.errorMgmt)
    // )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
