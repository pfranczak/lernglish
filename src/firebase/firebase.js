import firebase from 'firebase';
import "firebase/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


class Firebase {
    constructor() {
        this.app = firebase.initializeApp(config);
        this.db = this.app.firestore();
    }
    getQuestions = async () => {
        const uid = firebase.auth().currentUser.uid;
        const snapshot = await this.db.collection('questions').doc(uid).collection('questions').get();
        console.log(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };

    getQuestionsByCategory = async (categoryId) => {
        const uid = firebase.auth().currentUser.uid;
        const snapshot = await this.db.collection('questions').doc(uid).collection('questions').where("categoryId", "==", categoryId).get();
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };

    getCategories = async () => {
        const snapshot = await this.db.collection('categories').get();
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };

    createQuestion = async (word, translations, categoryId) => {
        const uid = firebase.auth().currentUser.uid;
        await this.db.collection('questions').doc(uid).collection('questions').doc().set({
            word,
            translations,
            categoryId,
            isLearned: false,
            correctAnswers: 0,
        })
    };

    signUp = async (email, password) => {
        try {
            await this.app
                .auth()
                .createUserWithEmailAndPassword(email, password);
        } catch (e) {
            console.error(e);
        }
    };

    logIn = async (email, password) => {
        try {
            await this.app
                .auth()
                .signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.error(e);
        }
    };

    onAuthStateChanged = async (setUser) => {
        await this.app.auth().onAuthStateChanged(setUser)
    }
}

export default Firebase;
