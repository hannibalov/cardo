import {useContext, useState} from 'react'
import {Book} from '../data/book'
import {FaEdit, FaTrash} from 'react-icons/fa'
import {ActionContext, ActionTypeEnum} from '../helpers/context'
import {removeBook} from '../firebase/db'

export const BookItem = (book: Book) => {
  const [isHovered, setIsHovered] = useState(false)
  const {setAction} = useContext(ActionContext)

  const edit = async () => {
    if (!book.id) return
    setAction({type: ActionTypeEnum.UPDATE, bookId: book.id})
  }
  const remove = async () => {
    if (!book.id) return
    await removeBook(book.id)
    setAction({type: ActionTypeEnum.REFRESH})
  }

  return (
    <div className="book" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <div className="book-icons">
          <div className="icon delete-icon" onClick={remove}>
            <FaTrash />
          </div>
          <div className="icon edit-icon" onClick={edit}>
            <FaEdit />
          </div>
        </div>
      )}
      <img
        src={
          book.imageUrl ||
          'https://firebasestorage.googleapis.com/v0/b/cardo-8a280.appspot.com/o/Screenshot%202023-07-10%20at%2013.32.48.png?alt=media&token=88c2f110-dc75-4ab3-8edc-9616fe1d0164'
        }
        alt={book.title}
        className="book-image"
        width={250}
      />
      <div className="book-details">
        <div className="book-text">
          <h3>Title: {book.title}</h3>
          <p className="book-author">Author: {book.author}</p>
        </div>
      </div>
    </div>
  )
}
