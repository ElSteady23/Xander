import { Component } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
  Swiper,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: {draggable: true},
  };

  //Aquí estabamos creando un carrusel el cual contenía imagenes y esas imagenes nos iban a redireccionar a google, youtube, facebook, instagram. El cual nunca se utilizo
  slides = [
    {
      link: 'https://www.google.com',
      image: 'assets/imagenes/nissan.jpg',
    },
    {
      link: 'https://www.youtube.com',
      image: 'assets/imagenes/toyota.jpg',
    },
    {
      link: 'https://www.facebook.com',
      image: 'assets/imagenes/subaru.jpg',
    },
    {
      link: 'https://www.instagram.com',
      image: 'assets/imagenes/mazda.png',
    },
  ]
  constructor() {}
}
