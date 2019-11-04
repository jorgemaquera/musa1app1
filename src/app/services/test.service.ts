import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  txt = 'Hello there';

  getGreeting(){
    return this.txt;
  }
}
