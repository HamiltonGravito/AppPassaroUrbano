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
import { Router } from '@angular/router/src/router';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent
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
