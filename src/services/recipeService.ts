import {firebaseConfig} from "../firebase/firebase.tsx";
import {initializeApp} from "firebase/app";
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import {v4} from "uuid";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const recipesCollection = collection(firestore, "recipes");

type CreateRecipe = {
  title: string,
  descr: string,
  by: string,
  image: File | string,
  ingredients: string[],
}

export const fetchRecipes = async () => {
  const snapshot = await getDocs(recipesCollection);
  return snapshot.docs.map(val => ({...val.data(), id: val.id}));
}

export const createRecipe = async (e: CreateRecipe) => {
  const img = ref(storage, `recipe-images/${v4()}`)
  const valRef = collection(firestore, "recipes");
  const file = e.image[0];

  try {
    const data = await uploadBytes(img, file);
    const val = await getDownloadURL(data.ref);
    e.image = val;
    await addDoc(valRef, e);
  } catch (err) {
    console.log(err);
  }
}

// export const fetchOneRecipe = async (id) => {
//   const queryData = query(recipesCollection, where("__name__", "==", id));
//   const snapshot = await getDocs(queryData);
//   return snapshot.forEach(doc => {
//     return doc.data()
//   })
// }