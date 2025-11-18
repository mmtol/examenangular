import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import Cubo from '../../models/Cubo';
import Perfil from '../../models/Perfil';
import Compra from '../../models/Compra';

@Component
({
  selector: 'app-comprar',
  standalone: false,
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css',
})
export class ComprarComponent implements OnInit
{
  public cubos!:Array<Cubo>;
  public cubo!:Cubo;
  public perfil!:Perfil;

  @ViewChild("cajaCubo") cajaCubo:ElementRef;

  constructor(private _service:ServiceCubos,
              private _router:Router)
  {
    this.cajaCubo = new ElementRef(0);
  }

  ngOnInit(): void 
  {
    let token = localStorage.getItem('token');
    
    if (!token)
    {
      this._router.navigate(["/login"]);
    }
    else
    {
      this._service.getCubos().then(response =>
      {
        this.cubos = response;
      })
    }
  }

  sacarCubo()
  {
    let idCubo = this.cajaCubo.nativeElement.value;
    this._service.findCubo(idCubo).then(response =>
    {
      this.cubo = response;
    })
  }

  comprar()
  {
    let idCubo = this.cajaCubo.nativeElement.value;
    let token = localStorage.getItem('token');

    this._service.getPerfil(token).then(response =>
    {
      this.perfil = response;

      let compra = new Compra(idCubo, 0, this.perfil.idUsuario, "hoy");
      this._service.comprar(token, idCubo, compra).then(response =>
      {
        console.log(response);
      })
    })

  }
}
