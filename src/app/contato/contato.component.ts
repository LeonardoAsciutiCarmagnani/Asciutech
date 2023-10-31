import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service'
import { valores, valoresPost } from '../conecta-component/Model/respostaModel';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent{
  constructor(public servico:ServerService){
  }
   val: valores[]=[];
   client: valoresPost={} as valoresPost;
   clientResult: valoresPost={} as valoresPost;

   nome: string = "";
   email: string = "";
   celular: string = "";



   chamadaBack() {
     this.val = [];
     this.clientResult={} as valoresPost;

     //servico chama o ServerService e assino o serviço e espera
     this.servico.getDados().subscribe(
       (resposta: any)=>
       {
         console.log(resposta.data);
         this.val = (resposta.data);

       }
     )
   }



   chamadaBackPost(){
     this.val= [];
     this.clientResult={} as valoresPost;
     this.client= {name:this.nome, job:this.email, createdAt:this.celular};
     this.servico.postDados(this.client).subscribe(
       (resp:any)=>
       {
         this.clientResult = (resp);
         console.log(this.clientResult);

       }
     )
   }
   onSubmit(){
    this.celular = "";
    this.nome = "";
    this.email = "";
   }
  }


