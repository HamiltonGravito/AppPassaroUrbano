import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  //Cria um objeto que corresponde a um formulário e seus respectivos campos (FormControl)
  public formulario: FormGroup = new FormGroup({
    //FormControl - Parametros: 1 - Valor Inicial | 2 - Array de Validadores | 3 - Validadores Assicronos
    'endereco' : new FormControl(null, ),
    'numero' : new FormControl(null, ),
    'complemento' : new FormControl(null, ),
    'formaPagamento' : new FormControl(null, )
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
  }
}
