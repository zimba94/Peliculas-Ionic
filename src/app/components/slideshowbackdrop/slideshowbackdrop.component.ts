import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshowbackdrop',
  templateUrl: './slideshowbackdrop.component.html',
  styleUrls: ['./slideshowbackdrop.component.scss'],
})
export class SlideshowbackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string){

    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
