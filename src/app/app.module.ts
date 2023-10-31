import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ConectaComponent } from './conecta-component/conecta-component.component';
import { ContatoComponent } from './contato/contato.component';
import { ImagemHomeComponentComponent } from './ImagemHomeComponent/ImagemHomeComponent.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    OfertasComponent,
    ConectaComponent,
    ContatoComponent,
    ImagemHomeComponentComponent,
    CarouselComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
