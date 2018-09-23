import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public _rota;

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
      this._rota = this.route.snapshot.paramMap.get('rota');
      console.log(this._rota)
  }
}
