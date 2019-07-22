import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authState: any = null;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { 
    this.afAuth.authState.subscribe(user => {
      this.authState = user;
      if (!this.authState) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['notes']);
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUser() {
    return this.authState;
  }

  isAuthenticated(): boolean {
    return this.authState !== null;
  }

}
