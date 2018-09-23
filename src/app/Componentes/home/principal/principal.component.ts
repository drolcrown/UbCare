import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SituacaoClinica } from '../../../Especialidades/situacaoClinica';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public _rota;
  private sit = new  SituacaoClinica();
  private lista = [];
  private nome = "";
  private _especialidade = null;

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
      this._rota = this.route.snapshot.paramMap.get('rota');
      if(this._rota == 'assistencia'){
        this.lista = this.sit.situacaoClinica;
        this.nome = "Situação Clínica";
      }
      if(this._rota == 'prevencao'){
        this.lista = this.sit.areaDeAtuacao;
        this.nome = "Prevenção";
      }
      console.log(this._rota)
  }

  private selecionar(valor){
    this._especialidade = this.lista[valor];
  }
  
}
