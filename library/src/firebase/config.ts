import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth'

export const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
  apiKey: 'AIzaSyBK5vUNmrqwKb-TqjGXA3kAztlKR37jgvQ',
  authDomain: 'cardo-8a280.firebaseapp.com',
  projectId: 'cardo-8a280',
  storageBucket: 'cardo-8a280.appspot.com',
  messagingSenderId: '1071352376592',
  appId: '1:1071352376592:web:2a926f7e9688ac1e22c995',
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
