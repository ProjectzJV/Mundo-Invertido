import app from './app.js'
import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscribe) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-club')
    const docRef = await addDoc(hellfireClubCollection, subscribe)
    return docRef.id
}