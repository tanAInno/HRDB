import React from 'react';
import ReactDOM from 'react-dom';

// main app
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyAPSklr8U-2HMapdUMgZH-BwgoMuQnnybQ",
    authDomain: "imagekeeper-da90d.firebaseapp.com",
    databaseURL: "https://imagekeeper-da90d.firebaseio.com",
    projectId: "imagekeeper-da90d",
    storageBucket: "imagekeeper-da90d.appspot.com",
    messagingSenderId: "703174936734"
};

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
    <AppRoutes />
    </Provider>,
document.getElementById('app')
)