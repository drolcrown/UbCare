import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prevencao',
  templateUrl: './prevencao.component.html',
  styleUrls: ['./prevencao.component.css']
})
export class PrevencaoComponent implements OnInit {
  private _rota;

  @Input()
  public set rota(value){
    this._rota = value;  
  }

  constructor() { }

  ngOnInit() {
  }
}
