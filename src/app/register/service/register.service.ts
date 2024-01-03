import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  user$: Observable<firebase.default.User | null>;
  //  email: string | undefined;
  // password: string | undefined;
  nom:  string | undefined;
  auth: any;

  username: any;
  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
 ) {
    this.user$ = this.afAuth.authState;
  }

  async signIn(email: any, password: any): Promise<void> {
    console.log('email signIn', email, password );
    
    try {
      let user: any =  await this.afAuth.signInWithEmailAndPassword(email, password);
      if (user.user) {
        localStorage.setItem('user', JSON.stringify(user.user.multiFactor.user.uid));
        console.log(user.user.multiFactor.user.uid)
       }
      } catch (e) {
       console.log("Unexpected error occurred when trying to log you in.   Please try later")
      }
  }


  async signOut(): Promise<void> {
    await this.afAuth.signOut();
  }
 
  async register(email: any, username: any, password: any): Promise<void> {
    console.log('register', email, username, password);
    
    try {
      const userCredential: any = await this.afAuth.createUserWithEmailAndPassword(email  , password);
      const userId = userCredential.user.uid;
      console.log('userCredential', userCredential);
  
      await this.firestore.collection('users').doc(userId).set({
        username: username,
        email: email,
        password: password
      });
    } catch (error : any) {
      console.log("error catch",error, error.message);
    }
  }


}