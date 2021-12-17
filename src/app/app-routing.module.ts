import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurabComponent } from './ourab/ourab.component';

const routes: Routes = [
  {path:'ourab',component:OurabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
