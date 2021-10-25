import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Practical03Template } from 'src/templates/Practical03Template';

const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      id
      text
      user {
        name
        userName
      }
    }
  }
`;

export function Practical03() {
  const quacksState = useQuery(QUACKS_QUERY);
  const [selectedQuackId, setSelectedQuackId] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      quacksState.refetch();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [quacksState.loading]);

  return (
    <Practical03Template
      quacksState={quacksState}
      selectedQuackId={selectedQuackId}
      setSelectedQuackId={setSelectedQuackId}
    />
  );
}
