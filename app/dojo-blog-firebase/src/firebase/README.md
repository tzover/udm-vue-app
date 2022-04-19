# Create new file about config.js

> firebase version @8.0.0

```
yarn add firebase@8.0.0
```

```
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  // firebase config
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }

```
