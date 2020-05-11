import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/servicio-usuario/usuario.service';
import { Usuario } from 'src/app/modelo/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public listaUsuarios : Usuario[];
  readonly VALOR_MINIMO_CONTRASENA = 6;
  readonly VALOR_MAXIMO_CONTRASENA = 20;
  public resultadoCreacion = false;
  //public usuario : Usuario;
  public usuarioACrear : Usuario;
  public errorEnTerminos = true;
  public hide = true;

  registroForm : FormGroup;
  submitted = false;

  constructor(private usuarioService : UsuarioService, private formBuilder: FormBuilder) { 
    //this.usuario = new Usuario();
  }

  ngOnInit() {

    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      apodo: [],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(this.VALOR_MINIMO_CONTRASENA), Validators.maxLength(this.VALOR_MAXIMO_CONTRASENA)]],
      terminos: [false, Validators.requiredTrue]
    });

  } 

  // convenience getter for easy access to form fields
  get f() { return this.registroForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.errorEnTerminos = this.f.terminos.value;

    // stop here if form is invalid
    if (this.registroForm.invalid) {
        return;
    }

    this.usuarioACrear = new Usuario();
    this.usuarioACrear.nombres = this.f.nombre.value;
    this.usuarioACrear.apellidos = this.f.apellidos.value;
    this.usuarioACrear.apodo = this.f.apodo.value;
    this.usuarioACrear.correoElectronico = this.f.email.value;
    this.usuarioACrear.contrasena = this.f.contrasena.value;
    this.usuarioACrear.fechaCreacion = new Date();

    this.guardarUsuario();

    // display form values on success
    //alert('FORMULARIO CORRECTO!! :-)\n\n' + JSON.stringify(this.registroForm.value, null, 4));
    //alert('Fecha ' + this.usuarioACrear.fechaCreacion);
  }

  onReset() {
    this.submitted = false;
    this.registroForm.reset();
  }

  guardarUsuario(){
    this.usuarioService.guardarUsuario(this.usuarioACrear).subscribe(
     resultado => {
        this.resultadoCreacion = true;
        this.registroForm.reset();
        //console.log('Resultados ' + resultado);
    },
      err => {
        this.resultadoCreacion = false;
        //console.log('Error ' + err);
    });
  }

  consultarTodosLosUsuarios(){
      this.usuarioService.obtenerTodosLosUsuarios().subscribe(
      result => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
      }, 
      err => {
        console.log("Error consultando todos los usuarios");
      }
    );
  }

  /*onSubmit(){
    alert("estoy en onsubmit");
    console.log(this.usuario.nombres);
  }

  registerForm: FormGroup;
  submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('FORMULARIO CORRECTO!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }*/

}
