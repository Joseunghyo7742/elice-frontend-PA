'use client';
import { FILTERING_KEYWORD_MAP } from 'app/api/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type FilterConditionType =
  | 'courseType'
  | 'format'
  | 'category'
  | 'level'
  | 'programmingLanguage'
  | 'price';
interface Props {
  id: string;
  name: string;
  value: any;
  filterCondition: FilterConditionType;
}
function Chip({ id, name, value, filterCondition }: Props) {
  const router = useRouter(); // url 동기화를 위함
  const searchParams = useSearchParams(); //현재 params값을 가져오기 위함
  const isActive = searchParams.getAll(filterCondition).includes(id);
  //filterCondition을 이름으로 가진 query 배열 반환 -> id포함여부 확인
  const keyword = searchParams.get('keyword');


  const handleChipClick = async () => {
    const params = new URLSearchParams(searchParams);
    const currentParams = params.getAll(filterCondition);
    if (currentParams.includes(id)) {
      params.delete(filterCondition, id);
    } else {
      params.append(filterCondition, id);
    }
    router.replace(`/courses?${params.toString()}`);
    
  };
  
  return (
    <button
      onClick={handleChipClick}
      className={`border rounded-full mr-2 my-[1px] px-4 py-[3px] text-sm font-semibold transition-colors
        ${isActive ? 'bg-elice-purple text-white' : 'bg-elice-white text-filtering-title'}`}
    >
      {name}
    </button>
  );
}

export default Chip;
