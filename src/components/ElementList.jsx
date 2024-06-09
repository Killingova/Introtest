import React from 'react';

const ElementList = ({ hover, elements }) => {
  const radius = 200; // Radius des Kreises
  const angleStep = (2 * Math.PI) / elements.length; // Winkel zwischen den Elementen

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {elements.map((element, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className={`element p-4 bg-white dark:bg-gray-700 rounded shadow-md grid-item`}
            style={{
              top: hover ? `${50 + y}%` : 'unset',
              left: hover ? `${50 + x}%` : 'unset',
              transform: hover ? 'translate(-50%, -50%)' : 'none',
            }}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default ElementList;
