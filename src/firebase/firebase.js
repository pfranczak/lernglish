import firebase from 'firebase';

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
        console.log(config)
        this.app = firebase.initializeApp(config);
        this.db = this.app.firestore();
    }
    getQuestions = async () => {
        const snapshot = await this.db.collection('questions').get();
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };

    getQuestionsByCategory = async (categoryId) => {
        const snapshot = await this.db.collection('questions').where("categoryId", "==", categoryId).get();
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };

    getCategories = async () => {
        const snapshot = await this.db.collection('categories').get();
        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
    };


    createQuestion = async (word, translations, categoryId) => {
        await this.db.collection('questions').doc().set({
            word,
            translations,
            categoryId,
            isLearned: false,
            correctAnswers: 0,
        })
    };
}

export default Firebase;
