'use client';
import { FITERING_KEYWORD_MAP } from 'app/api/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  name: string;
  value: any;
  keyNum: string;
  queryCategory: string;
}

function Chip({ keyNum, value, name, queryCategory }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = searchParams.getAll(queryCategory).includes(keyNum);
  const keyword = searchParams.get('keyword');

  const toggleIsActive = async () => {
    const params = new URLSearchParams(searchParams);
    const currentParams = params.getAll(queryCategory);
    if (currentParams.includes(keyNum)) {
      params.delete(queryCategory, keyNum);
    } else {
      params.append(queryCategory, keyNum);
    }
    router.push(`/courses/?${params.toString()}`);

  }
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
