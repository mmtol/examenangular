import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';

@Component
({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit
{
  public marcas!:Array<string>;

  constructor(private _service:ServiceCubos){}

  ngOnInit(): void 
  {
     this._service.getMarcas().then(response =>
     {
        this.marcas = response;
     })
  }
}
