import { Component, OnInit } from '@angular/core';

interface City {
  name:string;
}


@Component({
  templateUrl: './ng-switch-ng-class-ng-style.component.html',
  styleUrls: ['./ng-switch-ng-class-ng-style.component.scss']
})
export class NgSwitchNgClassNgStyleComponent implements OnInit {

  // NgSwitch, NgClass ve NgStyle

  cities:City[] = [{
    name:'istanbul'
  }, { name:'ankara'}, {name:'izmir'}];

  // seçilen şehir değerini obje olarak local state tutar.
  // selected city değerine göre ekranda mesaj göstereceğiz
  selectedCity!:string; // undefined olarak şuan tanımlandık her hangi bir assignment yapılmadı

  // selected:City | undefined;

  active:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.selectedCity = event?.target?.value;
    console.log('selectedCity', this.selectedCity);
  }



}
