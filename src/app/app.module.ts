import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'

//Importa o modulo do HTTP para requisições REST
import { HttpModule } from '@angular/http'

//Importa o modulo de rotas
import { RouterModule } from '@angular/router'

//Importa o modulo para trabalhar com formularios de forma reativa
import { ReactiveFormsModule } from '@angular/forms'

//Importa a constante ROUTES com as rotas definidas
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { TopoComponent } from './topo/topo.component'
import { HomeComponent } from './home/home.component'
import { RodapeComponent } from './rodape/rodape.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { Router } from '@angular/router'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'

//PIPE
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

//
import { CarrinhoService } from './carrinho.service'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //A partir do momento que temos a abordagem do uso de ReactiveForms no contexto do modulo,
    //se existir um formulário dentro do template de algum modulo o angula tentará interpretar isso. 
    ReactiveFormsModule,
    //forRoot - Mapeamento GLOBAL
    //forChild - Rotas Internas de Componentes
    RouterModule.forRoot(ROUTES)
  ],
  //Serviços definidos nesse nível são uados por toda a aplicação
  providers: [CarrinhoService, { provide: LOCALE_ID, useValue: 'en-US'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
