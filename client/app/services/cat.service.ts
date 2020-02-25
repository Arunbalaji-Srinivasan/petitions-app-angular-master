import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Petition } from '../shared/models/petition.model';

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  // getCats(): Observable<Cat[]> {
  //   return this.http.get<Cat[]>('/api/cats');
    
  // }

  getPetitions(): Observable<Petition[]>{
    return this.http.get<Petition[]>('/api/petitions');
  }

  // countCats(): Observable<number> {
  //   return this.http.get<number>('/api/cats/count');
  // }

  // addCat(cat: Cat): Observable<Cat> {
  //   return this.http.post<Cat>('/api/cat', cat);
  // }

  submitPetition(petition: Petition): Observable<Petition>{
    return this.http.post<Petition>('/api/petition', petition);
  }

  getPetition(petitionId: Number): Observable<Petition>{
    return this.http.get<Petition>(`/api/petition/${petitionId}`);
  }

  // getCat(cat: Cat): Observable<Cat> {
  //   return this.http.get<Cat>(`/api/cat/${cat._id}`);
  // }

  // editCat(cat: Cat): Observable<any> {
  //   return this.http.put(`/api/cat/${cat._id}`, cat, { responseType: 'text' });
  // }

  updatePetitionSigners(petition: Petition): Observable<any>{
    return this.http.put(`/api/petition/${petition._id}`, petition, { responseType: 'text'});
  }

  // deleteCat(cat: Cat): Observable<any> {
  //   return this.http.delete(`/api/cat/${cat._id}`, { responseType: 'text' });
  // }

}
