import React from 'react'
import {logoutFirebase} from '../firebase/providers'
import {BooksGrid} from './BooksGrid'
import {ActionContext, ActionTypeEnum} from '../helpers/context'
import {UpsertBook} from './UpsertBook'

export const Dashboard = () => {
  const [action, setAction] = React.useState({type: ActionTypeEnum.NONE})

  const logout = async () => {
    await logoutFirebase()
  }
  const addBook = async () => {
    setAction({type: ActionTypeEnum.ADD})
  }
  const listBooks = async () => {
    setAction({type: ActionTypeEnum.LIST})
  }
  return (
    <ActionContext.Provider value={{action, setAction}}>
      <button className="btn-logout" onClick={logout}>
        Sign out
      </button>
      {action.type === ActionTypeEnum.NONE && (
        <>
          <button className="btn-add" onClick={addBook}>
            Add book
          </button>
          <button className="btn-list" onClick={listBooks}>
            List books
          </button>
        </>
      )}
      {(action.type === ActionTypeEnum.ADD || action.type === ActionTypeEnum.UPDATE) && <UpsertBook />}
      {action.type === ActionTypeEnum.LIST && <BooksGrid />}
    </ActionContext.Provider>
  )
}
