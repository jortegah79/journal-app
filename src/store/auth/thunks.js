import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials())
        const result = await signInWithGoogle()
        console.log({ result });

        if (!result.ok) {
            dispatch(logout(result))
        }
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword({ email, password, displayName })
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, photoURL, email, password, displayName }))

    };
}

export const startSignInWithMailAndPassword = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())
        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailAndPassword(email, password);
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login({ uid, photoURL, email, password, displayName }))

    }

}

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await logoutFirebase();
            dispatch(logout())
        } catch (error) {

        }
    }
}