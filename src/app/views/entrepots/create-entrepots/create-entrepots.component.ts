import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-entrepots',
  templateUrl: './create-entrepots.component.html',
  styleUrls: ['./create-entrepots.component.scss']
})
export class CreateEntrepotsComponent {
  

  entrepots = new FormGroup({
    libelle: new FormControl(''),
    longitude: new FormControl(''),
    superficie: new FormControl(''),
    latitude: new FormControl(''),
    placer: new FormControl(''),
  })

  constructor(private firestore: AngularFirestore) {}

  creerEntrepot() {
    
    this.firestore.collection('entrepot').add({
      libelle : this.entrepots.value.libelle, 
      longitude : this.entrepots.value.longitude,
      superficie : this.entrepots.value.superficie,
      latitude : this.entrepots.value.latitude,
      placer : this.entrepots.value.placer,
    
    })
    .then((docRef) => {
      console.log('Document ajouté avec ID : ', docRef.id);
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du document : ', error);
    });
  }
}
