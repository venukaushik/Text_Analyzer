import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [modeIcon, setModeIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
  </svg>)

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setModeIcon(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </svg>)
      showAlert("Light Mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setModeIcon(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>)
      showAlert("Dark Mode has been enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextAnalyzer" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeIcon={modeIcon} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Try TextAnalyzer - Word Counter, Character Counter, Remove Extra Space" showAlert={showAlert} mode={mode} />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
