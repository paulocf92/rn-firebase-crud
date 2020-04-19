import Firebase from 'firebase';

import {
  API_KEY,
  PROJECT_ID,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

let config = {
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};

let app = Firebase.initializeApp(config);

export const db = app.database();
