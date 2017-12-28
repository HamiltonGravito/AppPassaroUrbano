//Importa os modulos para que seja injetado o serviço REST
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

import { Oferta } from './shared/oferta.model'

import { URL_API } from './app.api'

//Usado apenas para simulação de transferência assíncrona
//import { setTimeout } from 'timers';

//Importe para converter um observable em promise
import 'rxjs/add/operator/toPromise'

//Decora a classe para que se possa fazer requisições a API
@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    /* Alterdo para que as requisições passem a ser assincronas, então,
        a classe irá fazer requisições a API FAKE  
    public ofertas: Oferta[] = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public getOfertasPromisse(): Promise<Oferta[]>{
        //Promisse - Nativo do JavaScript e espera uma função de callback, que é resolve ou reject, ou seja chama uma função
        //caso a promisse tiver sucesso ou outra caso haja falha
        return new Promise((resolve, reject) => {
            let deuCerto: boolean = true;
            if(deuCerto){
                //() => retorna resolve em uma função que será executada em 3 segundos;
                setTimeout( () => resolve(this.ofertas), 3000);
            }else {
            reject({codigo_erro: 404, mensagem_erro: "Servidor não encontrado"});
            }
        //O then() também pode ser usado aqui e apartir dai fazer alguma tratativa e depois enviar para quem faz a solicitação da promisse,
        //lembrando que pode existir varios then() para varias possiveis tratativas
        }).then(( ofertas: Oferta[]) => {
            console.log("Passou pela primeira trataiva");
            return ofertas;
        }).then((ofertas: Oferta[]) => {
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {resolve2(ofertas)}, 3000);
        });
    }).then((ofertas: Oferta[]) => {
        console.log("Executado após a primeira promisse, depois do retorno da mesma");
        return ofertas;
        
    } */

    public getOfertasPromise(): Promise<Oferta[]>{
        //Efetuar uma requisição http, composto pela variavel do tipo HTTP
        //O método ou verbo neste caso GET e o caminho que a API responde, até
        //esta parte é retornado um observable
       return this.http.get(`${URL_API}?destaque=true`)
        //Converte o observable para uma promise
        .toPromise().
        //Recupera a resposta da promessa gerada e o json() faz com que o objeto retornado seja um objeto literal
        then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Array<Oferta>>{
        return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertaPorId(id: number) : Promise<Oferta>{
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
           return resposta.json()[0];
        });
    }
}