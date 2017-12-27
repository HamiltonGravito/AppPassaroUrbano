import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../ofertas.service'

import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'apu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  //Nesse caso já é criado automaticamente um atributo route que recebe os valores
  // da classe ActivatedRout, no momento de construção do componente ele recebe o objeto de rotas
  // que o Angular estiver usando 
  constructor(private route: ActivatedRoute, 
    private ofertasService: OfertasService) {}

    public oferta: Oferta;

  ngOnInit() {
    //Snaptshot (faz uma copia da rota)
    console.log("ID recuperado pela rota: ", this.route.snapshot.params['id']);
    
    //Subscribe (programação reativa - fica "escutando" alguma mudança na rota)
    //this.route.params.subscribe((parametro: any) => {
      //console.log(parametro.id);
    //});

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((resposta: Oferta) => {
      this.oferta = resposta;
    });
  }

}