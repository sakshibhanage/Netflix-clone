import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDI29O1gwgGBoGa0oeuAmuurE8MfYX-V28",
    authDomain: "netflixx-9dd16.firebaseapp.com",
    projectId: "netflixx-9dd16",
    storageBucket: "netflixx-9dd16.appspot.com",
    messagingSenderId: "930902427015",
    appId: "1:930902427015:web:8fe8a6b1e426cfa8f03f22",
    measurementId: "G-CE9MZD35MB"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;