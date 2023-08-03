import {logoutFirebase, isLoggedIn} from '../firebase/providers'

export const Dashboard = () => {
    const logout = async () => {
        await logoutFirebase()
        console.log('handleLoginWithGoogle done', isLoggedIn())
    }
    return (
        <button className="btn-logout" onClick={logout}>
          Sign out
        </button>)
}