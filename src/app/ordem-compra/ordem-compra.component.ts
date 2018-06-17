import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CarrinhoService } from '../carrinho.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number = undefined;
  public itensCarrinho: ItemCarrinho[] = [];

  //Cria um objeto que corresponde a um formulário e seus respectivos campos (FormControl)
  public formulario: FormGroup = new FormGroup({
    //FormControl - Parametros: 1 - Valor Inicial | 2 - Array de Validadores | 3 - Validadores Assicronos
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });

  //Observação: Uma vez que um componente não esteja sendo definido no provider do componente atual, cabe ao angular
  //procurar este componente no app.module.ts para assim saber que o componente é global (singleton).
  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho);
  }

  public confirmarCompra(): void {
    if(this.formulario.status === "INVALID") {

      if (!this.formulario.get('endereco').valid) {
        this.formulario.get('endereco').markAsTouched();
        this.focar('idEndereco');
      } else if (!this.formulario.get('numero').valid) {
        this.formulario.get('numero').markAsTouched();
        this.focar('idNumero');
      } else if (!this.formulario.get('formaPagamento').valid) {
        this.formulario.get('formaPagamento').markAsTouched();
        this.focar('idFormaPagamento');
      }
    } else {

      if(this.carrinhoService.exibirItens().length === 0){
        alert("Você não selecionou nenhum item!")
      }else{

      let pedido: Pedido = new Pedido (
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens());

        console.log(pedido);
      //Como o metodo retorna um observable precisa fazer um subscribe
      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
        this.carrinhoService.limparCarrinho();
        });
      }
    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }

  public focar(campo: string): void {
    document.getElementById(campo).focus();
  }
}
