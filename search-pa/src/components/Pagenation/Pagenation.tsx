import NavArrow from 'components/Pagenation/NavArrow';
import { MIN_PAGE_INDEX, VISIBLE_PAGE_INDEX } from 'constant';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Pagenation({ total, limit, page, setPage }: Props) {
  const TOTAL_PAGES = Math.ceil(total / limit);

  let startIndex = Math.max(MIN_PAGE_INDEX, page - 2); // 페이지 시작인덱스
  const endIndex = Math.min(TOTAL_PAGES, startIndex + VISIBLE_PAGE_INDEX - 1); //끝 인덱스
  if (endIndex - startIndex < VISIBLE_PAGE_INDEX - 1) {
    //시작 인덱스와 끝 인덱스의 갭이 보여질 페이지 수보다 작다면
    startIndex = endIndex - VISIBLE_PAGE_INDEX + 1;
  }
  const idxArr = Array.from({ length: VISIBLE_PAGE_INDEX }, (_, i) => i + startIndex);

  const handleIndexClick = (idx: number) => {
    setPage(idx);
  };

  return (
    <div className="flex items-center justify-between">
      <NavArrow direction="prev" page={page} setPage={setPage} limit={TOTAL_PAGES} />
      {idxArr.map(idx => (
        <button
          onClick={() => {
            handleIndexClick(idx);
          }}
          className={'w-6 h-6 ' + (page === idx ? 'text-white bg-elice-purple' : 'text-[#999]')}
        >
          {idx}
        </button>
      ))}

      <NavArrow direction="next" page={page} setPage={setPage} limit={TOTAL_PAGES} />
    </div>
  );
}

export default Pagenation;
