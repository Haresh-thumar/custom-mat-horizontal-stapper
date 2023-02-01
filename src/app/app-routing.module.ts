import { TableUiComponent } from './table-ui/table-ui.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomMatStapperComponent } from './custom-mat-stapper/custom-mat-stapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'table-ui', pathMatch: 'full' },
  { path: 'matStapper', component: CustomMatStapperComponent },
  { path: 'table-ui', component: TableUiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
