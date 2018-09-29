import { Component, OnInit } from '@angular/core';
import { ListaDeModelos } from '../../Modelos/ListaDeModelos';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private lista = new ListaDeModelos().getModelo;
  private _profissionais = [];

  constructor(private router: Router, private db: CrudService) { }

  ngOnInit() {
      console.log(this._profissionais)
  }

  private selecionar(valor: String) {
    if (valor) {
      valor = valor.toLowerCase();
      this.router.navigate(['/admin/cadastro', valor]);
    }
  }

}
