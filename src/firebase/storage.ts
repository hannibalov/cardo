import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {storage} from './config'

export const uploadFile = async (file: File, setURL: Function) => {
  const storageRef = ref(storage, `/files/${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => {},
    (err) => console.log(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
        await setURL(url)
      })
    },
  )
}
