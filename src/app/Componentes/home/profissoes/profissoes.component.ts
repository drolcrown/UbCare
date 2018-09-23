import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profissoes',
  templateUrl: './profissoes.component.html',
  styleUrls: ['./profissoes.component.css']
})
export class ProfissoesComponent implements OnInit {
  private _especialidade;

  @Input()
  public set especialidade(value){
    this._especialidade = value;
  }

  constructor() { }

  ngOnInit() {
    console.log(this._especialidade)
  }

}
