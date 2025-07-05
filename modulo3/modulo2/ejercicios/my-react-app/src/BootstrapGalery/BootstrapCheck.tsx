// BootstrapCard.tsx
import React from 'react';

export const BootstrapChack: React.FC = () => {
  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
        <label className="form-check-label" htmlFor="checkDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkChecked" checked />
        <label className="form-check-label" htmlFor="checkChecked">
          Checked checkbox
        </label>
      </div>
    </>
  );
};