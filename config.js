import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';



if (!firebase.apps.length) {
  var app = firebase.initializeApp({
      apiKey: process.env.FIREBASE_API,
      authDomain: "dishful-3d728.firebaseapp.com",
      databaseURL: "https://dishful-3d728.firebaseio.com",
      projectId: "dishful-3d728",
      storageBucket: "dishful-3d728.appspot.com",
  });
  app.settings = { timestampsInSnapshots: true }
} else {
  var app = firebase
}

var db = firebase.firestore(app);
var settings = { timestampsInSnapshots: true };
db.settings(settings);

var base = Rebase.createClass(db);

export default base
