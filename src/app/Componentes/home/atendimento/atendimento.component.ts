import { Component, OnInit, Input } from '@angular/core';
import { SituacaoClinica } from '../../../Especialidades/situacaoClinica';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  private _rota;

  @Input()
  public set rota(value){
    this._rota = value;  
  }

  constructor() { }

  ngOnInit() {

  }

}
