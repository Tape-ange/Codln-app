import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-list-entrepots',
  templateUrl: './list-entrepots.component.html',
  styleUrls: ['./list-entrepots.component.scss'],
})
export class ListEntrepotsComponent {
  listMenu = [
    {
      tittle: 'Campagnes',
      numbre: 12,
    },
    {
      tittle: 'Détails campagne',
      numbre: 12,
    },
    {
      tittle: 'Spéculations',
      numbre: 12,
    },
    {
      tittle: 'Détails spéculations',
      numbre: 12,
    },
    {
      tittle: 'Entrepots',
      numbre: 12,
    },
    {
      tittle: 'Groupements',
      numbre: 12,
    },
    {
      tittle: 'Exportateur',
      numbre: 12,
    },
    {
      tittle: 'Affectations exportative',
      numbre: 12,
    },
    {
      tittle: 'Villes',
      numbre: 12,
    },
    {
      tittle: 'Sites',
      numbre: 12,
    },
    {
      tittle: 'Zonages',
      numbre: 12,
    },
  ];

  entrepots = new FormGroup({
    libelle: new FormControl(''),
    longitude: new FormControl(''),
    superficie: new FormControl(''),
    latitude: new FormControl(''),
    placer: new FormControl(''),
  })

  dataSource = [];
  displayedColumns: any;
  donneesFirebase: Observable<unknown[]> | undefined;

  //donneesFirebase: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    // Remplacez 'collectionName' par le nom de votre collection dans Firestore 
  }
  ngOnInit() : void{
    this.getLIstEntrepot();
    console.log(this.getLIstEntrepot);
    
  }

  // getLIstEntrepot(): Observable{
  //   this.donneesFirebase = this.firestore.collection('entrepot').snapshotChanges();
  //   this.donneesFirebase.pipe(
  //     map(actions => {
  //       return actions.map(a => {
  //         const data = a.payload.doc.data() as any;
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       });
  //     })
  //   );
  // }

  getLIstEntrepot(): void {
    this.firestore.collection('entrepot').snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      ).subscribe(res =>{
        console.log("get",res);
        
      });
  }

  supprimerDonnee() {
    // Remplacez 'collectionName' par le nom de votre collection dans Firestore
    // et 'documentId' par l'ID du document que vous souhaitez supprimer.
    this.firestore.collection('entrepot').doc('id').delete()
      .then(() => {
        console.log('Document supprimé avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du document : ', error);
      });
  }
  modifierDonnee() {
    // Remplacez 'collectionName' par le nom de votre collection dans Firestore
    // et 'documentId' par l'ID du document que vous souhaitez mettre à jour.
    this.firestore.collection('entrepot').doc('id').update({
      libelle : this.entrepots.value.libelle, 
      longitude : this.entrepots.value.longitude,
      superficie : this.entrepots.value.superficie,
      latitude : this.entrepots.value.latitude,
      placer : this.entrepots.value.placer,
    })
    .then(() => {
      console.log('Document mis à jour avec succès.');
    })
    .catch((error) => {
      console.error('Erreur lors de la mise à jour du document : ', error);
    });
  }
}
