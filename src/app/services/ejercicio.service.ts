import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { first } from 'rxjs';
import { Moto } from '../models/ejercicio.models';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
    private db: Firestore = inject(Firestore);

  constructor() { }
getMotos() {
    const motosCollection = collection(this.db, 'motos');
    return collectionData(motosCollection, { idField: 'id' })
      .pipe(first());
  }


  async agregarMoto(moto: Moto) {
    const motosCollection = collection(this.db, 'motos');
    const motoData = {
      modelo: moto.modelo,
      precio: moto.precio,
    };
    await addDoc(motosCollection, motoData);
  }

  async modificarMoto(moto: Moto) {
    const documentRef = doc(this.db, 'motos', moto.id);
    await updateDoc(documentRef, {
      modelo: moto.modelo,
      precio: moto.precio,
    });
  }

  async eliminarMoto(moto: Moto) {
    const documentRef = doc(this.db, 'motos', moto.id);
    await deleteDoc(documentRef);
  }
}

