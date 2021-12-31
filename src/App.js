import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  const [mode, setMode] = useState(false)
  const isModeLetters = mode ? 'letter-white' : 'letter-black'
  const isModeBackgrounds = mode ? 'background-black' : 'background-white'
  const isModeBodyBackground = mode ? 'Bodybackground-black' : 'Bodybackground-white'
  return (
    <>
      <Header mode={mode} setMode={setMode} isModeLetters={isModeLetters} isModeBackgrounds={isModeBackgrounds} />
      <Main isModeBodyBackground={isModeBodyBackground} isModeBackgrounds={isModeBackgrounds} isModeLetters={isModeLetters} mode={mode}/>
    </>
  )
}

export default App;
