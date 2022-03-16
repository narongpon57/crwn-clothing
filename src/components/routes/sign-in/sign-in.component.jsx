import React from 'react'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase.util'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  )
}

export default SignIn
