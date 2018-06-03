import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbRCH2yXzaaUZT3Vs3ZkuYyyUgsBk6WWw",
    authDomain: "catch-of-the-day-szd1991.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-szd1991.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;