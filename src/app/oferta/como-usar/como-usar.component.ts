import { Component, OnInit } from '@angular/core'

//Usado para pegar o objeto de rotas
import { ActivatedRoute } from '@angular/router'

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
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((resposta: any) => {
      this.comoUsar = resposta;
    } 
  )}

}
