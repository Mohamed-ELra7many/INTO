import React from 'react'
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />  {/*This is for downloading the home page */}
        </Route>
        <Route exact path="/team">
          <Team />   {/*This is for downloading the team page */}
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />    {/*This is for downloading the portfolio page */}
        </Route>
        <Route exact path="/contactUs">
          <Contact />     {/*This is for downloading the contactUs page */}
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App