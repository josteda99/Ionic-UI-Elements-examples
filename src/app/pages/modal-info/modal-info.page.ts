import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() nombre: string;
  @Input() pais: string;
  constructor(private modalCtlr: ModalController) {}

  ngOnInit() {}

  salirSinArgumentos() {
    this.modalCtlr.dismiss();
  }

  salirConArgumentos() {
    this.modalCtlr.dismiss({ nombre: 'Felipe', pais: 'españa' });
  }
}
