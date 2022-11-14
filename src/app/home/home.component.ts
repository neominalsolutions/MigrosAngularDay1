import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // default da angularda tanımlanan değişkeler public olarak kendi htmlden çağırıabilir.
  private title:string = 'home';
  content:string = 'Home Page';
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  
  }

  onClick(){
    alert('Clicked');
  }

  onCountUp(){
    this.counter++;
    console.log('count-up', this.counter);
  }

  onCountDown(){
    this.counter--;
    console.log('count-down', this.counter);
  }

}
