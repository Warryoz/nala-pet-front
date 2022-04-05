import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http : HttpClient ) { }

  url = 'http://localhost:8080/api/v1/pets';


  getPets(): Observable<any> {

      return  this.http.get<any>(this.url);

  }


}
