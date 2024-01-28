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

    // try {
    //   const url = new URL(`http://localhost:3000/api/courses/`);
    //   url.searchParams.append('offset', '0');
    //   url.searchParams.append('count', '20');
    //   url.searchParams.append('filter_conditions', filterConditions.toString());
    //   const response = await fetch(url.toString());
    //   const data = await response.json();
    //   console.log(data); // Handle the fetched data
    // } catch (error) {
    //   console.error('Error fetching filtered courses:', error);
    // }
  };
  //params돌면서 filtered_conditions에 "$or":[{"tag_id":12},{"tag_id":13},{"tag_id":14}]} 식으로 추가
  //같은 queryCtegory면 같은 대괄호 안에 있도록.
  //{"$and":[{"title":"%자%"},{"$or":[{"tag_id":12},{"tag_id":13},{"tag_id":14}]},{"$or":[{"status":2},{"status":3},{"status":4}]},{"$or":[]},{"$or":[{"tag_id":9},{"tag_id":10}]},{"is_datetime_enrollable":true}]}
  //위와 같은 형식으로 추가. title은 keyword가 있으면 넣음. 만약 category=6&category=7이라면 Filtering_keyword_map을 봤을 때
  // {tag_id:12},{tag_id:13}에 해당. {"$or":[{"tag_id":12},{"tag_id":13}} 식으로 넣어주면됨.

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
