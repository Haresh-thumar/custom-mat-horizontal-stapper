import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomMatStapperComponent } from './custom-mat-stapper/custom-mat-stapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'matStapper', pathMatch: 'full' },
  { path: 'matStapper', component: CustomMatStapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
