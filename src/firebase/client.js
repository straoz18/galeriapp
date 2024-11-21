import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSfQFEpcnu-wemOIgtic4_in4Q6zdRDSs',
  authDomain: 'coderhouse-react-project-2d313.firebaseapp.com',
  projectId: 'coderhouse-react-project-2d313',
  storageBucket: 'coderhouse-react-project-2d313.appspot.com',
  messagingSenderId: '178133306292',
  appId: '1:178133306292:web:29d759118f6c32136a80e1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)