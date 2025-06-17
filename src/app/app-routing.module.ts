import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard'; // ✅ Importación del guardia
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'login', component: LoginComponent },

  // ✅ Rutas protegidas por AuthGuard
  { path: 'producto-form', component: ProductoFormComponent, canActivate: [AuthGuard] },
  { path: 'producto-list', component: ProductoListComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
