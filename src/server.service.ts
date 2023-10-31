import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { valoresPost } from './app/conecta-component/Model/respostaModel'
@Injectable({
  providedIn: 'root',
})
export class ServerService {

  constructor (private http: HttpClient){
  }

  //Observable é um atributo do rxjs
  public postDados (user: any): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url, user);
  }

  public getDados(): Observable<any>{
    const url= "https://reqres.in/api/users";
    return this.http.get<any>(url);
  }


}
