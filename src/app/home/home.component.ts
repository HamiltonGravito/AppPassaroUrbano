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
   this.ofertas = this.ofertasService.getOfertas();
   console.log(this.ofertas);
  }

}
