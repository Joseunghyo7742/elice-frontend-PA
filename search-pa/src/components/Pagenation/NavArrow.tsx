import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  direction: 'prev' | 'next';
  isActive: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

function NavArrow({ direction, isActive }: Props) {
  const handleClickPrevArrow = () => {
    //

  };
  const handleClickNextArrow = () => {};

  return (
    <>
      {direction === 'prev' && (
        <button disabled={!isActive} onClick={handleClickPrevArrow}>
          <IoIosArrowBack size={24} color={isActive ? '#222' : '#ccc'} />
        </button>
      )}
      {direction === 'next' && (
        <button disabled={!isActive} onClick={handleClickNextArrow}>
          <IoIosArrowForward size={24} color={isActive ? '#222' : '#ccc'} />
        </button>
      )}
    </>
  );
}

export default NavArrow;
