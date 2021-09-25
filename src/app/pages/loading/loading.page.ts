import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {}

  mostrarLoader() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Holiwi',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
