'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  name: string;
  value: any;
  queryCategory: string;
}

function Chip({ value, name, queryCategory }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = searchParams.getAll(queryCategory).includes(name);

  const toggleIsActive = () => {
    const params = new URLSearchParams(searchParams);
    const currentParams = params.getAll(queryCategory);

    if (currentParams.includes(name)) {
      const nextParams = currentParams.filter(param => param !== name);
      params.delete(queryCategory);
      nextParams.forEach(param => params.append(queryCategory, param));
    } else {
      params.append(queryCategory, name);
    }
    router.push(`/courses/?${params.toString()}`);
  };
  return (
    <button
      onClick={toggleIsActive}
      className={`border rounded-full mr-2 my-[1px] px-4 py-[3px] text-sm font-semibold transition-colors
        ${isActive ? 'bg-elice-purple text-white' : 'bg-elice-white text-filtering-title'}`}
    >
      {name}
    </button>
  );
}

export default Chip;
