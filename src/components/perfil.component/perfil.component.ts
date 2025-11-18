import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import Perfil from '../../models/Perfil';

@Component
({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit
{
  public perfil!:Perfil;

  constructor(private _service:ServiceCubos,
              private _router:Router){}

  ngOnInit(): void 
  {
      let token = localStorage.getItem('token');
      if (!token)
      {
        this._router.navigate(["/login"]);
      }
      else
      {
        this._service.getPerfil(token).then(response =>
        {
            this.perfil = response;
        })
      }
  }
}
