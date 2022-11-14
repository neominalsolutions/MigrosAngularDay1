import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { Test2Component } from './test2/test2.component';
import { Test3Page } from './test3/test3.page';
import { Rc1Component } from './rc1/rc1.component';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      AboutComponent,
      PrivacyComponent,
      ContactComponent,
      Test2Component,
      Test3Page,
      Rc1Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
