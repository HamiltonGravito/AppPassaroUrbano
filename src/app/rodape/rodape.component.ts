import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apu-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public dataAtual = new Date();

  constructor() { }

  ngOnInit() {
  }

}
