import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCb9Apx9XnC_FjOazC8cVkvntB3waCFeAg',
	authDomain: 'muso-ninjas-21e0d.firebaseapp.com',
	projectId: 'muso-ninjas-21e0d',
	storageBucket: 'muso-ninjas-21e0d.appspot.com',
	messagingSenderId: '221700465421',
	appId: '1:221700465421:web:53ccb8b30552e530de0644',
	measurementId: 'G-1VQ8YJFD71',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// setup timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
