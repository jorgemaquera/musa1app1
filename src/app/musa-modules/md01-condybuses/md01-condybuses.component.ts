import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services';

@Component({
  selector: 'app-md01-condybuses',
  templateUrl: './md01-condybuses.component.html',
  styleUrls: ['./md01-condybuses.component.scss']
})
export class Md01CondybusesComponent implements OnInit {

  constructor(private testService : TestService) { }
  txt: string;

  ngOnInit() {
    this.txt = this.testService.getGreeting();
  }

  

}
