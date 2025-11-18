import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import Cubo from '../../models/Cubo';
import ServiceCubos from '../../services/service.cubos';

@Component
({
  selector: 'app-cubos-marcas',
  standalone: false,
  templateUrl: './cubos-marcas.component.html',
  styleUrl: './cubos-marcas.component.css',
})
export class CubosMarcasComponent implements OnInit
{
  public cubos!:Array<Cubo>;
  public marca!:string;

  constructor(private _service:ServiceCubos,
              private _activeRoute:ActivatedRoute){}

  ngOnInit(): void 
  {
    this._activeRoute.params.subscribe((parametros:Params)=>
    {
      if (parametros["marca"] != null)
      {
        this.marca = parametros["marca"];
        
        this._service.getCubosMarca(this.marca).then(response =>
        {
          this.cubos = response;
        })  
      }
    })

  }
}
