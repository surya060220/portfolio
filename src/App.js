import React, { Component } from 'react'
import Header from './components/Header/Header'
import Topconatiner from './components/Topcontainer/Topcontainer'
import Skillcontainer from './components/Skillcontainer/Skillcontainer'
import Projectcontainer from './components/Projectcontainer/Projectcontainer'


const App = () => {
  return (
    <div>
        <Header />
        <Topconatiner />
        <Skillcontainer />
        <Projectcontainer />
    </div>
  )
}

export default App