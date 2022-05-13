// import { admin } from "firebase-admin";
// import { credential } from 'firebase-admin';
import { initializeApp, applicationDefault, credential } from 'firebase-admin/app';
import { getRemoteConfig } from "firebase/remote-config";

// import * as serviceAccount from './serviceAccountKey.json'
import { adminConfig } from './variables'

// export const adminFirebase = initializeApp();
// export const adminFirebase = initializeApp({
//     credential: applicationDefault(),
//     // databaseURL: 'firebase-adminsdk-b6jr0@test-remote-config-e2b48.iam.gserviceaccount.com'
// });

console.log('llave 2', adminConfig)
console.log('variable', process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS)
const firebaseAdmin = initializeApp({
    credential: credential.cert(adminConfig)
});

export const remoteConfigAdmin = getRemoteConfig(firebaseAdmin);