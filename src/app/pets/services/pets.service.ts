import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPet } from '../interfaces/pet.interface';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http : HttpClient ) { }

  url = 'http://localhost:8080/api/v1/pets';


  getPets(): Observable<IPet[]> {

      return  this.http.get<IPet[]>(this.url);

  }


}
