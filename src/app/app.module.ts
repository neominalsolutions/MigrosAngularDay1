import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyEventBindingComponent } from './PropertyEventBinding/PropertyEventBinding.component';
import { NgIfNgForComponent } from './NgForNgIf/ngIfNgFor.component';


@NgModule({
  declarations: [			
    AppComponent,
      PropertyEventBindingComponent,
      NgIfNgForComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
