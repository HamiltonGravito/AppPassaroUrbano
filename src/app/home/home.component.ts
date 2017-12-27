import { Component, OnInit } from '@angular/core'

import { OfertasService } from '../ofertas.service'

import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'apu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //Configura o serviço de forma que ele fique disponível para esse component e seus "filhos"
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  //ofertasService recebe um objeto do tipo OfertasService que usa o serviço em questão
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
   //this.ofertas = this.ofertasService.getOfertas();
   //console.log(this.ofertas);

   //then() executa uma ação quando a promessa estiver resolvida
   
   //No caso essa promessa retorna um array de Ofertas, aqui a informação ainda esta sincrona
   //pois, a informação já esta pronta na classe ofertas.service.js (Obs.: Antes de comentar a classe)
   //Depois da API FAKE construída este método é assincrono
   this.ofertasService.getOfertasPromise().then( (ofertas: Oferta[]) => {
    //console.log("A função resolve() foi executada depois de três segundos");
    this.ofertas = ofertas;
   }
   //Caso a promisse retorne um reject
   //(param: any) => {console.log(param)}
   //O método .catch() também pode ser usado no lugar do reject, onde a principal diferença é que é enviado
   //no primeiro parametro do catch ao invés do segundo paramentro do then
  ).catch((param: any) => {console.log(param);
  
  });

}
}