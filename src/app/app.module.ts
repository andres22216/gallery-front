import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './componentes/error/error.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';


import { ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarroDeCompraComponent } from './componentes/carro-de-compra/carro-de-compra.component';
import { ListaDeDeseosComponent } from './componentes/lista-de-deseos/lista-de-deseos.component';
import { ConfirmarOrdenComponent } from './componentes/confirmar-orden/confirmar-orden.component';
import { MensajeErrorExitoComponent } from './componentes/mensaje-error-exito/mensaje-error-exito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    ErrorComponent,
    ContactoComponent,
    CarroDeCompraComponent,
    ListaDeDeseosComponent,
    ConfirmarOrdenComponent,
    MensajeErrorExitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTreeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
