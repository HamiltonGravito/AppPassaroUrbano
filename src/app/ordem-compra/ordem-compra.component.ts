import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'apu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  //Recupera da view a variavél de referencia passado pela função decoradora
  //@ViewChild('variável de referencia do template')
  @ViewChild('formulario') public formulario: NgForm;

  public idPedidoCompra: number;

  public pedido: Pedido;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {

    this.pedido = new Pedido(this.formulario.value.endereco,
       this.formulario.value.numero, 
       this.formulario.value.complemento, 
       this.formulario.value.formaPagamento);

    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido;
      console.log("Pedido cadastrado com sucesso! ID do Pedido: " + idPedido);
    });
  }
}
