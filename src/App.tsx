import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Dashboard} from './components/Dashboard'
import {signInWithGoogle, isLoggedIn} from './firebase/providers'

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(isLoggedIn())
  const handleLoginWithGoogle = async () => {
    console.log('handleLoginWithGoogle')
    await signInWithGoogle()
    console.log('handleLoginWithGoogle done', isLoggedIn())
    setIsSignedIn(isLoggedIn())
  }

  console.log('isSignedIn', isLoggedIn())

  return isSignedIn ? <Dashboard/>: (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="btn-signup" onClick={handleLoginWithGoogle}>
          Sign up
        </button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
