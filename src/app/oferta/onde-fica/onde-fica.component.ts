import { Component, OnInit } from '@angular/core';

//Usado para pegar o objeto de rotas
import { ActivatedRoute } from '@angular/router'

//1ºPasso: Importar Servico
import { OfertasService } from '../../ofertas.service'

@Component({
  selector: 'apu-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  //2ºPasso: Prover o Serviço
  providers:  [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  //5ºPasso: Atributo para databiding
  public ondeFica: string = "";

  //3ºPasso: Vincular um atributo a classe de serviço
  constructor(private route: ActivatedRoute, 
    private ofertasService: OfertasService) { }

  ngOnInit() {
    //4ºPasso: Utilizar o método que retorna o serviço desejado
    //Lembrando que esse método recebe um id, que é recuperado através da rota pelo
    //parâmetro de mesmo nome "id", sendo este da rota pai (parent)
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((retornoPromise: string) => {
      this.ondeFica = retornoPromise;
    });
  }

}
