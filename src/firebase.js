import {initializeApp} from 'firebase';

const app = initializeApp ({
    apiKey: "AIzaSyBSnrUg8Q56nBn8XI0ZruIwJt7oAPK7Vac",
    authDomain: "adolfocallejo-13810.firebaseapp.com",
    databaseURL: "https://adolfocallejo-13810.firebaseio.com",
    projectId: "adolfocallejo-13810",
    storageBucket: "adolfocallejo-13810.appspot.com",
    messagingSenderId: "856428603812"
});

export const db = app.database();
export const actorsRef = db.ref('Actors');