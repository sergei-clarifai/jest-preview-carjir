import { useState } from 'react';

const NewView = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <div data-testid="count">{cnt}</div>
      <div data-testid="increase" onClick={() => setCnt((v) => v + 1)}>
        INC
      </div>
    </div>
  );
};

export default NewView;
