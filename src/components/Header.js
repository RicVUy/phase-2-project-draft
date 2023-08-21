//import React, { useState } from 'react'
import CurrentTime from './CurrentTime'

function Header({user, setUser}) {
  //const [] = useState(null)
  

  function handleLoginClick() {
    setUser({
      id: 1,
      username: "Ricardo"
    })
  }
  function handleLogoutClick() {
    setUser(null)
  }
  return (
    <header>
    <h1>TIMECARD</h1>
    <CurrentTime/>
    <nav>
   {user ? (
    <button onClick={handleLogoutClick}>LogOut</button>
   ) : (
    <button onClick={handleLoginClick}>Login</button>
   )}
    </nav>
   
    </header>
  )
}

export default Header