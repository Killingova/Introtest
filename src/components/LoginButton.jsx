import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import usePortal from '../hooks/usePortal.jsx';

const LoginButton = forwardRef(({ onClick }, ref) => {
  const buttonRef = useRef();
  const portalRef = usePortal('portal-root');

  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef.current.click();
    }
  }));

  return (
    <div ref={portalRef}>
      <button ref={buttonRef} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
        Anmelden
      </button>
    </div>
  );
});

export default LoginButton;
