import {useContext, useEffect, useState} from 'react'
import {ActionContext, ActionTypeEnum} from '../helpers/context'
import {upsertBook as upsertBookDB, getBook} from '../firebase/db'
import React from 'react'
import {uploadFile} from '../firebase/storage'

export const UpsertBook = () => {
  const [file, setFile] = useState()
  const [url, setUrl] = useState('')

  const {action, setAction} = useContext(ActionContext)
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (!action.bookId) return
      const book = await getBook(action.bookId)
      if (!book) return
      setTitle(book.title)
      setAuthor(book.author)
      setUrl(book.imageUrl)
    }
    fetchData()
  }, [action.bookId])

  const back = async () => {
    setAction({type: ActionTypeEnum.NONE})
  }
  const upsertBook = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const performUpsert = async (url: string) => {
      await upsertBookDB({id: action.bookId, title, author, imageUrl: url})
      setAction({type: ActionTypeEnum.NONE})
    }
    if (file) await uploadFile(file, performUpsert)
    else await performUpsert(url)
  }

  const handleFileSelected = (event: any) => {
    setFile(event.target.files[0])
  }

  return (
    <form onSubmit={upsertBook}>
      <button className="btn-back" onClick={back}>
        Back
      </button>
      <label>
        Book title:
        <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author name:
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <input type="file" onChange={handleFileSelected} accept="/image/*" />
      <input type="submit" value={action.type === ActionTypeEnum.ADD ? 'Add' : 'Update'} />
    </form>
  )
}
