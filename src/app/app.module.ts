import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProfesoresComponent } from './component/lista-profesores/lista-profesores.component';
import { HttpClientModule} from '@angular/common/http';
import { AdicionarProfesorComponent } from './component/adicionar-profesor/adicionar-profesor.component'
import { FormsModule } from '@angular/forms';
import { ActualizarProfesorComponent } from './component/actualizar-profesor/actualizar-profesor.component';
import { ProfesorDetallesComponent } from './component/profesor-detalles/profesor-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProfesoresComponent,
    AdicionarProfesorComponent,
    ActualizarProfesorComponent,
    ProfesorDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
