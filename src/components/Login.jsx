import React, { useState } from 'react';

const Login = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    onLogin(username, password);
  };

  return (
    <div className="p-8">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300">
        &#10005; {/* X icon */}
      </button>
      <h1 className="text-2xl font-bold text-center mb-6 text-earth-terracotta dark:text-darkMode-accent">Herzlich Willkommen</h1>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 dark:text-darkMode-text mb-2">
          Benutzername:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-darkMode-text"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 dark:text-darkMode-text mb-2">
          Passwort:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-darkMode-text"
        />
      </div>
      <div className="flex justify-between mb-6 text-sm">
        <a href="#" className="text-bold-blue hover:underline dark:text-darkMode-accent">Passwort zurücksetzen</a>
        <a href="#" className="text-bold-blue hover:underline dark:text-darkMode-accent">Registrieren</a>
      </div>
      <button
        type="button"
        className="w-full bg-bold-green text-white p-2 rounded hover:bg-bold-blue dark:bg-darkMode-accent dark:hover:bg-darkMode-text"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
