  //HACEMOS LAS IMPORTACIONES DE FIREBASE UNA VEZ SE INSTALE 
  // npm install firebase --save
  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore'

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0kQRsCilwoYC330CKYCr8Z0fqll30hdQ",
    authDomain: "crud-udemy-9d1db.firebaseapp.com",
    databaseURL: "https://crud-udemy-9d1db.firebaseio.com",
    projectId: "crud-udemy-9d1db",
    storageBucket: "crud-udemy-9d1db.appspot.com",
    messagingSenderId: "155437066918",
    appId: "1:155437066918:web:8a3e8ebad894b49a2fe267",
    measurementId: "G-81FKLTTTTN"
  };
  // Guardamos en una constante la iniicialización de firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Una vez tenemos guardada la inicialización de firebase podemos inicializar firestore
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  //Exportamos la configuración
  export default firebaseApp.firestore()


