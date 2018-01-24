import { Component, OnInit } from '@angular/core';

//Serviço - 1ºPasso: Inserir classe de Serviço
import { OrdemCompraService } from '../ordem-compra.service'

//Formar Pedido - 1ºPasso: Importar o modelo
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'apu-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  //Serviço - 2ºPasso: Prover o Serviço
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //Formar Pedido - 2º Passo: Instanciar um novo pedido
  public pedido: Pedido;

  public endereco: string = null;
  public numero: number = null;
  public complemento: string = null;
  public formaPagamento: string = null;

  public formEstado: string = "disabled";

  //Atributos de controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValida: boolean;

  //Atributos de controle de estado primitivo dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //Serviço - 3ºPasso: Injetar o serviço a partir do construtor
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra();
  }

  public atualizaEndereco(endereco: string) : void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    //validação do endereco
    if(this.endereco.length > 4 && this.endereco.includes("Rua") || this.endereco.includes("Avenida") || this.endereco.includes("Travessa") || this.endereco.includes("Praça") || this.endereco.includes("Alameda")){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaNumero(numero: number) : void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    //validação do numero - Is Not a Number, ou seja, false se for uma sequencia de numeros e verdadeiros se for string
    if(!isNaN(this.numero) && this.numero > 0){
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string) : void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    //validação complemento
    if(this.complemento.length > 0){
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    //validação formaPagamento
    if(this.formaPagamento !== ""){
      this.formaPagamentoValida = true;
    } else {
      this.formaPagamentoValida = false;
    }

    this.habilitaForm();
  }

  public habilitaForm(): void {
    if( this.enderecoValido === true &&
        this.numeroValido === true &&
        this.formaPagamentoValida === true
    ){
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido = new Pedido(
      this.endereco,
      this.numero,
      this.complemento,
      this.formaPagamento
    );
    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe();
  }

  public iniciarComponentes(): void {
    this.enderecoValido = false;
    this.enderecoEstadoPrimitivo = true;
    this.endereco = "";
    this.numeroValido = false;
    this.numeroEstadoPrimitivo = true;
    this.numero = null;
    this.complementoValido = false;
    this.complementoEstadoPrimitivo = true;
    this.complemento = "";
    this.formaPagamentoValida = false;
    this.formaPagamentoEstadoPrimitivo = true;
    this.formaPagamento = "";
    this.formEstado = 'disabled';
  }

}
