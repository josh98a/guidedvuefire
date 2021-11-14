import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({databaseURL: 'https://guidedvuefire8740-81a6a-default-rtdb.firebaseio.com'})
    .database()

export const drinkRef = db.ref('drinks')









