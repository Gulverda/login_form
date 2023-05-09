import LoginForm from './loginform.js';
import React from "react";
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div>
        <div className="App">
            <LoginForm />
        </div>
      <div className="div1">
      <button className='toggle' onClick={() => setDarkMode(!darkMode)}>
        <div className="wre">
            <div className="tetri">
            </div>
        </div>
      </button>
      </div>
    </div>
  );
};

export default App;