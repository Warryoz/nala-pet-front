import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { IPet } from '../interfaces/pet.interface';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'nala-pets-form',
  templateUrl: './pet-form.page.html',
  styleUrls: ['./pet-form.page.scss'],
})
export class PetFormPage implements OnInit{
  @Input() petToEdit: IPet;
  petForm = this.formBuilder.group({
    id: [],
    name: ['', [Validators.required]],
    hasVaccineUpdated: [false, [Validators.required]],
    birthDate: ['', [Validators.required]],
    race: ['', [Validators.required]],
  });
  title = 'Nueva mascota';
  buttonText = 'Crear mascota';
  hasToUpdate = false;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly modalController: ModalController,
    private readonly toastController: ToastController,
    private readonly loadingController: LoadingController,
    private readonly petService: PetsService
  ) {}
  ngOnInit(): void {
    if(!this.petToEdit) return;
    this.hasToUpdate = true;
    this.title = 'Editar Mascota';
    this.buttonText = 'Actualizar mascota';
    this.petForm.setValue(this.petToEdit);
  }

  async onSubmit() {
    if(this.hasToUpdate){
      this.updatePet();
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Estamos creando tu mascota'
    });
    await loading.present();
    const newPet: IPet = this.petForm.value as IPet;
    this.petService.createPet(newPet).subscribe(
     async () => {
      await this.successPetFormToast('Mascota creada correctamente :)');
      await loading.dismiss();
      this.modalController.dismiss({data: true});
     },
     async (error) => {
        console.error(error);
        await this.errorPetFormToast('Ha ocurrido un error creando tu mascota :(');
        await loading.dismiss();
      }
    );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  private async updatePet(){
    const loading = await this.loadingController.create({
      message: 'Estamos actualizando tu mascota'
    });
    await loading.present();
    const petToEdit: IPet = this.petForm.value as IPet;
    this.petService.updatePet(petToEdit).subscribe(
     async () => {
      await this.successPetFormToast('Mascota actualizada correctamente :)');
      await loading.dismiss();
      this.modalController.dismiss({data: true});
     },
     async (error) => {
        console.error(error);
        await this.errorPetFormToast('Ha ocurrido un error actualizando tu mascota :(');
        await loading.dismiss();
      }
    );
  }

  private async errorPetFormToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3500,
      color: 'danger',
      position: 'top',
    });
    await toast.present();
  }

  private async successPetFormToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3500,
      color: 'success',
      position: 'top',
    });
    await toast.present();
  }
}
