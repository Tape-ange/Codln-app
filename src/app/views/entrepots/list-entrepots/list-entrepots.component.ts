import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import Swal from 'sweetalert2';

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

  dataSource : any;
  displayedColumns: string[] = ['libelle', 'superficie', 'placer', 'action'];
  donneesFirebase: Observable<unknown[]> | undefined;

  //donneesFirebase: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
    public dialog: MatDialog) {
    
  }
  ngOnInit() : void{
    this.getLIstEntrepot();
    console.log(this.getLIstEntrepot);
    
  }



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
        this.dataSource = res
        console.log("get",res);
        
      });
  }

  deleteEntrepot(data : any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-secondary ",
        cancelButton: "btn btn-primary "
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Etes vous Sure",
      text: "Suprimer l'entrepot",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Entrepot suprimé",
          icon: "success"
        });
       const id = {id: data} 
       console.log('Document supprimé avec succès 1.', id);
         this.firestore.collection('entrepot').doc('id').delete()
      .then(() => {
        console.log('Document supprimé avec succès.', id);
        swalWithBootstrapButtons.fire(
          'Suprimé',
          "L'entrepot a bien été suprimé",
          'success'
        );
        this.getLIstEntrepot();
     })
     .catch((error) => {
       console.error('Erreur lors de la suppression du document : ', error);
     });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
    
    
    // this.firestore.collection('entrepot').doc('id').delete()
    //   .then(() => {
    //     console.log('Document supprimé avec succès.', id);
    //   })
    //   .catch((error) => {
    //     console.error('Erreur lors de la suppression du document : ', error);
    //   });
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
