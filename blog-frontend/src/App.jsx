import { useState } from 'react'
import './App.css';
import LanguageSelector from "./components/language-selector";
import {Trans, useTranslation} from "react-i18next";
import './i18n/i18n';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const {t} = useTranslation();

  return (
    <>
      <div className="App">
      <Router>
        <Nav />
        <div className="container">
          <LanguageSelector />
          <h1>{t("greeting")}</h1>
          <span>
            <Trans
              i18nKey="description.line1"
              values={{ channel: "Black Heretic" }}
              components={{ 1: <b /> }}
            />
          </span>
          <span>{t("description.line2", { channel: "Black Heretic" })}</span>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App