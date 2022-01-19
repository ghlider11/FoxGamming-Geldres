
import { initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKDlst4EozQz52P9nuA_WnAHCK-KlhQNI",
    authDomain: "projet-reactjs-dddf1.firebaseapp.com",
    projectId: "projet-reactjs-dddf1",
    storageBucket: "projet-reactjs-dddf1.appspot.com",
    messagingSenderId: "651377899654",
    appId: "1:651377899654:web:2644c52ce5a70b46ebf907"
  }

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)