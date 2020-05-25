var firebaseConfig = {
    apiKey: "AIzaSyDaVc9y8s8Au1TOxQ_RKq8ADuP_GQnWuhE",
    authDomain: "fire-ozz.firebaseapp.com",
    databaseURL: "https://fire-ozz.firebaseio.com",
    projectId: "fire-ozz"
}; 

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();
const func = firebase.functions();
