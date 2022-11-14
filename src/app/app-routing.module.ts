import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfNgForComponent } from './NgForNgIf/ngIfNgFor.component';
import { PropertyEventBindingComponent } from './PropertyEventBinding/PropertyEventBinding.component';

const routes: Routes = [
  {
    path:'property-event-binding',
    component:PropertyEventBindingComponent
  },
  {
    path:'ngif-ngfor',
    component:NgIfNgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Anamodule root module tanımlanan ayarlar için forRoot()
// forChild() ana module dışındaki sub modullerde kullanılır.
