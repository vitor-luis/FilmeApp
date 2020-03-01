import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeComponent } from './filme/filme.component';
import { CreateComponent } from './filme/create/create.component';
import { EditarComponent } from './filme/editar/editar.component';

export const ROUTES: Routes = [
    {path: 'filmes', component: FilmeComponent},
    {path: 'filmes/add', component: CreateComponent},
    {path: 'filmes/editar/:id', component: EditarComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
