
import { 
    onAuthStateChanged, 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,
} from "firebase/auth";
import { useFirebaseUser } from "./useStates";

export default () => {
  const sign = ref(false)

  const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const createUser = async (email: string, password: string) => {
  const auth = getAuth();
    let userinfo
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      userinfo = user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
    return userinfo
}

 const initUser = async () => {
  const auth = getAuth();
  console.log("initUser")
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const uid = user.uid;
          console.log("user")
          console.log(user)
          sign.value = true
          firebaseUser.value = auth.currentUser
          
        } else {
          console.log("no user")
          sign.value = false
          return false
        }
        firebaseUser.value = user;
      });
    return auth
}

 const signOutUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  const result = await auth.signOut();
  firebaseUser.value = null
  return result;
};

return { createUser, signInUser, initUser,signOutUser, sign }
}







