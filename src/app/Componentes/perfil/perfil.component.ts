import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  private _rotaAnterior = "home";
  private _perfilCss = {
    height: (window.screen.height - 240) + 'px'
  }

  constructor() { }

  ngOnInit() {
  }

}
