import { Component, OnInit } from '@angular/core';

export class MyButton {
  constructor(name:string) {  }
}

export interface IConfig {
  enabled:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Component implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title:string = 'Day1';

  click():void{
    const btn = new MyButton('butn1');
    const config:IConfig = {enabled :true};
  }
}
