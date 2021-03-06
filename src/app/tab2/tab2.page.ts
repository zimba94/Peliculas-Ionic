import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = "";
  ideas: string [] = ['Spiderman', 'Avengers', 'Godzilla', 'Divergente'];
  peliculas: Pelicula[]=[];
  buscando = false;
  
  constructor(private moviesServices: MoviesService, private modalController: ModalController) {}

  buscarPelicula(e){
    this.buscando = true;
    const valor: string = e.detail.value;
    
    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.moviesServices.getBuscarPeliculas(valor)
                        .subscribe((resp)=>{
                          console.log(resp);
                          this.peliculas = resp['results'];
                          this.buscando = false;
                        })      
  }

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
