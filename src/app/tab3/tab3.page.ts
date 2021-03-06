import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[]=[];
  generos: Genre[] = [];
  favoritosGenero: any[] = [];


  constructor(private dataLocal: DataLocalService, private movieService: MoviesService) {}

  async ionViewWillEnter(){
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    this.pelisPorGenero(this.generos, this.peliculas);
  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritosGenero = [];
    generos.forEach(genero => {
      this.favoritosGenero.push({
        genero: genero.name, 
        pelis: peliculas.filter(peli => {
          return peli.genres.find(genre => genre.id === genero.id);
        })
      });
    });
  }
}
