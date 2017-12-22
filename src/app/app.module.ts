import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  //Serviços definidos nesse nível são uados por toda a aplicação
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
