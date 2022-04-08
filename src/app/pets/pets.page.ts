import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';
import { delay } from 'rxjs/operators';
import { IPet } from './interfaces/pet.interface';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss'],
})
export class PetsPage implements OnInit {
  pets: IPet[];

  constructor(private petsService: PetsService) {}

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(event?: RefresherCustomEvent) {
    this.petsService
      .getPets()
      .pipe(delay(1000))
      .subscribe((pets) => {
        this.pets = pets;
        if (event) event.target.complete();
      });
  }

  // refreshPets(event ) {
  //   setTimeout(() => {
  //     event.target.complete();
  //   }, 10500);
  // }

  refreshPets(event) {
    this.getAllPets(event);
  }
}
