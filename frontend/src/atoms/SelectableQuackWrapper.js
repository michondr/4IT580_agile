import React from 'react';
import { Button, QuackText } from '../pages/Practical03';

export function SelectableQuackWrapper({ isSelected, children }) {
  return (
    <div
      className={`mv2 pa2 br2 ${
        isSelected ? 'bg-light-green' : 'bg-black-05'
      } `}
    >
      {children}
    </div>
  );
}
