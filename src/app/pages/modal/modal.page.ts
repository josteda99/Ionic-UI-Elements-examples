import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalCrtl: ModalController) {}

  ngOnInit() {}

  async mostrarModal() {
    const modal = await this.modalCrtl.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'johan',
        pais: 'colombia',
      },
    });
    await modal.present();
    const resp = await modal.onDidDismiss();
    console.log(resp);
  }
}
