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
export const imgRefs = app.storage().ref();
export const imgActors = imgRefs.child('/actores/');
export const imgAll = imgRefs.child('/img/');
export const imgEditorial = imgRefs.child('/editorial/');
export const imgMusica = imgRefs.child('/musica/');
export const imgPeople = imgRefs.child('/people/');
export const actorsRef = db.ref('Actors');
export const editorialRef = db.ref('Editorial');
export const peopleRef = db.ref('People');
export const musicaRef = db.ref('Musica');