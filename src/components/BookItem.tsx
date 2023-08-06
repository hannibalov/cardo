import {Book} from '../data/book'

export const BookItem = (book: Book) => {
  return (
    <div className="book">
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
