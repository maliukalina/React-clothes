import  React, {useState} from "react"
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDNE_5k9vJR2cdiIEZouDJ766nP9htDLxU",
  authDomain: "am-clothes.firebaseapp.com",
  projectId: "am-clothes",
  storageBucket: "am-clothes.appspot.com",
  messagingSenderId: "687088539539",
  appId: "1:687088539539:web:8718f77c972c3af763ba66"
};

// Initialize Firebase


function Login() {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] =useState("")
  let history = useHistory()
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => didLogin(res.user))
    .catch(err => alert(err.message))
  }
  const googleLogin =(e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(res => didLogin(res.user))
    .catch(err => alert(err.message))
  }
  const didLogin = (user) => {
    localStorage.setItem('userId', user.uid)
  
    history.push('/add')
  }
  return(
    <>
    <h1>Please login</h1>
    <form onSubmit={e => {
      e.preventDefault()
      userLogin()

    }}>
      <label htmlFor="email">Email:
      <input type="email" name="email" value={email}
      onChange={e => setEmail(e.target.value)} />
      </label >
      <br />
      <label htmlFor="password">Password:
      <input type="password" name="password" value={password}
      onChange={e => setPassword(e.target.value)} />
      </label >
      <br />
      <input type="submit" value ="Login" />
      &nbsp;
      <button onClick={e => googleLogin(e)}>Sign in  with Google</button>
    </form>
    </>
  )
}

export default Login