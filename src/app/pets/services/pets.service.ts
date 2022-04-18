import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPet } from '../interfaces/pet.interface';


@Injectable({
  providedIn: 'root'
})
export class PetsService {
  url = 'http://localhost:8080/api/v1/pets';

  constructor(private http: HttpClient ) { }

  getPets(): Observable<IPet[]> {
      return  this.http.get<IPet[]>(this.url);
  }


}
