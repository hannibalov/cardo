import {logoutFirebase} from '../firebase/providers'
import {UpsertBook} from './UpsertBook'

export const Dashboard = () => {
  const logout = async () => {
    await logoutFirebase()
  }
  return (
    <>
      <button className="btn-logout" onClick={logout}>
        Sign out
      </button>
      <UpsertBook />
    </>
  )
}
