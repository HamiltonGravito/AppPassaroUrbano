//Quando um serviço recebe um serviço externo precisa-se decorar a classe de serviço
import { Injectable } from '@angular/core'
import { Http,  RequestOptions, Headers } from '@angular/http'

import { Pedido } from '../app/shared/pedido.model'
import { Observable } from 'rxjs/Observable'

import { URL_API } from './app.api'
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http){}

    //Retorna um Observable... Obs.: Os métodos HTTP retornam um Observable
    public efetivarCompra(pedido: Pedido): Observable<any>{

        let headers: Headers = new Headers();

        //Define as opções da requisição, neste caso o cabeçalho.
        //O Content-type identifica para API qual o conteúdo do request e neste caso é um JSON
        headers.append('Content-type', 'application/json');

        //Extrair apenas o body (conteúdo) do Observable
        //Parâmetros do Método POST... URL (Local para onde se está fazendo o request do http)
        //BODY (Conteúdo da requisição). Obs.: Suporta apenas String, então tem que transformar o objeto literal em uma string
        //Headers (Opções da requisição)
        return this.http.post(
         `${URL_API}/pedidos`,
         JSON.stringify(pedido),
         //Espera receber um objeto literal que tenha as definições dos parametros da requisição
         new RequestOptions({ headers: headers })
        )
        //Transforma o 'Response' do Observable no conteúdo que enviaemos para API
        .map((resposta: Response) => console.log(resposta.json()));
    }
}