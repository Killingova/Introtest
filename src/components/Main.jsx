import React, { useState, useRef } from 'react';
import ElementList from './ElementList.jsx';
import LoginButton from './LoginButton.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';

const zitate = [
  "Der Weg ist das Ziel.",
  "Was immer du tun kannst oder träumst es zu können, fang damit an.",
  "Die beste Zeit, einen Baum zu pflanzen, war vor 20 Jahren. Die zweit beste Zeit ist jetzt."
];

const Main = () => {
  const [hover, setHover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const zitatIndex = useRef(Math.floor(Math.random() * zitate.length));
  const [zitat, setZitat] = useState(zitate[zitatIndex.current]);

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const changeQuote = () => {
    const newZitatIndex = Math.floor(Math.random() * zitate.length);
    setZitat(zitate[newZitatIndex]);
  };

  const elements = [
    'Plan', 'Tagesplan', 'Wochenplan', 'Reflexion',
    'Element 1', 'Element 2', 'Element 3', 'Element 4',
    'Element 5', 'Element 6'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} />
      <main
        className="main-container flex-grow"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!isLoggedIn && (
          <div className="welcome centered">
            <h1 className="text-3xl">Willkommen</h1>
            <p className="text-center mb-8 max-w-2xl">
              CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
            </p>
            <LoginButton onClick={() => setShowLogin(true)} />
          </div>
        )}
        <div className={`grid-container ${isLoggedIn ? 'hidden' : ''}`}>
          <ElementList hover={hover} elements={elements} />
        </div>
        {showLogin && (
          <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />
        )}
      </main>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Main;
