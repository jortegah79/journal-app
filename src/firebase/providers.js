import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid, refreshToken, accessToken } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid, refreshToken, accessToken
        }

    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }

    }

}


export const registerWithEmailPassword = async ({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(firebaseAuth.currentUser, { displayName })
        console.log(firebaseAuth.currentUser);

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailAndPassword = async (email, password) => {

    try {
        const userData = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, displayName, photoURL } = userData.user;
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok: false,
            "errorMessage": error.message
        }
    }
}

export const logoutFirebase = async () => {
    await firebaseAuth.signOut();
}