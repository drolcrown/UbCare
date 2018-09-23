import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output()
  public classes;
  public _rota = 'inicio';

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}