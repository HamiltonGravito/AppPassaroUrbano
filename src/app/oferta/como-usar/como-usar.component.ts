import { Component, OnInit } from '@angular/core'

//Usado para pegar o objeto de rotas
import { ActivatedRoute, Params } from '@angular/router'

//Importar a classe do serviço
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'apu-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  //Prover o Serviço
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = "";

  constructor(private route: ActivatedRoute,
    //Criar atributo para relacionar a classe de serviço
    private ofertasService: OfertasService){ }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(parametros.id)
    .then((resposta: any) => {
      this.comoUsar = resposta;
    })
    });

    
  }

}
