import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    
   
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButton,
  ],
})
export class LoginPage {
  form: FormGroup;

  constructor(private auth: Auth, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginUser(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithRedirect(auth, provider)
      .then(() => {
        // Wait for the redirect result
        getRedirectResult(auth)
          .then((result) => {
            // Handle successful Google login
            console.log('Google login successful:', result.user);
          })
          .catch((error) => {
            // Handle error during redirect
            console.error('Google login error:', error);
          });
      })
      .catch((error) => {
        // Handle error before redirect
        console.error('Google login error:', error);
      });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid!');
      return;
    }

    const { email, password } = this.form.value;
    this.loginUser(email, password);
    this.form.reset();
  }
}


