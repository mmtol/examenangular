import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from '../components/menu.component/menu.component';
import { CubosComponent } from '../components/cubos.component/cubos.component';
import { CubosMarcasComponent } from '../components/cubos-marcas.component/cubos-marcas.component';
import { LoginComponent } from '../components/login.component/login.component';
import { PerfilComponent } from '../components/perfil.component/perfil.component';
import { ComprasUsuarioComponent } from '../components/compras-usuario.component/compras-usuario.component';
import { ComprarComponent } from '../components/comprar.component/comprar.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { routing } from '../app.routing';
import { AppRoutingModule } from './app-routing-module';
import { appRoutingProvider } from '../app.routing';
import { App } from './app';
import ServiceCubos from '../services/service.cubos';
import { RouterModule } from '@angular/router';

@NgModule
({
  declarations: 
  [
    App,
    MenuComponent,
    CubosComponent,
    CubosMarcasComponent,
    LoginComponent,
    PerfilComponent,
    ComprasUsuarioComponent,
    ComprarComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceCubos
  ],
  bootstrap: [App]
})
export class AppModule { }
