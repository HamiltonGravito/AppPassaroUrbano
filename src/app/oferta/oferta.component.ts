import { Component, OnInit, OnDestroy } from '@angular/core'

import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../ofertas.service'

import { Oferta } from '../shared/oferta.model'

/*
//Import do observable para programação reativa
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
*/

@Component({
  selector: 'apu-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit /*, OnDestroy*/ {

  /*
  //UnSubscribe - Para finalizar o processo de Observer através do
  //método onDestroy do ciclo de vida do component
  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  */

  //Nesse caso já é criado automaticamente um atributo route que recebe os valores
  // da classe ActivatedRout, no momento de construção do componente ele recebe o objeto de rotas
  // que o Angular estiver usando 
  constructor(private route: ActivatedRoute, 
    private ofertasService: OfertasService) {}

    public oferta: Oferta;

  ngOnInit() {
    //Snaptshot (faz uma copia da rota)
    //console.log("ID recuperado pela rota: ", this.route.snapshot.params['id']);
    
    //Subscribe (programação reativa - fica "escutando" alguma mudança na rota)
    //this.route.params.subscribe((parametro: any) => {
      //console.log(parametro.id);
    //});

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((resposta: Oferta) => {
      this.oferta = resposta;
    });

    /* Observable
    this.route.params.subscribe(
      (parametro: any) =>{console.log(parametro);},
      (erro: any) => {console.log(erro);},
      () => {console.log("Concluído!")}
    );
    */

    /*
    //Cria um observavel e assiste a ação deste
    let tempo = Observable.interval(2000);
    //UnSubscrible
    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });
    

    //Observavél
    let meuObservableTeste = Observable.create(
      //Fonte de dados produzida de forma assíncrona
      (observer: Observer<any>) => {
        //Dispara um evento na stream do observável
        observer.next('primeiro evento da stream'),
        observer.next('segundo evento da stream'),
        //observer.error('Ocorreu um erro na stream de eventos');
        //Obs.: Nesse ponto onde existe um erro a execução é finalizada
        observer.complete()
      } 
  );

    //Observador
    this.meuObservableTesteSubscription =  meuObservableTeste.subscribe(
      //Instrução - recebe a ação que indica como o observável vai lhe dar com os dados disparados
      //a partir dos eventos da stream.
      //O meu observador recebe o resultado do meu observável e exibe no console
      (resultado: any) => console.log(resultado),
      //Esse proximo parâmetro refere-se ao evento de erro
      (resultado: any) => console.log(resultado),
      //Evento de complete, ou seja, todo o observable foi executado e depois completado
      () => console.log('a stream de eventos foi finalizada')
    )
  }

  //Nesse momento quando o component "perder o foco" o observable será destruído, através do método unsubscribe()
  ngOnDestroy() {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe()
  }
*/
}
}