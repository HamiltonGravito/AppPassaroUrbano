import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number = undefined;

  //Cria um objeto que corresponde a um formulário e seus respectivos campos (FormControl)
  public formulario: FormGroup = new FormGroup({
    //FormControl - Parametros: 1 - Valor Inicial | 2 - Array de Validadores | 3 - Validadores Assicronos
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    if(this.formulario.status === "INVALID") {

      if (!this.formulario.get('endereco').valid) {
        this.formulario.get('endereco').markAsTouched();
        this.focar('idEndereco');
      } else if (!this.formulario.get('numero').valid) {
        this.formulario.get('numero').markAsTouched();
        this.focar('idNumero');
      } else if (!this.formulario.get('numero').valid) {
        this.formulario.get('formaPagamento').markAsTouched();
        this.focar('idFormaPagamento');
      }
    } else {
      let pedido: Pedido = new Pedido (
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento);

      //Como o metodo retorna um observable precisa fazer um subscribe
      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
    }
  }

  public focar(campo: string): void {
    document.getElementById(campo).focus();
  }
}
