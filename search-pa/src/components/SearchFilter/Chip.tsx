'use client';
import { useState } from 'react';

interface Props {
  name: string;
}

function Chip({ name }: Props) {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={toggleIsActive}
      className={`border rounded-full mr-2 px-4 py-[4px] text-sm font-semibold transition-colors
        ${isActive ? 'bg-elice-purple text-white' : 'bg-elice-white text-filtering-title'}`}
    >
      {name}
    </button>
  );
}

export default Chip;
