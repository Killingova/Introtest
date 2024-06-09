import React, { useState } from 'react';

const Header = ({ isLoggedIn }) => {
  const [hover, setHover] = useState(false);

  return (
    <header className="p-4">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <h1 className="text-2xl">Create your</h1>
        {isLoggedIn && hover && (
          <nav className="mt-2">
            <ul className="flex flex-col space-y-2">
              <li>Main 1
                <ul className="ml-4">
                  <li>Sub 1.1</li>
                  <li>Sub 1.2</li>
                  <li>Sub 1.3</li>
                  <li>Sub 1.4</li>
                </ul>
              </li>
              <li>Main 2
                <ul className="ml-4">
                  <li>Sub 2.1</li>
                  <li>Sub 2.2</li>
                  <li>Sub 2.3</li>
                  <li>Sub 2.4</li>
                </ul>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
