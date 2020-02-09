import * as firebase from 'firebase';


  const database = firebase.database();

  export const contactsRef = database.ref('contacts');
  export const addsRef = database.ref('ideas');
