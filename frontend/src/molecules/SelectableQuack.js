import React from 'react';
import { Button, QuackText, SelectableQuackWrapper } from 'src/atoms';

export function SelectableQuack({ isSelected, quack, onSelect }) {
  return (
    <SelectableQuackWrapper isSelected={isSelected}>
      <div>
        <p>
          <b>{quack.user.name}</b>
        </p>
        <br />
        <QuackText>{quack.text}</QuackText>
      </div>
      <Button onClick={onSelect}>Select user {quack.user.userName}</Button>
    </SelectableQuackWrapper>
  );
}
