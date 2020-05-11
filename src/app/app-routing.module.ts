import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarroDeCompraComponent } from './componentes/carro-de-compra/carro-de-compra.component';
import { ListaDeDeseosComponent } from './componentes/lista-de-deseos/lista-de-deseos.component';
import { ConfirmarOrdenComponent } from './componentes/confirmar-orden/confirmar-orden.component';


const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'app-registro', component: RegistroComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-contacto', component: ContactoComponent },
  { path: 'app-carro-de-compra', component : CarroDeCompraComponent},
  { path: 'app-lista-de-deseos', component : ListaDeDeseosComponent},
  { path: 'app-confirmar-orden', component : ConfirmarOrdenComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
