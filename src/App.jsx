import React from 'react'
import './App.css'
import {Brand,Cta,Navbar} from './components'
import {Blog,Header,Footer,Possibility,WhatGPT3,Features} from './containers'

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>

  )
   
}

export default App