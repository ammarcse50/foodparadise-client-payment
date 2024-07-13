import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile, GoogleAuthProvider
} from "firebase/auth";
import { createContext,useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState([]);
  const Provider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User", currentUser);
      SetLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);
    const updateUserProfile = (name,photo)=>{
     return  updateProfile(auth.currentUser, {
        displayName: name , photoURL: photo
      })
    }
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = ()=>{
       
    SetLoading(true)
     return signInWithPopup(auth, Provider)


  }

  const signInUser = (email,password) => {
    SetLoading(true)
   return  signInWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    SetLoading(true)
   return  signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    googleLogin,
    signInUser,
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
