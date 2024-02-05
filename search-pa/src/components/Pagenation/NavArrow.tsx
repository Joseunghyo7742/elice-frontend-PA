import { MIN_PAGE_INDEX } from 'constant';
import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  direction: 'prev' | 'next';
  page: number;
  limit: number;
  setPage: Dispatch<SetStateAction<number>>;
}
function NavArrow({ direction, page, limit, setPage }: Props) {
  const isStartPage = page === MIN_PAGE_INDEX;
  const isEndPage = page === limit;
  const handleClickPrevArrow = () => {
    setPage(prev => prev - 1);
  };
  const handleClickNextArrow = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {direction === 'prev' && (
        <button disabled={isStartPage} onClick={handleClickPrevArrow}>
          <IoIosArrowBack size={24} color={isStartPage ? '#ccc' : '#222'} />
        </button>
      )}
      {direction === 'next' && (
        <button disabled={isEndPage} onClick={handleClickNextArrow}>
          <IoIosArrowForward size={24} color={isEndPage ? '#ccc' : '#222'} />
        </button>
      )}
    </>
  );
}

export default NavArrow;
