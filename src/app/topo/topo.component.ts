import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import '../util/rxjs-extensions'


@Component({
  selector: 'apu-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  //Alterado para utilizar com PIPE ASYNC - Diferente do ngFor utilizando o async é possível utilizar
  //o retorno do subscrible direto.
  //Esse atributo foi criado, pois, o *ngFor não consegue trabalhar sobre observable
  //public ofertasDatabiding: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    //Retorna Oferta[]
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000) //Executa o switchMap após um segundo, ou seja, diminui bastante o acesso a api, que fará uma busca mais específica
    .distinctUntilChanged() //Evita que seja feito a execução do método contido no switchMap, caso o parametro encaminhado para o subject seja o mesmo do anterior
    .switchMap((termo: string) => {
      //Toda instrução feita nesta parte acontece antes que se faça uma nova requisição
      //trim() elimina espaços em brancos da esquerda e da direita e se o termo for vazio realiza a lógica
      if(termo.trim() === ""){
        //Nesse caso não irá montar a pesquisa, mas de toda forma devo retornar um array<Oferta> vazio
        return Observable.of<Oferta[]>([]);
      }
      //Retorna um observable cujo o conteúdo é um array de ofertas
      return this.ofertasService.pesquisaOfertas(termo);
      
    })
    //Caso algum método dentro do swtichMap falhe posso tratar esse erro
    .catch((erro: any) => {
      console.log(erro);
      //Porém mesmo tendo erro entrego para quem fez o subscrible um array<Oferta> que é o esperado, no entanto a aplicação não "quebra"
      return Observable.of<Oferta[]>([]);
    });


    //Indica o que fazer com os eventos produzidos pelo subject, lembrando que
    //a partir desse momento inicia-se um "listen" que fica escutando as alterações
    //do observable
    
    //Alterado para utilizar com PIPE ASYNC
    /*this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertasDatabiding = ofertas;
    });
    */
  }

  public pesquisa(termoDeBusca: string) : void {
    //Sempre que existir um novo termo de busca este é enviado para o Subject (Atuando como Observador)
    this.subjectPesquisa.next(termoDeBusca);
  }

  //Essa função recebe um evento do tipo event e não retorna nada,
  //Como foi criada uma variável que já recebe o valor do input, posso, ao imvés
  //de recuperar todo o elemento recuperar apenas o value do componente
  //public pesquisa(evento: Event): void {
  
  /*public pesquisa(termoDeBusca: string): void {
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
  }*/

  //Esse metodo no momento em que o observable receber um valor vazio
  //cai para o if e retorna um array de observable vazio
  public limpaPesquisa(): void {
    this.subjectPesquisa.next("");
  }

}
