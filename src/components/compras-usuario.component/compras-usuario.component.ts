import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import Compra from '../../models/Compra';
import ServiceCubos from '../../services/service.cubos';

@Component
({
  selector: 'app-compras-usuario',
  standalone: false,
  templateUrl: './compras-usuario.component.html',
  styleUrl: './compras-usuario.component.css',
})
export class ComprasUsuarioComponent implements OnInit
{
  public compras!:Array<Compra>;

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
      this._service.getComprasUsuario(token).then(response =>
      {
          this.compras = response;
      })
    }
  }
}
