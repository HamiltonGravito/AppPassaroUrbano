import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = null;
  public numero: number = null;
  public complemento: string = null;
  public formaPagamento: string = null;

  //Atributos de controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValida: boolean;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string) : void {
    this.endereco = endereco;
    //validação do endereco
    if(this.endereco.length > 4 && this.endereco.includes("Rua") || this.endereco.includes("Avenida") || this.endereco.includes("Travessa") || this.endereco.includes("Praça")){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: number) : void {
    this.numero = numero;
    //validação do numero - Is Not a Number, ou seja, false se for uma sequencia de numeros e verdadeiros se for string
    if(isNaN(this.numero)){
      this.numeroValido = false;
    } else {
      this.numeroValido = true;
    }
  }

  public atualizaComplemento(complemento: string) : void {
    this.complemento = complemento;
    //validação complemento
    if(this.complemento.length > 0){
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento;
    //validação formaPagamento
    if(this.formaPagamento !== ""){
      this.formaPagamentoValida = true;
    } else {
      this.formaPagamentoValida = false;
    }
  }

}
