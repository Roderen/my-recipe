import 'normalize.css';
import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {firebaseConfig} from "./firebase/firebase.tsx";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {BrowserRouter} from "react-router-dom";
import {getStorage} from 'firebase/storage';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export const Context = createContext<null | object>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{app, auth, firestore, storage}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
)
