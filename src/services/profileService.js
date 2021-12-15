import { collection, setDoc, updateDoc, getDoc, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export async function AddUserInfo(username, streamingService, currentGenre, userId) {
  try {
    await setDoc(doc(db, "Users", userId), {
      Streaming: streamingService,
      Username: username,
      Genre: currentGenre
    })
    console.log("Document written with ID: ", userId)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function EditUserInfo(username, streamingService, currentGenre, userId) {
  try {
    const userRef = doc(db, "Users", userId)
    console.log(streamingService)
    await updateDoc(userRef, {
      Username: username,
      Streaming: streamingService,
      Genre: currentGenre
    })
    console.log("Document written with ID: ", userId)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function getUserInfo(userId) {
  return await getDoc(doc(db, "Users", userId))
}
