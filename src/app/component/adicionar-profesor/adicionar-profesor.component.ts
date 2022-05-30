import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-adicionar-profesor',
  templateUrl: './adicionar-profesor.component.html',
  styleUrls: ['./adicionar-profesor.component.css']
})
export class AdicionarProfesorComponent implements OnInit {

  profesor : Profesor = new Profesor();
  mensaje : String;
  
  constructor(private profesorServicio: ProfesorService,private router: Router) { }

  
  ngOnInit(): void {
    
  }
  guardarProfesor(profesor){
    const {nombre,apellido,asignatura,universidad,edad} = profesor;  
    
    console.log(profesor);
    if(nombre ==null || apellido==null || asignatura == null || universidad == null || edad == null)
    {
      console.log("Faltan campos por llenar");
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan campos por llenar!'        
      })
      this.addProfesor();
    }
    else{
      this.profesorServicio.registrarProfesor(this.profesor).subscribe(dato =>{      
        this.irListaProfesores();
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Se adicionaron los datos!'        
        })
      },error => console.log(error));
    }
  }

  irListaProfesores(){
    this.router.navigate(['/profesor']);
  }
  mensajeBack(){
    this.profesorServicio.buscarMensaje().subscribe(dato =>{
      this.mensaje = dato;
    })   
    console.log(this.mensaje); 
    return this.mensaje;
  }
  addProfesor(){
    this.router.navigate(['adicionar_profesor']);
  }

  onSubmit(){
    console.log("Paso por aqui");
    this.guardarProfesor(this.profesor);
  }

}
