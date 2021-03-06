import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  
  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[]= [];
  existe = false;

  oculto = 150;

  slideOptsActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(private movieService: MoviesService, 
              private modalController: ModalController,
              private dataLocal: DataLocalService) { }

  async ngOnInit() {
    
    this.existe = await this.dataLocal.existePelicula(this.id);

    this.movieService.getPeliculaDetalle(this.id)
                      .subscribe(resp => {
                        console.log(resp);
                        this.pelicula = resp;
                      });

    this.movieService.getActoresPelicula(this.id)
                      .subscribe(resp => {
                        this.actores = resp.cast;
                      });

  }

  regresar(){
    this.modalController.dismiss();
  }

  async favorito(){
    this.existe = await this.dataLocal.guardarPelicula(this.pelicula);
  }
}
