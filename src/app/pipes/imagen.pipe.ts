import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = "w500"): string {
    if (!img) {
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}${img}`

    // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zeD4PabP6099gpE0STWJrJrCBCs.jpg
    return imgUrl;
  }

}
