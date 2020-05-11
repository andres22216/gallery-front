import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient) { }

  obtenerTodosLosUsuarios() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>('/gallery-backend/api/usuario');
  }

  guardarUsuario(usuarioNuevo : Usuario){
    return this.httpClient.post('/gallery-backend/api/usuario', usuarioNuevo);
  }

}
