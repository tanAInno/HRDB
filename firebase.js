import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyAPSklr8U-2HMapdUMgZH-BwgoMuQnnybQ",
    authDomain: "imagekeeper-da90d.firebaseapp.com",
    databaseURL: "https://imagekeeper-da90d.firebaseio.com",
    projectId: "imagekeeper-da90d",
    storageBucket: "imagekeeper-da90d.appspot.com",
    messagingSenderId: "703174936734"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}