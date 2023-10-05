import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{

  celulares: any = [];
  marca: any = [];
  precos: any = [];
  preco: any = [];
  celular: string = "";
  select1: any = {};
  select2: any = "Selecione";

  display: any = "desaparece";

  telefones =[
    {
      id:0,
      name: 'Selecione',
      celulares: ['Selecione'],

    },
    {
      id:1,
      name: 'Samsung',
      celulares: ['S22', 'S23', 'S23 ULTRA','ZFLIP'],
      precos:['R$ 2999,99','R$ 3999,99','R$ 4999,99','R$ 5999,99','R$ 2499,99']
    },
    {
      id:2,
      name: 'Apple',
      celulares: ['X', 'XR', '11', '12','13'],
      precos: ['R$ 2499,99','R$ 2999,99','R$ 3999,99','R$ 4999,99','R$ 5499,99']
    },
    {
      id:3,
      name: 'Motorola',
      celulares: ['G10', 'G20', 'G30','G40', 'G50'],
      precos: ['R$ 999,99','R$ 1299,99','R$ 1699,99','R$ 1999,99','R$ 2499,99']
    }
  ];

  constructor(){}
  ngOnInit(){
    this.select1 = 0;
    this.celulares = this.telefones.filter((x) => x.id == this.select1)[0].celulares
    this.precos = this.telefones.find((x) => x.id == this.select1)?.precos;

  }
  onChange(){
    this.select2 = '';
    this.celulares = this.telefones.filter((x) => x.id == this.select1)[0].celulares;
    this.precos = this.telefones.find((x) => x.id == this.select1)?.precos; // Obtenha a lista de preços correspondente à marca selecionada

}

  

  clickButton(){
    this.marca = this.telefones.find((x) => x.id == this.select1)?.name
    this.celular = this.select2;

    //Select de preços dos celulares
    const selectedMarca = this.telefones.find((x) => x.id == this.select1);
    const selectedCelular = this.select2;

    if (selectedMarca && selectedCelular) {
      const index = selectedMarca.celulares.indexOf(selectedCelular);
      if (index >= 0 && index < this.precos.length) {
        this.preco = this.precos[index];
      } else {
        this.preco = 0;
      }
    } else {
      this.preco = 0;
    }

  }


}

