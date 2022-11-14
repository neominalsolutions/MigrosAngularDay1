import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyEventBindingComponent } from './PropertyEventBinding/PropertyEventBinding.component';
import { NgIfNgForComponent } from './NgForNgIf/ngIfNgFor.component';
import { NgSwitchNgClassNgStyleComponent } from './ng-switch-ng-class-ng-style/ng-switch-ng-class-ng-style.component';


@NgModule({
  declarations: [			
    AppComponent,
      PropertyEventBindingComponent,
      NgIfNgForComponent,
      NgSwitchNgClassNgStyleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
