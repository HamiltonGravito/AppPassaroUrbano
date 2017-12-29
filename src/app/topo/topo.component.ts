import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable';

import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'apu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

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
   
   this.ofertas = this.ofertasService.pesquisaOfertas(termoDeBusca);
   this.ofertas.subscribe(
     //Primeiro evento do stream
    (data: Oferta[]) => {console.log(data)},
    //Erro do subscribe
    (erro: any) => {console.log('Erro Status: ', erro.status)},
    //Indica o que deve ser feito ao concluir o stream
    () => {console.log("Fluxo completo")}
   );
  }

}
