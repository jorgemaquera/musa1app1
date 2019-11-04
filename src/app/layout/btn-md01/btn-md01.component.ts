import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-md01',
  // templateUrl: './btn-md01.component.html',
  template:`
    <button class="btn btn-primary" routerLink="/conductores-y-buses">MD01</button>
  `,
  // styleUrls: ['./btn-md01.component.scss']
})
export class BtnMd01Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
