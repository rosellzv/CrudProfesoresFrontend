import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  profesores: Profesor[];
  constructor(private profesorServicio: ProfesorService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProfesores();
  }
  eliminarProfesor(id:number){
    this.profesorServicio.eliminarProfesor(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerProfesores();
      Swal.fire({
        icon: 'success',
        title: 'Bien hecho',
        text: 'Se elimino correctamente el profesor!'        
      })
      
    })
  }
  private obtenerProfesores(){
    this.profesorServicio.obtenerListaDeProfesores().subscribe(dato =>{
      this.profesores = dato;
    })
  }

  detallesProfesor(id: number){
    this.router.navigate(['detalles_profesor',id]);
  }
  modificarProfesor(id: number){
    this.router.navigate(['modificar_profesor',id]);
  }

  adicionar_profesor(){
    this.router.navigate(['adicionar_profesor']);
  }

  

}
