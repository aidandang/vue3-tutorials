import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDRhcuo9H6xBtYWRbTcB6cAr0Vlz5heiU0',
	authDomain: 'live-chat-69e2b.firebaseapp.com',
	projectId: 'live-chat-69e2b',
	storageBucket: 'live-chat-69e2b.appspot.com',
	messagingSenderId: '15847035926',
	appId: '1:15847035926:web:551028c2fe09c481af5137',
	measurementId: 'G-MG3FZ2CJ67',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
