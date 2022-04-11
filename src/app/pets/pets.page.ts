import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';
import { IPet } from './interfaces/pet.interface';
import { RefresherCustomEvent, ToastController } from '@ionic/angular';

@Component({
  selector: 'nala-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss'],
})
export class PetsPage implements OnInit {
  pets: IPet[];

  constructor(
    private petsService: PetsService,
    public toastController: ToastController) {}

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(refreshPets?: RefresherCustomEvent) {
    this.petsService.getPets().subscribe(async (pets) => {
      this.pets = pets;
      if (refreshPets) await refreshPets.target.complete();
    }, async error  => {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Error consultando tus mascotas :(',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
      await toast.present();
      if (refreshPets) await refreshPets.target.complete();
    }
    );
  }

  refreshPets(refreshPets: RefresherCustomEvent ) {
    this.getAllPets(refreshPets);
  }
}
