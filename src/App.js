import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Details from './components/Details'
import Error from './components/Error'


function App() {
  const [countriesData, setCountriesData] = useState([])
  const [mode, setMode] = useState(false)
  const isModeLetters = mode ? 'letter-white' : 'letter-black'
  const isModeBackgrounds = mode ? 'background-black' : 'background-white'
  const isModeBodyBackground = mode ? 'Bodybackground-black' : 'Bodybackground-white'
  return (
    <Routes>
      <Route path='/' element={<Main countriesData={countriesData} setCountriesData={setCountriesData} mode={mode} setMode={setMode} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} isModeBodyBackground={isModeBodyBackground} />} />
      <Route path='/CountrieDetail/:name' element={<Details countriesData={countriesData} mode={mode} setMode={setMode} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} isModeBodyBackground={isModeBodyBackground} />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App;