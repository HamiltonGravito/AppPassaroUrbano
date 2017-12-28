import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'apu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  //Essa função recebe um evento do tipo event e não retorna nada,
  //Como foi criada uma variável que já recebe o valor do input, posso, ao imvés
  //de recuperar todo o elemento recuperar apenas o value do componente
  //public pesquisa(evento: Event): void {
  public pesquisa(termoDeBusca: string): void {
    //Precisamos recuperar o atributo target e seu valor e para isso usá-se 
    //HTMLInputElement que identifica que trata-se de um inputHTML
   //console.log((<HTMLInputElement>evento.target).value)
   console.log(termoDeBusca);
  }

}
