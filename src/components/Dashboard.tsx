import React, {useEffect} from 'react'
import {logoutFirebase} from '../firebase/providers'
import {BooksGrid} from './BooksGrid'
import {ActionContext, ActionTypeEnum} from '../helpers/context'
import {UpsertBook} from './UpsertBook'

export const Dashboard = () => {
  const [action, setAction] = React.useState({type: ActionTypeEnum.LIST})

  useEffect(() => {
    if (action.type === ActionTypeEnum.REFRESH) {
      setAction({type: ActionTypeEnum.LIST})
    }
  }, [action])

  const logout = async () => {
    await logoutFirebase()
  }
  return (
    <ActionContext.Provider value={{action, setAction}}>
      <div className="top-container">
        <button className="button" onClick={logout}>
          Sign out
        </button>
      </div>
      <div className="dashboard-container">
        {(action.type === ActionTypeEnum.ADD || action.type === ActionTypeEnum.UPDATE) && <UpsertBook />}
        {action.type === ActionTypeEnum.LIST && <BooksGrid />}
      </div>
    </ActionContext.Provider>
  )
}
