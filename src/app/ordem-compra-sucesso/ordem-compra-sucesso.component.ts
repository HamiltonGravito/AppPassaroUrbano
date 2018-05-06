import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apu-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  //Indica que este componente espera um parâmetro de seu componente pai
  @Input() public idPedidoCompra: number;

  constructor() { }

  ngOnInit() {
  }

}
