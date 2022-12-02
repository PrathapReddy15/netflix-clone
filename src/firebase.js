import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyBlzDbh7W5Vm8iU2siTZjqgL3trfjQXmSA",
  authDomain: "netflix-clone-20da5.firebaseapp.com",
  projectId: "netflix-clone-20da5",
  storageBucket: "netflix-clone-20da5.appspot.com",
  messagingSenderId: "873078543930",
  appId: "1:873078543930:web:6e1bcfcdf9d2499db74703",
  measurementId: "G-BT9XV02X7N"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export{auth};

  export default db;