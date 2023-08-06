import {useContext, useEffect} from 'react'
import {ActionContext, ActionTypeEnum} from '../helpers/context'
import {getBooks} from '../firebase/db'
import {Book} from '../data/book'
import {BookItem} from './BookItem'
import React from 'react'

export const BooksGrid = () => {
  const [books, setBooks] = React.useState([] as Book[])
  useEffect(() => {
    const fetchData = async () => {
      const books = await getBooks()
      setBooks(books)
    }
    fetchData()
  }, [])
  const {setAction} = useContext(ActionContext)
  const back = async () => {
    setAction({type: ActionTypeEnum.NONE})
  }
  return (
    <>
      <button className="btn" onClick={back}>
        Back
      </button>
      <div className="grid">
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  )
}
