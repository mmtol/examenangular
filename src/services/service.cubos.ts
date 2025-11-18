import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import Usuario from "../models/Usuario";

@Injectable()
export default class ServiceCubos
{
    constructor(private _http:HttpClient){}

    getCubos():Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Cubos";
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getMarcas():Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Cubos/Marcas";
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getCubosMarca(marca:string):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Cubos/CubosMarca/"+marca;
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    iniciarSesion(usuario:Usuario):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Manage/Login";

        let data = JSON.stringify(usuario);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.post(url+endPoint, data, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getPerfil(token:any):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Manage/PerfilUsuario";

        let header = new HttpHeaders();
        header = header.set("Authorization", `Bearer ${token}`);
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getComprasUsuario(token:any):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Compra/ComprasUsuario";

        let header = new HttpHeaders();
        header = header.set("Authorization", `Bearer ${token}`);
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    comprar(token:any, idCubo:number):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Compra/InsertarPedido/"+idCubo;

        let header = new HttpHeaders();
        header = header.set("Authorization", `Bearer ${token}`);
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.post(url+endPoint, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    findCubo(idCubo:number):Promise<any>
    {
        let url = environment.api;
        let endPoint = "api/Cubos/"+idCubo;
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }
}