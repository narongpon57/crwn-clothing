import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.util'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
