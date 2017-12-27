import { Component, OnInit } from '@angular/core';

//1º Passo: Importar as classes do serviço
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'


@Component({
  selector: 'apu-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  //2º Passo: Informar quais serviços serão providos
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  //3º Passo: Indicar qual atributo irá referenciar o serviço
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //4º Passo: Executar o método - Nesse momento recebe-se uma promise
    this.ofertasService.getOfertasPorCategoria('restaurante')
    //Indico o que a promise ira fazer quando estiver resolvida, nesse caso
    //a promise retorna um  array de ofertas
    .then((ofertasModel: Oferta[]) => 
      this.ofertas = ofertasModel)
    .catch((erro: any) => {
      console.log(`Erro ao carregar Ofertas por Categoria!\n Erro: ${erro}`);
    });
  }

}
