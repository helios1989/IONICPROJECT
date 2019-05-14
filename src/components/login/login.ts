import { Component } from '@angular/core';
import firebase from 'firebase';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  textname: string;
  text: string;

  constructor() {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }
  onLogin() {
    firebase.auth().signInWithEmailAndPassword('vergelbarit35@gmail.com', 'barit12345')
      .then((d)=> console.log('success'))
      .catch((e) => console.log('error', e));
  }
  onSignup() {
    console.log('signup');
  }
  register() {
    
    console.log('register')
    firebase.auth().createUserWithEmailAndPassword('vergelbarit35@gmail.com','barit12345').then(
      (d) => console.log(d, 'success')).catch((e) => console.log('e', e));

  }

  signUp() {
    firebase.firestore().collection("post").add({
      text: this.textname,
      created: firebase.firestore.FieldValue.serverTimestamp,
      owner: firebase.auth().currentUser.uid,
      owner_name: firebase.auth().currentUser.displayName
    }).then((doc) => console.log(doc));

  };
  getPost() {
    firebase.firestore().collection("post").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(JSON.stringify(doc.data()));
      })
    });
  }
}
