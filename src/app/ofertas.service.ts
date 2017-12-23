import { Oferta } from './shared/oferta.model'
import { setTimeout } from 'timers';

export class OfertasService {


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
        //O then() também pode ser usado aqui e apartir dai fazer alguma tratativa e depois enviado para quem faz a solicitação da promisse,
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
        
    }
}