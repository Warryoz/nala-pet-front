import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  RefresherCustomEvent,
  ToastController,
} from '@ionic/angular';

import { IPet } from './interfaces/pet.interface';
import { PetFormPage } from './pet-form/pet-form.page';
import { PetsService } from './services/pets.service';

@Component({
  selector: 'nala-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss'],
})
export class PetsPage implements OnInit {
  pets: IPet[];
  isFreshing = false;
  constructor(
    private toastController: ToastController,
    private modalController: ModalController,
    private petsService: PetsService
  ) {}

  ngOnInit() {
    this.getAllPets();
  }

  refreshPets(refreshPets: RefresherCustomEvent) {
    this.isFreshing = true;
    this.getAllPets(refreshPets);
  }

  async editPet(petId: string) {
    const pet = this.pets.find((p) => p.id === petId);
    const modal = await this.modalController.create({
      component: PetFormPage,
      componentProps: { petToEdit: pet },
      initialBreakpoint: 0.5,
    });
    modal.present();
    modal.onWillDismiss().then((wasUpdated) => {
      if (wasUpdated.data) this.getAllPets();
    });
  }

  async newPet() {
    const modal = await this.modalController.create({
      component: PetFormPage,
      initialBreakpoint: 0.5,
    });
    modal.present();
    modal.onWillDismiss().then((wasRecordered) => {
      if (wasRecordered.data) this.getAllPets();
    });
  }

  private getAllPets(refreshPets?: RefresherCustomEvent) {
    this.petsService.getPets().subscribe(
      async (pets) => {
        this.pets = pets;
        if (refreshPets) await refreshPets.target.complete();
      },
      async (error) => {
        console.error(error);
        this.isFreshing = false;
        this.pets = null;
        await this.errorToastPets();
        if (refreshPets) await refreshPets.target.complete();
      }
    );
  }

  private async errorToastPets() {
    const toast = await this.toastController.create({
      message: 'Ha ocurrido un error consultando tus mascotas :(',
      duration: 3500,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

}
