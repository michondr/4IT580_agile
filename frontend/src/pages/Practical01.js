import React, { useState } from 'react';

import { Button, Heading } from 'src/atoms';

export function Practical01 () {
  const [getCount, setCount] = useState(0)
  return (
    <div>
      <Heading>Practical 01s</Heading>
      <p>Hello!</p>
      <p>count is {getCount}</p>
      <Button onClick={() => setCount(getCount + 1)}>
        +1 increment
      </Button>
    </div>
  );
}
