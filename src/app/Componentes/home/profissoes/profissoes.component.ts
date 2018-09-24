import { Component, OnInit, Input } from '@angular/core';
import { Especialidades } from '../../../Modelos/especialidade';

@Component({
  selector: 'app-profissoes',
  templateUrl: './profissoes.component.html',
  styleUrls: ['./profissoes.component.css']
})
export class ProfissoesComponent implements OnInit {
  private _especialidade;  

  @Input()
  public set especialidade(value){
    if(value){
      this._especialidade = Object.values(value);
    }
    else{
      this._especialidade = [];
    }
  }

  constructor() { }

  ngOnInit() {
    // console.log(this._especialidade = Object.keys(new Especialidades().Enfermeiro));

  }

}
