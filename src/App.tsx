import React, { useState } from 'react'
import {Dashboard} from './components/Dashboard'
import { isLoggedIn, onUserLoggedIn} from './firebase/providers'
import { Login } from './components/Login'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(isLoggedIn())
  onUserLoggedIn(setIsSignedIn)

  return isSignedIn ? <Dashboard/> : <Login/>
}

export default App
