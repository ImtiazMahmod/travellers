import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { Alert } from "bootstrap";
import initAuth from "../Pages/Login/firebase.init";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const [error, setError] = useState(true);
  const provider = new GoogleAuthProvider();

  ///user state observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  ///sign in with email and password
  const login = (navigate, redirect_Uri) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        // history.go(0);
        navigate.push(redirect_Uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  ///google login
  const googleLogin = (navigate, redirect_uri) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        // setUser(result.user);
        console.log(result.user);
        navigate(redirect_uri);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  ///signUp user
  console.log(email);
  const newUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        // updateUser();
        // verifyEmail(result.user);
        setError("");
        // navigate("/home");
        ///solution for auto login after registration
        /// reload window
        // window.location.reload();
        // logout();
      })
      .catch((error) => setError(error.message));
  };
  console.log(user);

  ///verify Email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      return "verify";
    });
  };
  ///update user profile

  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      password: password,
      photoURL: "https://i.ibb.co/CQWnXtz/profile-user.png",
    })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  ///logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    login,
    isLoading,
    googleLogin,
    setIsLoading,
    setEmail,
    setName,
    setPassword,
    error,
    newUser,

    logout,
  };
};
export default useFirebase;
