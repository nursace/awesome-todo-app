import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyDuoCmDq-EK7Aw6R2zwoot1ucxXPiKkNvU",
    authDomain: "awesome-todo-2dd69.firebaseapp.com",
    databaseURL: "https://awesome-todo-2dd69.firebaseio.com",
    projectId: "awesome-todo-2dd69",
    storageBucket: "awesome-todo-2dd69.appspot.com",
    messagingSenderId: "972107882825",
    appId: "1:972107882825:web:79396a00b3fd7791807a98",
    measurementId: "G-YV8Y1960YH"
  };

 let firebaseApp = firebase.initializeApp(firebaseConfig)
 let firebaseAuth = firebaseApp.auth()
 let firebaseDb = firebaseApp.database()

 export { firebaseAuth, firebaseDb }
