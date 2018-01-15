import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

//Importa o modulo do HTTP para requisições REST
import { HttpModule } from '@angular/http'

//Importa o modulo de rotas
import { RouterModule } from '@angular/router'
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

//PIPE
import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

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
    DescricaoReduzida
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //forRoot - Mapeamento GLOBAL
    //forChild - Rotas Internas de Componentes
    RouterModule.forRoot(ROUTES)
  ],
  //Serviços definidos nesse nível são uados por toda a aplicação
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
