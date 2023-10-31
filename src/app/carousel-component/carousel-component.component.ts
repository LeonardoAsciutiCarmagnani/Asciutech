import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent {
  imagens = [
    { url: '../../assets/fotos/iphone_xr.jpg'},
    { url: '../../assets/fotos/Motorola-Moto-G80.jpg'},
    { url: '../../assets/fotos/iphone_xr.jpg'}
  ];
}
