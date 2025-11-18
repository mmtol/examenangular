import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import ServiceCubos from '../../services/service.cubos';

@Component
({
  selector: 'app-cubos',
  standalone: false,
  templateUrl: './cubos.component.html',
  styleUrl: './cubos.component.css',
})
export class CubosComponent implements OnInit
{
  public cubos!:Array<Cubo>;

  constructor(private _service:ServiceCubos){}

  ngOnInit(): void 
  {
    this._service.getCubos().then(response =>
    {
      this.cubos = response;
    }) 
  }
}
