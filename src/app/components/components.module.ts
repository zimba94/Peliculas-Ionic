import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowbackdropComponent } from './slideshowbackdrop/slideshowbackdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [SlideshowbackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalleComponent],
  exports: [SlideshowbackdropComponent, SlideshowPosterComponent, SlideshowParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
