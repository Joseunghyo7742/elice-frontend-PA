import NavArrow from 'components/Pagenation/NavArrow';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function Pagenation({ total, limit, page, setPage }: Props) {
  const total_page = Math.ceil(total / limit);
  const page_num = Array.from({ length: total_page }, (_, i) => i + 1); //[1,2,3..total_page]
  return (
    <div className="flex items-center">
      <NavArrow direction="prev" setPage={setPage} />
      {page_num.map(idx => (
        <button className="w-6 h-6 text-[#999]">{idx}</button>
      ))}
      <NavArrow direction="next" setPage={setPage} />
    </div>
  );
}

export default Pagenation;
