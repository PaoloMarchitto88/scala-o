import {doc, getFirestore, setDoc} from 'firebase/firestore'
import {initializeApp} from "firebase/app";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBweRLaFYO0aaGTRRdR6oJHImWT5LIEti8",
    authDomain: "galla-placidia-scala-o.firebaseapp.com",
    databaseURL: "https://galla-placidia-scala-o-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "galla-placidia-scala-o",
    storageBucket: "galla-placidia-scala-o.appspot.com",
    messagingSenderId: "803566173836",
    appId: "1:803566173836:web:51692d85d06cae12b6c5a9"
});

const firestore = getFirestore()


export const registraUtente = (utente) => {
    console.log(utente)
    const collezioneUtenti = doc(firestore, 'utenti/' + utente.nome)
    setDoc(collezioneUtenti, utente)
}
