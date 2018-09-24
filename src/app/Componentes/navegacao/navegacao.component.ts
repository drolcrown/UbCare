import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {
  private _rota;
  private _titulo = "UberCare";
  private _estilo = {};

  @Input()
  public set rota(valor){
    this._rota = valor;
  }

  @Input()
  public set titulo(valor){
    if(valor){
      this._titulo = valor;
    }
  }

  constructor(public router: Router) { }

  ngOnInit() {
    if(!this._rota){
      console.log("enrtea")
      this._estilo = {
        marginLeft: '50%',
        marginRight: '50%',
      }
    }
  }

  private fecharPagina(){
    console.log(this._rota)
    this.router.navigate([this._rota]);
  }
}

