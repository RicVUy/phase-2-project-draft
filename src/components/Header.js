import React from 'react'
import CurrentTime from './CurrentTime'
function Header() {
  return (
    <header>
    <h1>TIMECARD</h1>
    <CurrentTime/>
    <button>
        <nav>Employee Login</nav>
    </button>
    </header>
  )
}

export default Header