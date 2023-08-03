import React from 'react'
import {signInWithGoogle, signInWithEmailAndPassword, signUpWithEmailAndPassword} from '../firebase/providers'
import './Login.css'

import GoogleLogo from '../assets/google_logo.svg'

export const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async () => {
    await signInWithEmailAndPassword(email, password)
  }

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault() 
    await signUpWithEmailAndPassword(email, password)
  }

  const handleGoogleLogin = async () => {
    await signInWithGoogle()
  }

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault() 
    await handleLogin() 
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" data-testid="login-button">
          Login
        </button>
        <button onClick={handleSignUp} data-testid="signup-link">
          Sign Up
        </button>
      </div>
      <div>
        <button onClick={handleGoogleLogin} data-testid="google-login-button">
          <span>
            <img src={GoogleLogo} alt="Google Logo" width="24" height="24" />
          </span>
          Continue with Google
        </button>
      </div>
    </form>
  )
}
