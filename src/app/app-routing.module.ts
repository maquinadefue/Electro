import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [

  {path:'producto-form', component: ProductoFormComponent},
  {path:'producto-list', component: ProductoListComponent},
  {path:'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }