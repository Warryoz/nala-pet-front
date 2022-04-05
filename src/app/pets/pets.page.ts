import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss']
})
export class PetsPage  implements OnInit {

  pet: any;

  constructor( private petsService: PetsService ) {}

  ngOnInit() {
    this.petsService.getPets().subscribe( pets => this.pet = pets )
  }


}
