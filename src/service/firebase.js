// const firebase = require("firebase");
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwVE0y1cJYd_HJnz8aL68IpRiyGF652Ik",
    authDomain: "dgreenfitness-4461e.firebaseapp.com",
    databaseURL: "https://dgreenfitness-4461e.firebaseio.com",
    projectId: "dgreenfitness-4461e",
    storageBucket: "dgreenfitness-4461e.appspot.com",
    messagingSenderId: "656357471507",
    appId: "1:656357471507:web:842732b7a8133acf5856e6",
    measurementId: "G-WD4L07C286"
  };

  
    firebase.initializeApp(firebaseConfig);
   
export default firebase