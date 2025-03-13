import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../../models/ejercicio.models';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-ejercicio',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent {

  
    motos: any;
    moto = new Moto(); 
  
    constructor(private ejercicioService: EjercicioService) {
      this.getMotos();
    }
    
    // Método para obtener todos los libros
    async getLibros(): Promise<void> {
      this.libros = await firstValueFrom(this.libroService.getLibros());
    }
  
  //metodo para insertar un libro desde el form
  
  insertarLibro(){
    this.libroService.agregarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }
  //metodo para seleccionar un libro de la tabla
  selectLibro(libroSeleccionado:Libro){
    this.libro = libroSeleccionado;
  }
  //metodo para modificar libro en form
  UpdateLibro(){
    this.libroService.modificarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }
  //metodo para eliminar libro
  deleteLibro(){
    this.libroService.eliminarLibro(this.libro);
    this.libro = new Libro();
    this.getLibros();
  }
}
