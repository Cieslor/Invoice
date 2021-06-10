import firebase from 'firebase/app';

export type SignInAndUpResponse = firebase.auth.UserCredential;
export type FirebaseStorageError = firebase.storage.FirebaseStorageError;
export type FirestoreDocument = firebase.firestore.DocumentData;