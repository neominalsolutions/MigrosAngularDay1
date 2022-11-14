import { Component, OnInit } from '@angular/core';


// selector kısmı olmayan componenter page component olarak kullanılır.
// htmlden bir yerden referans alınamaz çağırılamaz
// normal default component de ise selector olmak zorundadır.
// normal component ui componentler page componentler içerisinde pageleri design etmek için kullandığımız componentlerdir.

@Component({
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
