import { Component, OnInit } from '@angular/core';

//1º Passo: Importar as classes utilizaas pelos serviços (Modelo e Logica)
import { Oferta } from "../shared/oferta.model"
import { OfertasService } from "../ofertas.service"

@Component({
  selector: 'apu-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  //2º Passo: Informar quais serviços serão providos
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  //5º Passo: Criar uma variavel para servir o template (databiding)
  public ofertas: Oferta[];

  //3º Passo: Criar um atributo para referenciar o serviço (a classe)
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //4º Passo: Executar o método - Lembrando que o método retorna uma promise
    this.ofertasService.getOfertasPorCategoria('diversao')
    //Criar lógica para quando a promise estiver pronta
    .then((retorno: Oferta[]) => {
      this.ofertas = retorno;
    })
    //Caso a promise contiver erros
    .catch((retornoErro: any) => console.log("Erro: " + retornoErro));
  }

}
