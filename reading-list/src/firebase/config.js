import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA7nkMhIOV5zR4DMbGqGApO6c_M8tjNngU',
	authDomain: 'fb9-reading-list-505bd.firebaseapp.com',
	projectId: 'fb9-reading-list-505bd',
	storageBucket: 'fb9-reading-list-505bd.appspot.com',
	messagingSenderId: '762314815171',
	appId: '1:762314815171:web:593f316a1609c217ca9476',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
