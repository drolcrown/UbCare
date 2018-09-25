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
  private _ativarMenu;
  private _estilo = {};

  @Input()
  public set rota(valor){
    this._rota = valor;
  }

  @Input()
  public set titulo(valor){
    if(valor){
      this._titulo = valor;
      this._ativarMenu = true;
    }
  }

  @Input()
  public set ativarMenu(valor){
      this._ativarMenu = valor;
  }

  constructor(public router: Router) { }

  ngOnInit() {
    if(!this._ativarMenu){
      this._estilo = {
        marginLeft: '45%',
      }
    }
  }

  private fecharPagina(){
    console.log(this._rota)
    this.router.navigate([this._rota]);
  }
}

