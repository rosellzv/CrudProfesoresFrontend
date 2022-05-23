import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProfesorComponent } from './component/actualizar-profesor/actualizar-profesor.component';
import { AdicionarProfesorComponent } from './component/adicionar-profesor/adicionar-profesor.component';
import { ListaProfesoresComponent } from './component/lista-profesores/lista-profesores.component';
import { ProfesorDetallesComponent } from './component/profesor-detalles/profesor-detalles.component';

const routes: Routes = [
  {path: 'profesor',component:ListaProfesoresComponent},
  {path:'adicionar_profesor',component: AdicionarProfesorComponent},
  {path:'modificar_profesor/:id',component:ActualizarProfesorComponent},
  {path:'detalles_profesor/:id',component: ProfesorDetallesComponent},
  {path:'',redirectTo:'profesor',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
