import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from '../app/dropdown/dropdown.component'
import { OfertasComponent } from './ofertas/ofertas.component';
import { ContatoComponent } from './contato/contato.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component'
import {ImagemHomeComponentComponent} from './ImagemHomeComponent/ImagemHomeComponent.component'

const routes: Routes = [
  {path: 'home', component:ImagemHomeComponentComponent},
  {path: 'dropdown', component:DropdownComponent},
  {path: 'ofertas', component:OfertasComponent},
  {path: 'contato', component:ContatoComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
