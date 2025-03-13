import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../../models/ejercicio.models';
import { EjercicioService } from '../../services/ejercicio.service';
import { firstValueFrom } from 'rxjs';

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
    async getMotos(): Promise<void> {
      this.motos = await firstValueFrom(this.ejercicioService.getMotos());
    }
  
  //metodo para insertar un libro desde el form
  
  insertarMoto(){
    this.ejercicioService.agregarMoto(this.moto);
    this.moto = new Moto();
    this.getMotos();
  }
  //metodo para seleccionar un libro de la tabla
  selectMoto(motoSeleccionado:Moto){
    this.moto = motoSeleccionado;
  }
  //metodo para modificar libro en form
  UpdateMoto(){
    this.ejercicioService.modificarMoto(this.moto);
    this.moto = new Moto();
    this.getMotos();
  }
  //metodo para eliminar libro
  deleteMoto(){
    this.ejercicioService.eliminarMoto(this.moto);
    this.moto = new Moto();
    this.getMotos();
  }

  trackByMoto(index: number, moto: Moto) {
    return moto.id;
  }
  
}
