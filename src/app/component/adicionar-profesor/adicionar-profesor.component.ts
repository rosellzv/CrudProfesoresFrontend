import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-adicionar-profesor',
  templateUrl: './adicionar-profesor.component.html',
  styleUrls: ['./adicionar-profesor.component.css']
})
export class AdicionarProfesorComponent implements OnInit {

  profesor : Profesor = new Profesor();
  constructor(private profesorServicio: ProfesorService,private router: Router) { }

  ngOnInit(): void {
    
  }
  guardarEmpleado(){
    this.profesorServicio.registrarProfesor(this.profesor).subscribe(dato =>{
      console.log(dato);
      this.irListaProfesores();
    },error => console.log(error));
  }

  irListaProfesores(){
    this.router.navigate(['/profesor']);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
