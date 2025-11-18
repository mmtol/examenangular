import { Component, viewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import Usuario from '../../models/Usuario';

@Component
({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent 
{
  public usuario!:Usuario;
  public mensaje!:string;

  @ViewChild("cajaEmail") cajaEmail:ElementRef;
  @ViewChild("cajaPasswd") cajaPasswd:ElementRef;

  constructor(private _service:ServiceCubos,
              private _router:Router)
  {

    this.cajaEmail = new ElementRef("");
    this.cajaPasswd = new ElementRef("");
  }

  iniciarSesion()
  {
    let email = this.cajaEmail.nativeElement.value;
    let passwd = this.cajaPasswd.nativeElement.value;

    this.usuario = new Usuario(email, passwd);

    this._service.iniciarSesion(this.usuario).then(response =>
    {
      localStorage.setItem('token', response.response);
      this._router.navigate(["/perfil"]);
    })
  }

  cerrarSesion()
  {
    if (localStorage.getItem('token'))
    {
      localStorage.removeItem('token');
      this.mensaje = "Sesion cerrada, para acceder al resto de pestañas, inicie sesión de nuevo"
    }
    else
    {
      this.mensaje = "Sesión ya cerrada"
    }
  }
}
