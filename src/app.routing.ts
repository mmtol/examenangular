import { Routes, RouterModule } from "@angular/router";
import { CubosComponent } from "./components/cubos.component/cubos.component";
import { CubosMarcasComponent } from "./components/cubos-marcas.component/cubos-marcas.component";
import { LoginComponent } from "./components/login.component/login.component";
import { PerfilComponent } from "./components/perfil.component/perfil.component";
import { ComprasUsuarioComponent } from "./components/compras-usuario.component/compras-usuario.component";
import { ComprarComponent } from "./components/comprar.component/comprar.component";

const appRoutes:Routes=
[
    {
        path:"cubos",
        component:CubosComponent
    },
    {
        path:"cubosmarca/:marca",
        component:CubosMarcasComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"perfil",
        component:PerfilComponent
    },
    {
        path:"comprasusuario",
        component:ComprasUsuarioComponent
    },
    {
        path:"comprar",
        component:ComprarComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);