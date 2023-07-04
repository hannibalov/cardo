import {
    GoogleAuthProvider,
     signInWithPopup
} from 'firebase/auth'
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)

        const {uid } = result.user

        return uid

    } catch (e) {
        alert((e as Error).message)
    }
}


export const logoutFirebase = async () => await firebaseAuth.signOut()

