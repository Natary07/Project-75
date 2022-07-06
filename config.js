import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAHFxa6zFeapqlv0I9D8d6XlHsIZovsk-U",
  authDomain: "project-71-9acf2.firebaseapp.com",
  projectId: "project-71-9acf2",
  storageBucket: "project-71-9acf2.appspot.com",
  messagingSenderId: "999230887683",
  appId: "1:999230887683:web:f31c731f320dca35a27b36"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();
