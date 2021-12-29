import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC7ObDXNPIsPuU5S9QxoVeQ_iMSFTPKRTc',
	authDomain: 'dojo-blog-df4a9.firebaseapp.com',
	projectId: 'dojo-blog-df4a9',
	storageBucket: 'dojo-blog-df4a9.appspot.com',
	messagingSenderId: '617968244121',
	appId: '1:617968244121:web:da8c8c4b1c32e167356f08',
	measurementId: 'G-3K98NDFE9K',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
