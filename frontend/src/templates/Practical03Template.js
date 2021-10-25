import React from 'react';

import { SelectableQuack } from 'src/molecules/';
import { Button } from 'src/atoms/';

export function Practical03Template({
  quacksState,
  selectedQuackId,
  setSelectedQuackId,
}) {
  return (
    <div>
      <Button onClick={() => quacksState.refetch()}>reload</Button>
      {quacksState.error && <div>{quacksState.error.message}</div>}
      {quacksState.loading && <div>Loading...</div>}
      {quacksState.data &&
        quacksState.data.quacks.map((quack) => {
          return (
            <SelectableQuack
              key={quack.id}
              quack={quack}
              isSelected={quack.id === selectedQuackId}
              onSelect={() => setSelectedQuackId(quack.id)}
            />
          );
        })}
    </div>
  );
}
