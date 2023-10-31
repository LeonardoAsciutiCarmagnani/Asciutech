import { Component } from '@angular/core';
import { ServerService } from '../../server.service'
import { valores, valoresPost } from './Model/respostaModel';
@Component({
  selector: 'app-conecta',
  templateUrl: './conecta-component.component.html',
  styleUrls: ['./conecta-component.component.css']
})
export class ConectaComponent {
  constructor(public servico:ServerService){
  }
  val: valores[]=[];
  client: valoresPost={} as valoresPost;
  clientResult: valoresPost={} as valoresPost;

  nome: string = "";
  email: string = "";


  chamadaBack() {
    this.val = [];
    this.clientResult={} as valoresPost;

    //servico chama o ServerService e assino o serviço e espera
    this.servico.getDados().subscribe(
      (resposta: any)=>
      {
        console.log(resposta.data);
        this.val = (resposta.data);
        console.log(this.val);
      }
    )
  }

  chamadaBackPost(){
    this.val= [];
    this.clientResult={} as valoresPost;
    this.client= {name:this.nome, job:this.email};
    this.servico.postDados(this.client).subscribe(
      (resp:any)=>
      {
        this.clientResult = (resp);
        console.log(this.clientResult);

      }
    )
  }
  }
