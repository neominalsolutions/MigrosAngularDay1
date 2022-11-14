import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // *ngIf ve *NgFor directive kullanımı

  // *ngFor ve *ngIf built-in directive ve angularda en çok kullanılan directive olarak karşımıza çıkar.

  users: any[] = [{
    username: 'ali.test',
  }, {
    username: 'mehmet.test'
  }, {
    username: 'hülya.test'
  }]

  users2:User[] = [
    {
      username:'cenk',
      email:'cenk@test.com',
      website:'http://cenk.test.com'
    },
    {
      username:'ahmet',
      email:'ahmet@test.com'
    }
  ]





  constructor() { }

  ngOnInit() {
  }

}
