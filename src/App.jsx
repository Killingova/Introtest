import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <Header />
      <Main />
      <Footer />
      <button onClick={() => setDarkMode(!darkMode)} className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded">
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
