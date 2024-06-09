import React, { useState } from 'react';

const Footer = ({ isLoggedIn }) => {
  const [hover, setHover] = useState(false);

  return (
    <footer className="p-4">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <h1 className="text-2xl">Real life</h1>
        {isLoggedIn && hover && (
          <nav className="mt-2">
            <ul className="flex flex-col space-y-2">
              <li>Footer Link 1</li>
              <li>Footer Link 2</li>
              <li>Footer Link 3</li>
              <li>Footer Link 4</li>
              <li>Footer Link 5</li>
              <li>Footer Link 6</li>
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer;
