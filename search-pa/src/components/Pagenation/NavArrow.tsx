import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  direction: 'prev' | 'next';
  setPage: Dispatch<SetStateAction<number>>;
}
//color={isActive ? '#222' : '#ccc'
function NavArrow({ direction }: Props) {
  const handleClickPrevArrow = () => {
    //
  };
  const handleClickNextArrow = () => {};

  return (
    <>
      {direction === 'prev' && (
        <button onClick={handleClickPrevArrow}>
          <IoIosArrowBack size={24} />
        </button>
      )}
      {direction === 'next' && (
        <button onClick={handleClickNextArrow}>
          <IoIosArrowForward size={24} />
        </button>
      )}
    </>
  );
}

export default NavArrow;
