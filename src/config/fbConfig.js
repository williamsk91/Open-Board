import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfM56F7AwpRcciF_KqcZop9QIIBWE8kJU",
    authDomain: "marioplan2-7b6d1.firebaseapp.com",
    databaseURL: "https://marioplan2-7b6d1.firebaseio.com",
    projectId: "marioplan2-7b6d1",
    storageBucket: "marioplan2-7b6d1.appspot.com",
    messagingSenderId: "869606324514"
  };
firebase.initializeApp(config);

export default firebase