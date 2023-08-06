import {Book} from '../data/book'
import {firestore} from './config'
import {addDoc, collection, getDocs, getDoc, doc, setDoc, deleteDoc} from 'firebase/firestore'

export const upsertBook = async (book: Book) => {
  if (!book.id) {
    const booksRef = collection(firestore, 'books')
    delete book.id
    await addDoc(booksRef, book)
  } else {
    const booksRef = doc(firestore, 'books', book.id)
    await setDoc(booksRef, book)
  }
}

export const getBook = async (id: string) => {
  const booksRef = doc(firestore, 'books', id)
  return (await getDoc(booksRef)).data()
}
export const removeBook = async (id: string) => {
  await deleteDoc(doc(firestore, 'books', id))
}

export const getBooks = async () => {
  const booksRef = collection(firestore, 'books')

  const snapshot = await getDocs(booksRef)

  const books: Book[] = []

  snapshot.forEach((doc) => {
    books.push({
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      imageUrl: doc.data().imageUrl,
    })
  })
  return books
}
