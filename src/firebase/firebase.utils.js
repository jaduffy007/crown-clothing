import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAaXbKU2oYdh27fF7U91DIrZaSN73WTi3E',
	authDomain: 'crown-db-71c84.firebaseapp.com',
	projectId: 'crown-db-71c84',
	storageBucket: 'crown-db-71c84.appspot.com',
	messagingSenderId: '523861168455',
	appId: '1:523861168455:web:75c5a89450b4cb75037c62',
	measurementId: 'G-EG5PYZWF3X',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
