import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public _rotaAnterior = "login";

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}