import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: firebase.User | null = null;
  isLoggedIn: boolean = false;

  constructor(protected auth: AngularFireAuth, protected router: Router, protected db: AngularFirestore) {
    this.authListener();
  }

  authListener(){
    this.auth.onAuthStateChanged((credential)=>{
      if(credential){
        this.currentUser = credential
        this.isLoggedIn = true;
      }
      else{
        this.currentUser = null
        this.isLoggedIn = false;
      }
    })
  }

  async logIn(email: string, password: string) {
    let error = false;
    await this.auth.signInWithEmailAndPassword(email, password).catch(() => {
      error = true;
      alert("Hibás felhasználónév vagy jelszó!");
      return;
    });
  }

  async register(email: string, password: string, username: string) {
    let user: firebase.auth.UserCredential | void | null = null;
    try {
      user = await this.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        alert(error.message);
      });
    }
    catch { }
    if (user && user.user) {
      await user.user.updateProfile({
        displayName: username
      });
    }
    return user;
  }

  async logOut(){
    await this.auth.signOut();
  }
}
