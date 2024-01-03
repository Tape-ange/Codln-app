import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
  public dialogRef: MatDialogRef<ModalComponent>,
  private firestore: AngularFirestore,
  //@Inject(MAT_DIALOG_DATA) public data: DialogData,

) {}

onNoClick(): void {
  this.dialogRef.close();
}
suprimer(): void{
   this.firestore.collection('entrepot').doc('id').delete()
      .then(() => {
        console.log('Document supprimé avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du document : ', error);
      });
}
}
