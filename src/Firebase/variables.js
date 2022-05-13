// VARIABLES
const apiKey = process.env.REACT_APP_API_KEY
const authDomain = process.env.REACT_APP_AUTH_DOMAIN
const projectId = process.env.REACT_APP_PROJECT_ID
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGIN_SENDER_ID
const appId = process.env.REACT_APP_APP_ID
const measurementId = process.env.REACT_APP_MEASUREMENT_ID

const type = process.env.REACT_APP_TYPE
const project_id = process.env.REACT_APP_PROJECT_ID
const private_key_id = process.env.REACT_APP_PRIVATE_KEY_ID
const private_key = process.env.REACT_APP_PRIVATE_KEY
const client_email = process.env.REACT_APP_CLIENT_EMAIL
const client_id = process.env.REACT_APP_CLIENT_ID
const auth_uri = process.env.REACT_APP_AUTH_URI
const token_uri = process.env.REACT_APP_TOKE_URI
const auth_provider_x509_cert_url = process.env.REACT_APP_AUTH_PROVIDER_X509_CERT_URL
const client_x509_cert_url = process.env.REACT_APP_CLIENT_X509_CERT_URL

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};

export const adminConfig = {
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
}